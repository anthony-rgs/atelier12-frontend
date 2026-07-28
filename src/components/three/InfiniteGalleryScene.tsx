import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

type ImageItem = string | { src: string; alt?: string }

interface FadeSettings {
  fadeIn: { start: number; end: number }
  fadeOut: { start: number; end: number }
}

interface BlurSettings {
  blurIn: { start: number; end: number }
  blurOut: { start: number; end: number }
  maxBlur: number
}

export interface InfiniteGalleryProps {
  images: ImageItem[]
  speed?: number
  visibleCount?: number
  fadeSettings?: FadeSettings
  blurSettings?: BlurSettings
  className?: string
}

interface PlaneData {
  index: number
  z: number
  imageIndex: number
  x: number
  y: number
}

const DEPTH_RANGE = 50
const MAX_HORIZONTAL_OFFSET = 8
const MAX_VERTICAL_OFFSET = 8

// A "cloth" shader: planes curve away and ripple based on scroll velocity, and wave like a
// flag on hover. Written in GLSL ES 1.00 syntax (texture2D/gl_FragColor) — three.js transpiles
// this automatically for the WebGL2 context, which is how the reference demo used it too.
function createClothMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      map: { value: null },
      opacity: { value: 1 },
      blurAmount: { value: 0 },
      scrollForce: { value: 0 },
      time: { value: 0 },
      isHovered: { value: 0 },
    },
    vertexShader: `
      uniform float scrollForce;
      uniform float time;
      uniform float isHovered;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        vec3 pos = position;

        float curveIntensity = scrollForce * 0.3;
        float distanceFromCenter = length(pos.xy);
        float curve = distanceFromCenter * distanceFromCenter * curveIntensity;

        float ripple1 = sin(pos.x * 2.0 + scrollForce * 3.0) * 0.02;
        float ripple2 = sin(pos.y * 2.5 + scrollForce * 2.0) * 0.015;
        float clothEffect = (ripple1 + ripple2) * abs(curveIntensity) * 2.0;

        float flagWave = 0.0;
        if (isHovered > 0.5) {
          float wavePhase = pos.x * 3.0 + time * 8.0;
          float dampening = smoothstep(-0.5, 0.5, pos.x);
          flagWave = sin(wavePhase) * 0.1 * dampening;
          flagWave += sin(pos.x * 5.0 + time * 12.0) * 0.03 * dampening;
        }

        pos.z -= (curve + clothEffect + flagWave);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D map;
      uniform float opacity;
      uniform float blurAmount;
      varying vec2 vUv;

      void main() {
        vec4 color = texture2D(map, vUv);

        if (blurAmount > 0.0) {
          vec2 texelSize = 1.0 / vec2(textureSize(map, 0));
          vec4 blurred = vec4(0.0);
          float total = 0.0;
          for (float x = -2.0; x <= 2.0; x += 1.0) {
            for (float y = -2.0; y <= 2.0; y += 1.0) {
              vec2 offset = vec2(x, y) * texelSize * blurAmount;
              float weight = 1.0 / (1.0 + length(vec2(x, y)));
              blurred += texture2D(map, vUv + offset) * weight;
              total += weight;
            }
          }
          color = blurred / total;
        }

        gl_FragColor = vec4(color.rgb, color.a * opacity);
      }
    `,
  })
}

function ImagePlane({
  texture,
  position,
  scale,
  material,
}: {
  texture: THREE.Texture
  position: [number, number, number]
  scale: [number, number, number]
  material: THREE.ShaderMaterial
}) {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    material.uniforms.map.value = texture
  }, [material, texture])

  useEffect(() => {
    material.uniforms.isHovered.value = isHovered ? 1 : 0
  }, [material, isHovered])

  return (
    <mesh
      position={position}
      scale={scale}
      material={material}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
    </mesh>
  )
}

