import { lazy, Suspense } from 'react'
import type { GalleryImage } from '@/types/gallery'

const InfiniteGalleryScene = lazy(() => import('@/components/three/InfiniteGalleryScene'))

interface InfiniteGalleryProps {
  images: GalleryImage[]
  className?: string
}

// Desktop-only 3D take on the gallery: an infinite, depth-scrolling wall of photos driven by
// wheel/keyboard/touch. See MasonryGallery for the mobile equivalent.
export function InfiniteGallery({ images, className }: InfiniteGalleryProps) {
  const items = images.map((image) => ({ src: image.src, alt: image.alt }))

  return (
    <Suspense fallback={<div className={className} />}>
      <InfiniteGalleryScene images={items} speed={1.1} visibleCount={10} className={className} />
    </Suspense>
  )
}
