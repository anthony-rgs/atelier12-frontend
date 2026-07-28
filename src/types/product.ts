export type ProductCategory = 'shampoo' | 'styling' | 'care'

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
