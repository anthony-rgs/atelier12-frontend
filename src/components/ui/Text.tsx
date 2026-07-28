import { createElement, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type TextVariant = 'lead' | 'body' | 'small' | 'caption'

const styles: Record<TextVariant, string> = {
  lead: 'font-mono text-lg md:text-xl leading-relaxed text-ink/80',
  body: 'font-mono text-base leading-relaxed text-ink/80',
  small: 'font-mono text-sm leading-relaxed text-ink/70',
  caption: 'font-mono text-xs uppercase tracking-wide text-ink/60',
}

interface TextProps {
  variant?: TextVariant
  as?: ElementType
  className?: string
  children: ReactNode
}

export function Text({ variant = 'body', as = 'p', className, children }: TextProps) {
  return createElement(as, { className: cn(styles[variant], className) }, children)
}
