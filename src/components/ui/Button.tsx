import { createElement, type ComponentPropsWithoutRef, type ElementType } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'md' | 'sm'

const base =
  'inline-flex items-center justify-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-200 disabled:opacity-40 disabled:pointer-events-none'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-ink text-paper hover:bg-primary',
  secondary: 'border border-ink text-ink hover:border-primary hover:text-primary',
  ghost: 'text-ink hover:text-primary',
}

const sizes: Record<ButtonSize, string> = {
  md: 'px-7 py-3.5',
  sm: 'px-5 py-2.5',
}

// Polymorphic so it can render as a native <button> or, via `as={Link}`, as a router link
// while keeping a single consistent style API.
type ButtonProps<T extends ElementType> = {
  as?: T
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>

export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps<T>) {
  const Tag = (as ?? 'button') as ElementType
  return createElement(Tag, { className: cn(base, variants[variant], sizes[size], className), ...props })
}