function GalleryScene({
  images,
  speed = 1,
  visibleCount = 8,
  fadeSettings = {
    fadeIn: { start: 0.05, end: 0.25 },
    fadeOut: { start: 0.4, end: 0.43 },
  },
  blurSettings = {
    blurIn: { start: 0, end: 0.1 },
    blurOut: { start: 0.4, end: 0.43 },
    maxBlur: 8,
  },
}: Omit<InfiniteGalleryProps, 'className'>) {
  // Start with a little momentum instead of a dead stop, so the very first frame the
  // textures appear on is already gliding — not a static wall that just pops in.
  const [scrollVelocity, setScrollVelocity] = useState(3)
  const autoPlay = useRef(true)
  const lastInteraction = useRef(Date.now())

  const normalizedImages = useMemo(
    () => images.map((img) => (typeof img === 'string' ? { src: img, alt: '' } : img)),
    [images],
  )

  const textures = useTexture(normalizedImages.map((img) => img.src))
  const totalImages = normalizedImages.length

  const materials = useMemo(
    () => Array.from({ length: visibleCount }, () => createClothMaterial()),
    [visibleCount],
  )
  useEffect(() => () => materials.forEach((material) => material.dispose()), [materials])

  const spatialPositions = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, i) => {
        const horizontalAngle = (i * 2.618) % (Math.PI * 2)
        const verticalAngle = (i * 1.618 + Math.PI / 3) % (Math.PI * 2)
        const horizontalRadius = (i % 3) * 1.2
        const verticalRadius = ((i + 1) % 4) * 0.8
        return {
          x: (Math.sin(horizontalAngle) * horizontalRadius * MAX_HORIZONTAL_OFFSET) / 3,
          y: (Math.cos(verticalAngle) * verticalRadius * MAX_VERTICAL_OFFSET) / 4,
        }
      }),
    [visibleCount],
  )

  const planesData = useRef<PlaneData[]>([])
  useEffect(() => {
    planesData.current = Array.from({ length: visibleCount }, (_, i) => ({
      index: i,
      z: visibleCount > 0 ? ((DEPTH_RANGE / visibleCount) * i) % DEPTH_RANGE : 0,
      imageIndex: totalImages > 0 ? i % totalImages : 0,
      x: spatialPositions[i]?.x ?? 0,
      y: spatialPositions[i]?.y ?? 0,
    }))
  }, [spatialPositions, totalImages, visibleCount])

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      event.preventDefault()
      setScrollVelocity((prev) => prev + event.deltaY * 0.01 * speed)
      autoPlay.current = false
      lastInteraction.current = Date.now()
    },
    [speed],
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        setScrollVelocity((prev) => prev - 2 * speed)
        autoPlay.current = false
        lastInteraction.current = Date.now()
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        setScrollVelocity((prev) => prev + 2 * speed)
        autoPlay.current = false
        lastInteraction.current = Date.now()
      }
    },
    [speed],
  )

  useEffect(() => {
    const canvas = document.querySelector('canvas')
    if (!canvas) return
    canvas.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      canvas.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleWheel, handleKeyDown])

  useEffect(() => {
    const id = setInterval(() => {
      if (Date.now() - lastInteraction.current > 3000) autoPlay.current = true
    }, 1000)
    return () => clearInterval(id)
  }, [])

  useFrame((state, delta) => {
    if (autoPlay.current) setScrollVelocity((prev) => prev + 0.3 * delta)
    setScrollVelocity((prev) => prev * 0.95)

    const time = state.clock.getElapsedTime()
    // Falling back to totalImages here (instead of 1) would make each plane always land back
    // on the exact same image whenever visibleCount is a multiple of totalImages — e.g. our
    // 10 gallery photos with visibleCount=10 previously never cycled at all.
    const imageAdvance = totalImages > 0 ? (visibleCount % totalImages || 1) : 0

    materials.forEach((material) => {
      material.uniforms.time.value = time
      material.uniforms.scrollForce.value = scrollVelocity
    })

    planesData.current.forEach((plane, i) => {
      let newZ = plane.z + scrollVelocity * delta * 10
      let wrapsForward = 0
      let wrapsBackward = 0

      if (newZ >= DEPTH_RANGE) {
        wrapsForward = Math.floor(newZ / DEPTH_RANGE)
        newZ -= DEPTH_RANGE * wrapsForward
      } else if (newZ < 0) {
        wrapsBackward = Math.ceil(-newZ / DEPTH_RANGE)
        newZ += DEPTH_RANGE * wrapsBackward
      }

      if (wrapsForward > 0 && imageAdvance > 0 && totalImages > 0) {
        plane.imageIndex = (plane.imageIndex + wrapsForward * imageAdvance) % totalImages
      }
      if (wrapsBackward > 0 && imageAdvance > 0 && totalImages > 0) {
        const step = plane.imageIndex - wrapsBackward * imageAdvance
        plane.imageIndex = ((step % totalImages) + totalImages) % totalImages
      }

      plane.z = ((newZ % DEPTH_RANGE) + DEPTH_RANGE) % DEPTH_RANGE
      plane.x = spatialPositions[i]?.x ?? 0
      plane.y = spatialPositions[i]?.y ?? 0

      const normalizedPosition = plane.z / DEPTH_RANGE
      let opacity = 1
      if (normalizedPosition >= fadeSettings.fadeIn.start && normalizedPosition <= fadeSettings.fadeIn.end) {
        opacity =
          (normalizedPosition - fadeSettings.fadeIn.start) /
          (fadeSettings.fadeIn.end - fadeSettings.fadeIn.start)
      } else if (normalizedPosition < fadeSettings.fadeIn.start) {
        opacity = 0
      } else if (
        normalizedPosition >= fadeSettings.fadeOut.start &&
        normalizedPosition <= fadeSettings.fadeOut.end
      ) {
        opacity =
          1 -
          (normalizedPosition - fadeSettings.fadeOut.start) /
            (fadeSettings.fadeOut.end - fadeSettings.fadeOut.start)
      } else if (normalizedPosition > fadeSettings.fadeOut.end) {
        opacity = 0
      }
      opacity = Math.max(0, Math.min(1, opacity))

      let blur = 0
      if (normalizedPosition >= blurSettings.blurIn.start && normalizedPosition <= blurSettings.blurIn.end) {
        const progress =
          (normalizedPosition - blurSettings.blurIn.start) /
          (blurSettings.blurIn.end - blurSettings.blurIn.start)
        blur = blurSettings.maxBlur * (1 - progress)
      } else if (normalizedPosition < blurSettings.blurIn.start) {
        blur = blurSettings.maxBlur
      } else if (
        normalizedPosition >= blurSettings.blurOut.start &&
        normalizedPosition <= blurSettings.blurOut.end
      ) {
        const progress =
          (normalizedPosition - blurSettings.blurOut.start) /
          (blurSettings.blurOut.end - blurSettings.blurOut.start)
        blur = blurSettings.maxBlur * progress
      } else if (normalizedPosition > blurSettings.blurOut.end) {
        blur = blurSettings.maxBlur
      }
      blur = Math.max(0, Math.min(blurSettings.maxBlur, blur))

      const material = materials[i]
      material.uniforms.opacity.value = opacity
      material.uniforms.blurAmount.value = blur
    })
  })

  if (normalizedImages.length === 0) return null

  return (
    <>
      {planesData.current.map((plane, i) => {
        const texture = textures[plane.imageIndex]
        const material = materials[i]
        if (!texture || !material) return null

        const worldZ = plane.z - DEPTH_RANGE / 2
        const image = texture.image as { width: number; height: number } | undefined
        const aspect = image ? image.width / image.height : 1
        const scale: [number, number, number] = aspect > 1 ? [2 * aspect, 2, 1] : [2, 2 / aspect, 1]

        return (
          <ImagePlane
            key={plane.index}
            texture={texture}
            position={[plane.x, plane.y, worldZ]}
            scale={scale}
            material={material}
          />
        )
      })}
    </>
  )
}

// Isolated in its own file, like the other three.js scenes, so it's only ever pulled in via
// React.lazy from components/gallery/InfiniteGallery.tsx.
export default function InfiniteGalleryScene({ images, speed, visibleCount, fadeSettings, blurSettings, className }: InfiniteGalleryProps) {
  return (
    // Eases in instead of popping the instant the textures finish loading.
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
    >
      <Canvas camera={{ position: [0, 0, 0], fov: 55 }} gl={{ antialias: true, alpha: true }}>
        {/* useTexture suspends — R3F needs the Suspense boundary inside the Canvas's own
            render tree to catch it, not just around the lazy-loaded module. */}
        <Suspense fallback={null}>
          <GalleryScene
            images={images}
            speed={speed}
            visibleCount={visibleCount}
            fadeSettings={fadeSettings}
            blurSettings={blurSettings}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  )
}
