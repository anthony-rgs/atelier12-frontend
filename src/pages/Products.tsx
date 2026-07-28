import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getProducts } from '@/services/api'
import type { Product, ProductCategory } from '@/types/product'
import { shuffle } from '@/lib/utils'
import { PageContainer } from '@/components/layout/PageContainer'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { CategoryFilter } from '@/components/products/CategoryFilter'
import { ProductGrid } from '@/components/products/ProductGrid'

export function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [searchParams, setSearchParams] = useSearchParams()

  // Shuffled once per visit — a static catalogue order would always put the same shampoo
  // first, every time.
  useEffect(() => {
    getProducts().then((all) => setProducts(shuffle(all)))
  }, [])

  const activeCategory = (searchParams.get('categorie') as ProductCategory | null) ?? undefined

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return products
    return products.filter((product) => product.category === activeCategory)
  }, [products, activeCategory])

  function handleCategoryChange(category?: ProductCategory) {
    if (!category) {
      setSearchParams({})
    } else {
      setSearchParams({ categorie: category })
    }
  }

  return (
    <PageContainer className="py-16 md:py-24">
      <Reveal>
        <Heading variant="eyebrow">Boutique</Heading>
        <Heading variant="h1" className="mt-4">
          Nos produits
        </Heading>

        <div className="mt-10 mb-12">
          <CategoryFilter active={activeCategory} onChange={handleCategoryChange} />
        </div>
      </Reveal>

      <ProductGrid products={filteredProducts} />
    </PageContainer>
  )
}
