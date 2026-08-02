import { useEffect, useState } from "react";
import { getGalleryImages } from "@/services/api";
import type { GalleryImage } from "@/types/gallery";
import { PageContainer } from "@/components/layout/PageContainer";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";
import { InfiniteGallery } from "@/components/gallery/InfiniteGallery";
import { useIsDesktop, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

export function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const isDesktop = useIsDesktop();
  const reducedMotion = usePrefersReducedMotion();
  const showInfiniteGallery = isDesktop && !reducedMotion;

  useEffect(() => {
    getGalleryImages().then(setImages);
  }, []);

  // Fullscreen desktop mode owns its own scroll (wheel/keys drive the 3D scene) — the page
  // itself must not scroll underneath it.
  useEffect(() => {
    if (!showInfiniteGallery) return;
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [showInfiniteGallery]);

  if (showInfiniteGallery) {
    return (
      <div className="fixed inset-0 h-dvh w-full bg-paper">
        <InfiniteGallery
          images={images}
          className="h-full w-full"
        />

        {/* mix-blend-exclusion: the title's color reacts to whatever photo is behind it at
            that instant, exactly like the reference component's title treatment. */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center mix-blend-exclusion">
          <Heading
            variant="display"
            as="h1"
            className="text-white"
          >
            Galerie
          </Heading>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-10 z-10 text-center font-mono text-[11px] font-semibold uppercase text-ink-soft">
          <p>Molette, flèches ou glisser pour naviguer</p>
          <p className="opacity-60">
            Défilement automatique après 3 secondes d'inactivité
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <PageContainer>
        <Reveal>
          <Heading variant="eyebrow">Galerie</Heading>
          <Heading
            variant="h1"
            className="mt-4"
          >
            Dans l'atelier
          </Heading>
        </Reveal>
      </PageContainer>

      <div className="mt-10">
        <PageContainer>
          <MasonryGallery images={images} />
        </PageContainer>
      </div>
    </div>
  );
}
