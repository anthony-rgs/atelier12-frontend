import type { GalleryImage } from '@/types/gallery'

interface GalleryItemProps {
  image: GalleryImage
  onClick: () => void
}

export function GalleryItem({ image, onClick }: GalleryItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-3 block w-full break-inside-avoid overflow-hidden"
      style={{ aspectRatio: image.aspectRatio }}
    >
      <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />
    </button>
  )
}
