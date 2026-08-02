import { useEffect, useState } from 'react'
import { getHours } from '@/services/api'
import type { Hours } from '@/types/hours'
import { PageContainer } from '@/components/layout/PageContainer'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

// Monday-first, matching the Hours type's fields.
const days: { key: keyof Hours; label: string }[] = [
  { key: 'lundi', label: 'Lundi' },
  { key: 'mardi', label: 'Mardi' },
  { key: 'mercredi', label: 'Mercredi' },
  { key: 'jeudi', label: 'Jeudi' },
  { key: 'vendredi', label: 'Vendredi' },
  { key: 'samedi', label: 'Samedi' },
  { key: 'dimanche', label: 'Dimanche' },
]

const todayIndex = (new Date().getDay() + 6) % 7

export function ContactMap() {
  const [hours, setHours] = useState<Hours | null>(null)

  useEffect(() => {
    getHours().then(setHours)
  }, [])

  return (
    <section className="py-24 md:py-32">
      <PageContainer>
        <Reveal>
          <div className="border-b border-line pb-8">
            <Heading variant="eyebrow">Horaires & lieu</Heading>
            <Heading variant="h2" className="mt-4">
              On vous attend.
            </Heading>
          </div>

          <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
            <ul className="divide-y divide-ink/10">
              {days.map(({ key, label }, i) => (
                <li key={key} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={cn('h-1.5 w-1.5 shrink-0', i === todayIndex ? 'bg-primary' : 'bg-transparent')}
                    />
                    <Text as="span" className="font-medium text-ink">
                      {label}
                    </Text>
                  </div>
                  <Text as="span" className={i === todayIndex ? 'text-primary' : 'text-ink/50'}>
                    {hours?.[key] ?? '—'}
                  </Text>
                </li>
              ))}
            </ul>

            <div className="overflow-hidden border border-line">
              <iframe
                title="Localisation de L'Atelier 12"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.987815123511!2d2.3546398156395627!3d48.83937110999971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671f24beb256d%3A0x61c4fe50e85514fc!2s12%20Rue%20Geoffroy-Saint-Hilaire%2C%2075005%20Paris!5e0!3m2!1sfr!2sfr!4v1649702513626!5m2!1sfr!2sfr"
                className="h-80 w-full border-0 md:h-full md:min-h-95"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  )
}
