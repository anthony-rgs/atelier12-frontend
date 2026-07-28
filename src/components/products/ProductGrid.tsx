import type { Product } from '@/types/product'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return <p className="py-16 text-center font-sans text-ink/50">Aucun produit dans cette catégorie.</p>
  }

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
