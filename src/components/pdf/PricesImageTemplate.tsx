import { forwardRef } from 'react'
import type { PriceCategory, PriceLine } from '@/types/price'
import { Heading } from '@/components/ui/Heading'

const CATEGORY_LABEL: Record<PriceCategory, string> = {
  femme: 'Femme',
  homme: 'Homme',
}

interface PricesImageTemplateProps {
  category: PriceCategory
  lines: PriceLine[]
}

// Rendered off-screen and rasterized to PNG (see html-to-image usage in PdfExport.tsx) — the
// mobile equivalent of PricesPdfDocument, sharing the same content but as real HTML so it
// picks up the site's actual fonts without needing to re-register them for a PDF renderer.
// Sized to A4 proportions (1240×1754 ≈ 150dpi) so it reads like "a page", same as the PDF —
// min-height only, never a fixed/overflow-hidden height, so a long list still shows in full
// instead of getting cropped.
export const PricesImageTemplate = forwardRef<HTMLDivElement, PricesImageTemplateProps>(
  function PricesImageTemplate({ category, lines }, ref) {
    const generatedOn = new Date().toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

    return (
      <div ref={ref} className="flex min-h-[1754px] w-310 flex-col bg-paper p-20 text-ink">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">
            L'Atelier 12 — Paris 5ème
          </p>
          <Heading variant="display" as="h1" className="mt-2">
            Tarifs <span className="text-primary">{CATEGORY_LABEL[category]}</span>
          </Heading>

          <div className="mt-6 border-t border-ink" />

          <ul>
            {lines.map((line) => (
              <li key={line.id} className="flex items-start justify-between gap-6 border-b border-line py-4">
                <div>
                  <p className="font-mono text-lg text-ink">{line.name}</p>
                  {line.note && <p className="mt-1 font-mono text-xs italic text-ink-soft">{line.note}</p>}
                </div>
                <p className="shrink-0 font-mono text-lg text-ink-soft">
                  {line.prices.map((price) => `${price} €`).join(' / ')}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-line pt-4 font-mono text-xs text-ink-soft">
          <span>12 rue Geoffroy-Saint-Hilaire, 75005 Paris — 01.47.07.59.28</span>
          <span>Mis à jour le {generatedOn}</span>
        </div>
      </div>
    )
  },
)
