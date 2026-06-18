import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { ChevronDown } from 'lucide-react'
import { useState, type ReactNode } from 'react'

interface SectionProps {
  title: string
  icon?: ReactNode
  children: ReactNode
  className?: string
  collapsible?: boolean
  defaultOpen?: boolean
  badge?: ReactNode
}

export function Section({
  title,
  icon,
  children,
  className,
  collapsible = true,
  defaultOpen = true,
  badge,
}: SectionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn('card mb-6', className)}
    >
      <button
        onClick={() => collapsible && setOpen((v) => !v)}
        className={cn(
          'flex items-center justify-between w-full text-left',
          collapsible && 'cursor-pointer'
        )}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-primary-600 dark:text-primary-400">{icon}</span>}
          <h3 className="text-xl font-bold text-surface-900 dark:text-white">{title}</h3>
          {badge}
        </div>
        {collapsible && (
          <ChevronDown
            className={cn(
              'w-5 h-5 text-surface-400 transition-transform duration-200',
              open && 'rotate-180'
            )}
          />
        )}
      </button>
      {open && <div className="mt-5 space-y-5">{children}</div>}
    </motion.section>
  )
}
