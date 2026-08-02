import { Hero } from "@/components/home/Hero";
import { ProductsTeaser } from "@/components/home/ProductsTeaser";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { PricesSection } from "@/components/home/PricesSection";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { ContactMap } from "@/components/home/ContactMap";
import { usePageMeta } from "@/hooks/usePageMeta";

export function Home() {
  usePageMeta({
    title: "Salon de coiffure à Paris 5ème",
    description:
      "L'Atelier 12, salon de coiffure au cœur du 5ème arrondissement de Paris, à deux pas du Jardin des Plantes. Coupe, couleur, soins et produits L'Oréal.",
  });

  return (
    <>
      <Hero />
      <PricesSection />
      <ProductsTeaser />
      <ReviewsCarousel />
      <GalleryTeaser />
      <ContactMap />
    </>
  );
}
