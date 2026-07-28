import { useState } from 'react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

interface PriceLine {
  name: string
  price: string
  note?: string
}

const womenPrices: PriceLine[] = [
  { name: 'Coupe - Brushing', price: '42 € / 45 € / 50 €' },
  { name: 'Shampooing - Brushing', price: '23 € / 25 € / 30 € / 35 €' },
  { name: 'Soin', price: '6 € / 10 €' },
  { name: 'Mousse', price: '6 €' },
  { name: 'Couleur', price: '39 €' },
  { name: 'Couleur sans ammoniaque', price: '44 €' },
  { name: 'Shampooing - Américain', price: '39 €' },
  { name: 'Couleur Semi-Permanente', price: '34 €' },
  { name: 'Dose supplémentaire', price: '10 €' },
  { name: 'Flash', price: '20 € / 30 €' },
  { name: 'Décoloration cheveux court', price: '60 €' },
  { name: 'Décapage', price: '35 €' },
  { name: 'Balayage', price: '50 € / 64 € / 74 €' },
  {
    name: 'Forfait - Permanente',
    price: '80 € / 90 €',
    note: 'Shampooing, coupe, permanente, avec ou sans ammoniaque, brush',
  },
  { name: 'Coupe adolescente -18 ans', price: '39 €', note: 'Cheveux courts' },
  { name: 'Coupe enfant -10 ans', price: '20 €', note: 'Cheveux longs sur devis' },
]

const menPrices: PriceLine[] = [
  { name: 'Shampooing brushing', price: '20 €' },
  { name: 'Coupe', price: '27 €' },
  { name: 'Coupe adolescent -18 ans', price: '25 €' },
  { name: 'Coupe enfant -10 ans', price: '20 €' },
  { name: 'Taille de barbe', price: '8 €' },
  { name: 'Couleur', price: '34 € / 39 €' },
  { name: 'Shampooing américain', price: '25 €' },
  { name: 'Balayage', price: '36 € / 46 € / 56 €' },
  { name: 'Forfait permanente', price: '67 €', note: 'Shampooing, coupe, permanente, coiffage' },
]

function PriceList({ lines }: { lines: PriceLine[] }) {
  return (
    <ul className="divide-y divide-ink/10">
      {lines.map((line) => (
        <li key={line.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
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
            {line.price}
          </Text>
        </li>
      ))}
    </ul>
  )
}

export function PricesSection() {
  const [tab, setTab] = useState<'femme' | 'homme'>('femme')

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
