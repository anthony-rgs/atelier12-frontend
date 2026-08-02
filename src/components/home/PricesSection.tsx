import { useEffect, useState } from 'react'
import { getPrices } from '@/services/api'
import type { PriceLine } from '@/types/price'
import { PageContainer } from '@/components/layout/PageContainer'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

function PriceList({ lines }: { lines: PriceLine[] }) {
  return (
    <ul className="divide-y divide-ink/10">
      {lines.map((line) => (
        <li key={line.id} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <Text as="span" className="text-ink">
              {line.name}
            </Text>
            {line.note && (
              <Text variant="caption" as="span" className="ml-0 block sm:ml-3 sm:inline">
                ({line.note})
              </Text>
            )}
          </div>
          <Text as="span" className="shrink-0 text-ink/50">
            {line.prices.map((price) => `${price} €`).join(' / ')}
          </Text>
        </li>
      ))}
    </ul>
  )
}

export function PricesSection() {
  const [tab, setTab] = useState<'femme' | 'homme'>('femme')
  const [womenPrices, setWomenPrices] = useState<PriceLine[]>([])
  const [menPrices, setMenPrices] = useState<PriceLine[]>([])

  useEffect(() => {
    getPrices('femme').then(setWomenPrices)
    getPrices('homme').then(setMenPrices)
  }, [])

  return (
    <section className="py-24 md:py-32">
      <PageContainer>
        <Reveal>
          {/* The title bar only appears on desktop, where both columns show at once — on
              mobile only one list shows at a time, and the tab toggle below is the divider. */}
          <div className="md:border-b md:border-line md:pb-8">
            <Heading variant="eyebrow">Tarifs</Heading>
            <Heading variant="h2" className="mt-4">
              Une prestation, un prix juste.
            </Heading>
          </div>

          {/* Mobile: toggle between the two lists. Desktop: both shown side by side. */}
          <div className="mt-10 flex gap-8 border-b border-ink/10 md:hidden">
            {(['femme', 'homme'] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setTab(value)}
                className={cn(
                  'relative pb-4 font-mono text-sm font-medium uppercase tracking-[0.14em] transition-colors',
                  tab === value ? 'text-primary' : 'text-ink-soft hover:text-ink',
                )}
              >
                {value}
                {tab === value && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-primary" />}
              </button>
            ))}
          </div>

          <div className="mt-4 md:mt-14 md:grid md:grid-cols-2 md:gap-16">
            <div className={cn(tab !== 'femme' && 'hidden md:block')}>
              <Heading variant="h3" className="mb-6 hidden md:block">
                Femme
              </Heading>
              <PriceList lines={womenPrices} />
            </div>
            <div className={cn(tab !== 'homme' && 'hidden md:block')}>
              <Heading variant="h3" className="mb-6 hidden md:block">
                Homme
              </Heading>
              <PriceList lines={menPrices} />
            </div>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  )
}
