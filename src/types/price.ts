export type PriceCategory = 'femme' | 'homme'

export interface PriceLine {
  id: string
  category: PriceCategory
  name: string
  /** One or more amounts (e.g. ["42", "45", "50"] for a cut priced by hair length). */
  prices: string[]
  note?: string
}
