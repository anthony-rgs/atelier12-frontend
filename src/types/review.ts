export interface Review {
  id: string
  name: string
  rating: number
  /** Line breaks are encoded as \n and rendered with white-space: pre-line. */
  commentary: string
}
