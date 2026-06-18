import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu, GraduationCap, ExternalLink } from 'lucide-react'
import { useThemeStore } from '@/store/themeStore'
import { cn } from '@/utils/cn'

interface HeaderProps {
  onMenuToggle: () => void
  sidebarOpen: boolean
}

export function Header({ onMenuToggle, sidebarOpen }: HeaderProps) {
  const { theme, toggle } = useThemeStore()

  return (
    <header className="sticky top-0 z-50 glass border-b border-surface-200 dark:border-surface-700">
      <div className="flex items-center justify-between px-4 md:px-6 h-16">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-insight rounded-xl flex items-center justify-center shadow-sm">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-bold text-surface-900 dark:text-white leading-tight">
                QNLP Workshop
              </h1>
              <p className="text-xs text-surface-500 dark:text-surface-400 -mt-0.5">
                Words to Quantum Circuits
              </p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://scholar-sparkle-web.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-insight text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Resource Person
          </a>
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-xl bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-surface-600" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </motion.button>
        </div>
      </div>
    </header>
  )
}
