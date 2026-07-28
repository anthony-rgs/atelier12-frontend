import { products } from '@/data/products'
import { reviews } from '@/data/reviews'
import { galleryImages } from '@/data/gallery'
import type { Product, ProductCategory } from '@/types/product'
import type { Review } from '@/types/review'
import type { GalleryImage } from '@/types/gallery'

// Thin data-access layer. Everything currently reads from the local, typed data files,
// but the shapes (Product, Review, GalleryImage) mirror what a future Strapi/Google
// Reviews API would return, so swapping the implementation later shouldn't require
// touching the components that call these functions.

export async function getProducts(category?: ProductCategory): Promise<Product[]> {
  if (!category) return products
  return products.filter((product) => product.category === category)
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return products.find((product) => product.slug === slug)
}

export async function getReviews(): Promise<Review[]> {
  // Later: fetch from Google Places API and keep 5-star reviews only.
  return reviews.filter((review) => review.rating === 5)
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  return galleryImages
}
