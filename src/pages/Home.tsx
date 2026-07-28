import { Hero } from "@/components/home/Hero";
import { ProductsTeaser } from "@/components/home/ProductsTeaser";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { PricesSection } from "@/components/home/PricesSection";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { ContactMap } from "@/components/home/ContactMap";

export function Home() {
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
