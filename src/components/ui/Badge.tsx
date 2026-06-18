import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'

type BadgeVariant = 'concept' | 'activity' | 'project' | 'warning' | 'math' | 'insight' | 'default'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  concept: 'bg-concept/10 text-concept',
  activity: 'bg-activity/10 text-activity',
  project: 'bg-project/10 text-project',
  warning: 'bg-warning/10 text-warning',
  math: 'bg-math/10 text-math',
  insight: 'bg-insight/10 text-insight',
  default: 'bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
