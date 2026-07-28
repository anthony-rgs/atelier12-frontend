import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getProducts } from "@/services/api";
import type { Product } from "@/types/product";
import { shuffle } from "@/lib/utils";
import { PageContainer } from "@/components/layout/PageContainer";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/products/ProductCard";

const FEATURED_COUNT = 4;

export function ProductsTeaser() {
  const [products, setProducts] = useState<Product[]>([]);

  // A fresh random pick each visit, rather than always the same four products.
  useEffect(() => {
    getProducts().then((all) =>
      setProducts(shuffle(all).slice(0, FEATURED_COUNT)),
    );
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="py-24 md:py-32">
      <PageContainer>
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-line pb-8">
            <div>
              <Heading variant="eyebrow">Boutique</Heading>
              <Heading
                variant="h2"
                className="mt-4"
              >
                Nos produits
              </Heading>
            </div>
            <Link
              to="/products"
              className="hidden shrink-0 items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-primary md:flex"
            >
              Voir tout
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <Link
            to="/products"
            className="mt-10 flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-soft md:hidden"
          >
            Voir tous les produits
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </PageContainer>
    </section>
  );
}
