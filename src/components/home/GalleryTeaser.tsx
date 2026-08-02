import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getGalleryImages } from "@/services/api";
import type { GalleryImage } from "@/types/gallery";
import { shuffle } from "@/lib/utils";
import { PageContainer } from "@/components/layout/PageContainer";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

const PREVIEW_COUNT = 6;

export function GalleryTeaser() {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    getGalleryImages().then((all) => setImages(shuffle(all).slice(0, PREVIEW_COUNT)));
  }, []);

  if (images.length === 0) return null;

  return (
    <section className="py-24 md:py-32">
      <PageContainer>
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-line pb-8">
            <div>
              <Heading variant="eyebrow">Galerie</Heading>
              <Heading
                variant="h2"
                className="mt-4"
              >
                Dans l'atelier
              </Heading>
            </div>
            <Link
              to="/galery"
              className="hidden shrink-0 items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-primary md:flex"
            >
              Voir tout
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="mt-10 columns-2 gap-4 md:columns-3">
            {images.map((image) => (
              <Link
                key={image.id}
                to="/galery"
                className="mb-4 block break-inside-avoid overflow-hidden"
                style={{ aspectRatio: image.aspectRatio }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </Link>
            ))}
          </div>

          <Link
            to="/galery"
            className="mt-10 flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-soft md:hidden"
          >
            Voir la galerie
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </PageContainer>
    </section>
  );
}
