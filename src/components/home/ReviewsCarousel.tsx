import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { getReviews } from '@/services/api'
import type { Review } from '@/types/review'
import { SectionGradient } from './SectionGradient'
import { PageContainer } from '@/components/layout/PageContainer'
import { Heading } from '@/components/ui/Heading'
import { cn } from '@/lib/utils'

const AUTO_ADVANCE_MS = 10_000
const REVIEWS_SHOWN = 5

// Shows up to `count` reviews, randomized — if there aren't more than `count` yet (e.g. only
// a handful entered in Strapi so far), just show all of them instead of padding/erroring.
function pickRandom<T>(list: T[], count: number): T[] {
  if (list.length <= count) return list
  return [...list].sort(() => Math.random() - 0.5).slice(0, count)
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function ReviewBlock({ review }: { review: Review }) {
  return (
    <div>
      <p className="max-w-3xl font-display text-lg italic leading-snug whitespace-pre-line md:text-2xl">
        {review.commentary}
      </p>
      <div className="mt-8 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary font-mono text-xs font-medium text-paper">
          {initials(review.name)}
        </div>
        <div>
          <p className="font-mono text-sm font-medium text-ink">{review.name}</p>
          <div className="mt-1 flex gap-0.5">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} size={12} className="fill-primary text-primary" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ReviewsCarousel() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [fixedHeight, setFixedHeight] = useState<number | null>(null)
  const measureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    getReviews().then((all) => setReviews(pickRandom(all, REVIEWS_SHOWN)))
  }, [])

  useEffect(() => {
    if (reviews.length === 0) return
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % reviews.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [reviews, activeIndex])

  // Measure every review's full rendered height (off-screen) so the visible block can be
  // pinned to the tallest one — no clipping, no layout jump when the review changes.
  useLayoutEffect(() => {
    const container = measureRef.current
    if (reviews.length === 0 || !container) return

    function measure() {
      const blocks = container!.querySelectorAll<HTMLElement>('[data-measure-block]')
      let max = 0
      blocks.forEach((block) => {
        max = Math.max(max, block.offsetHeight)
      })
      if (max > 0) setFixedHeight(max)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(container)
    return () => observer.disconnect()
  }, [reviews])

  const activeReview = useMemo(() => reviews[activeIndex], [reviews, activeIndex])

  if (!activeReview) return null

  return (
    // Same full-screen rhythm as the hero: fills exactly what's left below the sticky nav,
    // with the review content vertically centered inside it instead of scrolling further.
    <section className="relative flex h-[calc(100dvh-4rem)] flex-col justify-center overflow-hidden py-16 text-ink md:h-[calc(100dvh-5rem)] md:py-20">
      <SectionGradient />

      <PageContainer className="relative">
        <Heading variant="eyebrow">Avis</Heading>

        {/* Oversized watermark quote — purely decorative background presence. */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-4 right-0 select-none font-display text-[10rem] leading-none text-ink/5 md:-top-10 md:text-[16rem]"
        >
          "
        </span>

        <div
          className="relative mt-10 transition-[height] duration-300"
          style={{ height: fixedHeight ? `${fixedHeight}px` : undefined }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <ReviewBlock review={activeReview} />
            </motion.div>
          </AnimatePresence>

          {/* Off-screen: every review rendered once, purely to measure the tallest one. */}
          <div ref={measureRef} aria-hidden className="invisible absolute inset-x-0 top-0 -z-10">
            {reviews.map((review) => (
              <div key={review.id} data-measure-block>
                <ReviewBlock review={review} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-10 flex gap-3">
          {reviews.map((review, i) => (
            <button
              key={review.id}
              type="button"
              aria-label={`Avis de ${review.name}`}
              onClick={() => setActiveIndex(i)}
              className={cn('h-px transition-all', i === activeIndex ? 'w-8 bg-ink' : 'w-4 bg-ink/20')}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
