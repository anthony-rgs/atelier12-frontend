import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PageContainerProps {
  className?: string
  children: ReactNode
}

export function PageContainer({ className, children }: PageContainerProps) {
  return <div className={cn('mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16', className)}>{children}</div>
}
