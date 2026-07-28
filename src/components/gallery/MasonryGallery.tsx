import { useState } from 'react'
import type { GalleryImage } from '@/types/gallery'
import { GalleryItem } from './GalleryItem'
import { Lightbox } from './Lightbox'

interface MasonryGalleryProps {
  images: GalleryImage[]
}

// NOTE: mobile-first layout only for now — a dedicated desktop art direction is planned
// separately, this keeps things functional (2 columns) in the meantime.
export function MasonryGallery({ images }: MasonryGalleryProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-3">
        {images.map((image) => (
          <GalleryItem key={image.id} image={image} onClick={() => setSelected(image)} />
        ))}
      </div>
      <Lightbox image={selected} onClose={() => setSelected(null)} />
    </>
  )
}
