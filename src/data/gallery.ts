import type { GalleryImage } from '@/types/gallery'

// Placeholder gallery, built from the photos already on hand (shop + product shots).
// TODO: replace with media served by Strapi once the owner can upload salon/work photos.
const rawImages: Omit<GalleryImage, 'id'>[] = [
  { src: '/images/shop.webp', alt: "L'intérieur du salon", aspectRatio: 1886 / 1398 },
  { src: '/images/products/oreal-mythic-oil.webp', alt: 'Soin Mythic Oil', aspectRatio: 1800 / 2600 },
  { src: '/images/products/oreal-liss-unlimited.webp', alt: 'Gamme Liss Unlimited', aspectRatio: 1600 / 2600 },
  { src: '/images/shop-mobile.webp', alt: 'Vue du salon', aspectRatio: 2394 / 1352 },
  { src: '/images/products/oreal-blondifier-cool.webp', alt: 'Gamme Blondifier', aspectRatio: 1798 / 2593 },
  { src: '/images/products/inforcer-masque.webp', alt: 'Masque Inforcer', aspectRatio: 1800 / 2600 },
  { src: '/images/products/oreal-4mat.webp', alt: 'Cire de modelage MAT', aspectRatio: 1800 / 2600 },
  { src: '/images/products/oreal-pate-sculptante.webp', alt: 'Pâte sculptante WEB', aspectRatio: 1800 / 2600 },
  { src: '/images/products/oreal-laque.webp', alt: 'Laque coiffante', aspectRatio: 1800 / 2600 },
  { src: '/images/products/oreal-mousse.webp', alt: 'Mousse Full Volume Extra', aspectRatio: 1800 / 2600 },
]

export const galleryImages: GalleryImage[] = rawImages.map((image, index) => ({
  ...image,
  id: String(index),
}))
