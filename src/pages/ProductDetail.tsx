import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getProductBySlug } from "@/services/api";
import type { Product } from "@/types/product";
import { CATEGORY_LABELS } from "@/data/products";
import { PageContainer } from "@/components/layout/PageContainer";
import { Text } from "@/components/ui/Text";

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null | undefined>(undefined);

  useEffect(() => {
    if (!slug) return;
    getProductBySlug(slug).then((found) => setProduct(found ?? null));
  }, [slug]);

  if (product === undefined) return null;
  if (product === null)
    return (
      <Navigate
        to="/products"
        replace
      />
    );

  return (
    // Fills the space below the header so the footer shows up right after one scroll,
    // instead of the page feeling padded out with empty space.
    <div className="flex min-h-[calc(100dvh-4rem)] flex-col justify-center py-12 md:min-h-[calc(100dvh-5rem)] md:py-16">
      <PageContainer>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-primary"
        >
          <ArrowLeft size={14} />
          Retour aux produits
        </Link>

        <div className="mt-8 grid gap-12 md:grid-cols-2 md:gap-20">
          <div className="aspect-3/4 max-w-xs overflow-hidden md:max-w-sm">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <Text
              variant="caption"
              className="text-ink-soft"
            >
              {CATEGORY_LABELS[product.category]} · {product.brand}
            </Text>
            <h1 className="mt-3 font-mono text-2xl font-medium uppercase tracking-[0.04em] text-ink md:text-3xl">
              {product.name}
            </h1>
            <Text
              variant="lead"
              className="mt-6"
            >
              {product.describe1}
            </Text>
            <Text className="mt-2">{product.describe2}</Text>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-mono text-2xl text-primary">
                {product.price} €
              </span>
              <Text
                as="span"
                className="text-ink/50"
              >
                {product.quantity}
              </Text>
            </div>

            <Text
              variant="caption"
              className="mt-6"
            >
              Produit uniquement disponible en magasin
            </Text>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
