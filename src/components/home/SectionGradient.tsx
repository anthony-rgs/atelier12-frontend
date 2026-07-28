// Shared soft wash (white → pale lavender) used behind full-bleed sections like Hero and Avis.
// Masked to fade to transparent at the top/bottom edges, so it blends into the plain white
// sections above and below instead of cutting off abruptly at the section boundary.
export function SectionGradient() {
  const fade = 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)'

  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: 'linear-gradient(160deg, #ffffff 0%, #f2f1fb 55%, #e9e7f9 100%)',
        maskImage: fade,
        WebkitMaskImage: fade,
      }}
    />
  )
}
