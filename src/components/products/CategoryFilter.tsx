import { CATEGORY_LABELS, type ProductCategory } from '@/types/product'
import { cn } from '@/lib/utils'

const categories = Object.keys(CATEGORY_LABELS) as ProductCategory[]

interface CategoryFilterProps {
  active?: ProductCategory
  onChange: (category?: ProductCategory) => void
}

const chip =
  'border px-5 py-2 font-mono text-xs font-medium uppercase tracking-[0.1em] transition-colors'

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange(undefined)}
        className={cn(chip, !active ? 'border-ink bg-ink text-paper' : 'border-line text-ink-soft hover:border-ink')}
      >
        Tous
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={cn(
            chip,
            active === category ? 'border-ink bg-ink text-paper' : 'border-line text-ink-soft hover:border-ink',
          )}
        >
          {CATEGORY_LABELS[category]}
        </button>
      ))}
    </div>
  )
}
