import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { GalleryImage } from '@/types/gallery'

interface LightboxProps {
  image: GalleryImage | null
  onClose: () => void
}

export function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    if (!image) return
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    document.body.classList.add('overflow-hidden')
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.classList.remove('overflow-hidden')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [image, onClose])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/90 p-6"
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={onClose}
            className="absolute right-6 top-6 text-paper/80 transition-colors hover:text-paper"
          >
            <X size={28} />
          </button>
          <motion.img
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.96 }}
            src={image.src}
            alt={image.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
