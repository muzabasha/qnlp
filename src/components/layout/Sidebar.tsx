import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Compass, MessageSquare, Layers, Zap, Atom, Brain, Sparkles,
  BookOpen, Wrench, GitBranch, Target, Cpu, BarChart3, FlaskConical,
  Users, Route, Library, GraduationCap, Home, BookMarked, Activity,
  PieChart, CheckCircle, Lock
} from 'lucide-react'
import { cn } from '@/utils/cn'
import { modules, getTotalTopics, getCompletedTopics } from '@/data/modules'
import { useProgressStore } from '@/store/progressStore'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Compass, MessageSquare, Layers, Zap, Atom, Brain, Sparkles,
  BookOpen, Wrench, GitBranch, Target, Cpu, BarChart3, FlaskConical,
  Users, Route, Library, GraduationCap, Home, BookMarked,
  Activity, PieChart,
}

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const location = useLocation()
  const { progress } = useProgressStore()
  const total = getTotalTopics()
  const completed = getCompletedTopics(progress)
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-surface-200 dark:border-surface-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-surface-500">Progress</span>
          <span className="text-xs font-bold text-primary-600 dark:text-primary-400">{completed}/{total}</span>
        </div>
        <div className="h-2 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-insight rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        <SidebarLink
          to="/"
          icon={Home}
          label="Home"
          active={location.pathname === '/'}
          onClick={onClose}
        />
        <SidebarLink
          to="/overview"
          icon={BookMarked}
          label="Subject Overview"
          active={location.pathname === '/overview'}
          onClick={onClose}
        />
        <SidebarLink
          to="/analytics"
          icon={PieChart}
          label="Analytics Dashboard"
          active={location.pathname === '/analytics'}
          onClick={onClose}
        />

        <div className="pt-4 pb-2">
          <span className="px-3 text-xs font-semibold uppercase tracking-wider text-surface-500">
            Modules
          </span>
        </div>

        {modules.map((mod) => {
          const Icon = iconMap[mod.icon] || BookMarked
          const modCompleted = mod.topics.every((t) => progress[t.id]?.approved)
          const modActive = location.pathname === `/module/${mod.id}`

          return (
            <SidebarLink
              key={mod.id}
              to={`/module/${mod.id}`}
              icon={Icon}
              label={
                <span className="flex items-center gap-2">
                  <span className="truncate">M{mod.number}: {mod.title}</span>
                  {modCompleted && <CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0" />}
                </span>
              }
              active={modActive}
              onClick={onClose}
            />
          )
        })}
      </nav>

      <div className="p-4 border-t border-surface-200 dark:border-surface-700">
        <p className="text-[10px] text-surface-400 text-center">
          QNLP Workshop v1.0
        </p>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-16 left-0 bottom-0 z-50 w-72 bg-white dark:bg-surface-900 border-r border-surface-200 dark:border-surface-700 transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {sidebarContent}
      </aside>
    </>
  )
}

function SidebarLink({
  to,
  icon: Icon,
  label,
  active,
  onClick,
}: {
  to: string
  icon: LucideIcon
  label: string | React.ReactNode
  active: boolean
  onClick: () => void
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
        active
          ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border-l-4 border-primary-600'
          : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-100 border-l-4 border-transparent'
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="truncate">{label}</span>
    </Link>
  )
}
