import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionGradient } from "./SectionGradient";
import { PageContainer } from "@/components/layout/PageContainer";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    // h-dvh alone would overflow past the sticky header's own height — this sizes the hero
    // to exactly fill what's left below the nav, down to the actual bottom of the window.
    <section className="relative flex h-[calc(100dvh-4rem)] flex-col items-center justify-center overflow-hidden bg-paper text-center md:h-[calc(100dvh-5rem)]">
      <SectionGradient />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <PageContainer className="relative z-10 flex flex-col items-center">
          <Heading variant="eyebrow">Paris 5ème — Depuis 2011</Heading>
          <Heading
            variant="display"
            as="h1"
            className="mt-6"
          >
            L' Atelier
          </Heading>
          <Text
            variant="lead"
            className="mt-8 max-w-xl text-ink/70"
          >
            Au cœur du 5ème arrondissement, à deux pas du Jardin des Plantes —
            conseil et savoir-faire dans une ambiance conviviale.
          </Text>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              as={Link}
              to="/products"
              variant="primary"
            >
              Voir les produits
            </Button>
            <Button
              as={Link}
              to="/galery"
              variant="secondary"
            >
              Voir la galerie
            </Button>
          </div>
        </PageContainer>
      </motion.div>
    </section>
  );
}
