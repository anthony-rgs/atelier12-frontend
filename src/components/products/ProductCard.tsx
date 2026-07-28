import { Link } from "react-router-dom";
import type { Product } from "@/types/product";
import { CATEGORY_LABELS } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block border-b border-line pb-6"
    >
      <div className="relative aspect-3/4 overflow-hidden bg-paper">
        <span className="absolute left-3 top-3 z-10 bg-paper/90 px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-ink-soft">
          {CATEGORY_LABELS[product.category]}
        </span>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-2">
        <span className="font-mono text-sm font-medium uppercase tracking-[0.06em] text-ink">
          {product.name}
        </span>
        <span className="shrink-0 font-mono text-sm text-primary">
          {product.price} €
        </span>
      </div>
      <p className="mt-1 font-mono text-xs text-ink-soft">
        {product.describe1}
      </p>
    </Link>
  );
}
