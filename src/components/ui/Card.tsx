import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function Card({ children, className, hover = false, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        'bg-white dark:bg-surface-800 rounded-2xl border border-surface-200 dark:border-surface-700 p-6',
        hover && 'hover:shadow-md hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
