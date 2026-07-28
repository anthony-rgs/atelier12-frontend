export interface GalleryImage {
  id: string
  src: string
  alt: string
  /** Intrinsic aspect ratio (width / height), used to size masonry items without layout shift. */
  aspectRatio: number
}
