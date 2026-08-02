import type { Product, ProductCategory } from '@/types/product'
import type { Review } from '@/types/review'
import type { GalleryImage } from '@/types/gallery'
import type { PriceCategory, PriceLine } from '@/types/price'
import type { Hours } from '@/types/hours'
import { strapiFetch, mediaUrl } from './strapi'

// Strapi paginates collection endpoints at 25 entries by default — this disables it so list
// queries always return everything (fine at this catalogue's size; revisit if it grows a lot).
const NO_PAGINATION = 'pagination[limit]=-1'

// Data-access layer backed by the Strapi API. Components only ever call the functions below —
// the raw Strapi response shapes (with `populate`d media, Strapi v5's flat attributes, etc.)
// are mapped to the app's own types right here, so a future API change only touches this file.

interface StrapiMedia {
  url: string
  width: number
  height: number
}

interface StrapiListResponse<T> {
  data: T[]
}

interface StrapiSingleResponse<T> {
  data: T
}

interface StrapiProduct {
  id: number
  name: string
  slug: string
  category: ProductCategory
  brand: string
  describe1: string
  describe2: string
  price: string
  quantity: string
  image: StrapiMedia
}

interface StrapiGalleryPhoto {
  id: number
  alt: string
  image: StrapiMedia
}

interface StrapiPriceLine {
  id: number
  category: PriceCategory
  name: string
  note: string | null
  prices: { id: number; amount: string }[]
}

interface StrapiReview {
  id: number
  name: string
  rating: number
  commentary: string
}

function toProduct(raw: StrapiProduct): Product {
  return {
    id: String(raw.id),
    slug: raw.slug,
    category: raw.category,
    brand: raw.brand,
    name: raw.name,
    describe1: raw.describe1,
    describe2: raw.describe2,
    price: raw.price,
    quantity: raw.quantity,
    image: mediaUrl(raw.image.url),
  }
}

export async function getProducts(category?: ProductCategory): Promise<Product[]> {
  const filter = category ? `&filters[category][$eq]=${category}` : ''
  const { data } = await strapiFetch<StrapiListResponse<StrapiProduct>>(
    `/api/products?populate=image${filter}&${NO_PAGINATION}`,
  )
  return data.map(toProduct)
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const { data } = await strapiFetch<StrapiListResponse<StrapiProduct>>(
    `/api/products?populate=image&filters[slug][$eq]=${encodeURIComponent(slug)}`,
  )
  return data[0] ? toProduct(data[0]) : undefined
}

export async function getReviews(): Promise<Review[]> {
  const { data } = await strapiFetch<StrapiListResponse<StrapiReview>>(
    `/api/reviews?${NO_PAGINATION}`,
  )
  return data.map((review) => ({
    id: String(review.id),
    name: review.name,
    rating: review.rating,
    commentary: review.commentary,
  }))
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const { data } = await strapiFetch<StrapiListResponse<StrapiGalleryPhoto>>(
    `/api/gallery-photos?populate=image&sort=order:asc&${NO_PAGINATION}`,
  )
  return data.map((photo) => ({
    id: String(photo.id),
    src: mediaUrl(photo.image.url),
    alt: photo.alt,
    aspectRatio: photo.image.width / photo.image.height,
  }))
}

export async function getPrices(category: PriceCategory): Promise<PriceLine[]> {
  const { data } = await strapiFetch<StrapiListResponse<StrapiPriceLine>>(
    `/api/price-lines?populate=prices&sort=order:asc&filters[category][$eq]=${category}&${NO_PAGINATION}`,
  )
  return data.map((line) => ({
    id: String(line.id),
    category: line.category,
    name: line.name,
    prices: line.prices.map((p) => p.amount),
    note: line.note ?? undefined,
  }))
}

export async function getHours(): Promise<Hours> {
  const { data } = await strapiFetch<StrapiSingleResponse<Hours>>('/api/horaire')
  return data
}
