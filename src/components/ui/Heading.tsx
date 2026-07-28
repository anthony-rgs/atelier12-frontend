import { createElement, type CSSProperties, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type HeadingVariant = 'display' | 'h1' | 'h2' | 'h3' | 'eyebrow'

// Centralised type scale: every heading in the app goes through one of these variants
// instead of ad-hoc Tailwind text sizes scattered across components. Titles are always the
// italic serif (Georgia Pro) — the eyebrow label is the mono/uppercase counterpoint instead.
// Georgia Pro only ships static weights (300/400/600/700/900), so the scale sticks to those
// instead of Tailwind's default 500/font-medium, which the browser would have to fake.
const styles: Record<HeadingVariant, string> = {
  display: 'font-display italic text-[clamp(2.75rem,6vw,5.5rem)] font-light leading-[1] tracking-tight',
  h1: 'font-display italic text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-tight',
  h2: 'font-display italic text-[clamp(1.5rem,2.8vw,2.25rem)] font-normal leading-tight tracking-tight',
  h3: 'font-display italic text-lg font-semibold leading-snug md:text-xl',
  eyebrow: 'font-mono text-xs font-medium uppercase tracking-[0.22em] text-ink-soft',
}

const defaultTags: Record<HeadingVariant, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  eyebrow: 'p',
}

interface HeadingProps {
  variant?: HeadingVariant
  as?: ElementType
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export function Heading({ variant = 'h2', as, className, style, children }: HeadingProps) {
  const Tag = as ?? defaultTags[variant]
  return createElement(Tag, { className: cn(styles[variant], className), style }, children)
}
