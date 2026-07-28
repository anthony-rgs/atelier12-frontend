import { Phone, MapPin } from 'lucide-react'
import { PageContainer } from './PageContainer'
import { Heading } from '@/components/ui/Heading'

export function Footer() {
  return (
    <footer className="mt-32 border-t border-ink/10 bg-paper">
      <PageContainer className="flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <Heading variant="h3">L'Atelier</Heading>
          <p className="mt-2 font-mono text-sm text-ink/60">Salon de coiffure — Paris 5ème</p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="tel:0147075928"
            className="flex items-center gap-3 font-mono text-sm font-medium text-ink transition-colors hover:text-primary"
          >
            <Phone size={18} className="text-primary" />
            01.47.07.59.28
          </a>
          <a
            href="https://www.google.com/maps/place/12+Rue+Geoffroy-Saint-Hilaire,+75005+Paris/@48.8393676,2.3546398,17z"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 font-mono text-sm font-medium text-ink transition-colors hover:text-primary"
          >
            <MapPin size={18} className="text-primary" />
            12 rue Geoffroy-Saint-Hilaire, 75005 Paris
          </a>
        </div>
      </PageContainer>

      <div className="border-t border-ink/10 py-6">
        <PageContainer>
          <p className="font-mono text-xs text-ink/40">
            © {new Date().getFullYear()} L'Atelier. Tous droits réservés.
          </p>
        </PageContainer>
      </div>
    </footer>
  )
}
