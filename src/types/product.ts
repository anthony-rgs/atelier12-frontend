export type ProductCategory = 'shampoo' | 'styling' | 'care'

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  shampoo: 'Shampoings',
  styling: 'Produits coiffants',
  care: 'Soins',
}

export interface Product {
  id: string
  slug: string
  category: ProductCategory
  brand: string
  name: string
  describe1: string
  describe2: string
  price: string
  quantity: string
  image: string
}
