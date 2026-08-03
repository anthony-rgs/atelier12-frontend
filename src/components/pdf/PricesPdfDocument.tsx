import { Document, Page, View, Text, StyleSheet, Font } from '@react-pdf/renderer'
import type { PriceLine, PriceCategory } from '@/types/price'

// Same TTF files used for the site's title font (see src/index.css) — keeps the PDF visually
// consistent with the site instead of falling back to a generic PDF font for headings.
Font.register({
  family: 'Georgia Pro',
  fonts: [
    { src: '/fonts/GeorgiaPro-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/GeorgiaPro-Italic.ttf', fontWeight: 400, fontStyle: 'italic' },
    { src: '/fonts/GeorgiaPro-SemiBold.ttf', fontWeight: 600 },
    { src: '/fonts/GeorgiaPro-SemiBoldItalic.ttf', fontWeight: 600, fontStyle: 'italic' },
  ],
})

const INK = '#0a0a0a'
const INK_SOFT = '#55555a'
const LINE = '#e2e0dd'
const PRIMARY = '#4338ca'

const styles = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 64,
    paddingHorizontal: 48,
    fontFamily: 'Courier',
    color: INK,
  },
  eyebrow: {
    fontFamily: 'Courier',
    fontSize: 9,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: INK_SOFT,
  },
  title: {
    fontFamily: 'Georgia Pro',
    fontStyle: 'italic',
    fontSize: 30,
    color: INK,
    marginTop: 6,
    marginBottom: 16,
  },
  titleAccent: {
    color: PRIMARY,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: INK,
    marginTop: 4,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: LINE,
  },
  name: {
    fontSize: 13,
    color: INK,
  },
  note: {
    fontSize: 8,
    fontStyle: 'italic',
    color: INK_SOFT,
    marginTop: 2,
    maxWidth: 340,
  },
  price: {
    fontSize: 13,
    color: INK_SOFT,
  },
  footer: {
    position: 'absolute',
    bottom: 32,
    left: 48,
    right: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 8,
    color: INK_SOFT,
    borderTopWidth: 0.5,
    borderTopColor: LINE,
    paddingTop: 10,
  },
})

const CATEGORY_LABEL: Record<PriceCategory, string> = {
  femme: 'Femme',
  homme: 'Homme',
}

interface PricesPdfDocumentProps {
  category: PriceCategory
  lines: PriceLine[]
}

export function PricesPdfDocument({ category, lines }: PricesPdfDocumentProps) {
  const generatedOn = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Document title={`Tarifs ${CATEGORY_LABEL[category]} — L'Atelier 12`}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.eyebrow}>L'Atelier 12 — Paris 5ème</Text>
        <Text style={styles.title}>
          Tarifs <Text style={styles.titleAccent}>{CATEGORY_LABEL[category]}</Text>
        </Text>
        <View style={styles.divider} />

        {lines.map((line) => (
          <View key={line.id} style={styles.row} wrap={false}>
            <View style={{ flex: 1, paddingRight: 16 }}>
              <Text style={styles.name}>{line.name}</Text>
              {line.note && <Text style={styles.note}>{line.note}</Text>}
            </View>
            <Text style={styles.price}>{line.prices.map((price) => `${price} €`).join(' / ')}</Text>
          </View>
        ))}

        <View style={styles.footer} fixed>
          <Text>12 rue Geoffroy-Saint-Hilaire, 75005 Paris — 01.47.07.59.28</Text>
          <Text>Mis à jour le {generatedOn}</Text>
        </View>
      </Page>
    </Document>
  )
}
