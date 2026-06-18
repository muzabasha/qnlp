import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showPercent?: boolean
  className?: string
  color?: string
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showPercent = true,
  className,
  color = 'from-primary-500 to-insight',
}: ProgressBarProps) {
  const pct = Math.min(100, Math.round((value / max) * 100))

  return (
    <div className={cn('space-y-1', className)}>
      {(label || showPercent) && (
        <div className="flex justify-between text-sm">
          {label && <span className="font-medium text-surface-700 dark:text-surface-300">{label}</span>}
          {showPercent && <span className="font-bold text-surface-500">{pct}%</span>}
        </div>
      )}
      <div className="h-2.5 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
        <motion.div
          className={cn('h-full rounded-full bg-gradient-to-r', color)}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
