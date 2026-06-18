import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Clock, ArrowLeft, ArrowRight, CheckCircle, Lock, BookOpen,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { modules, getModule, getTotalTopics } from '@/data/modules'
import { useProgressStore } from '@/store/progressStore'

export function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const mod = getModule(moduleId || '')
  const { progress, setCurrentTopic } = useProgressStore()

  if (!mod) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-surface-600 dark:text-surface-400">Module not found</h2>
        <Link to="/" className="text-primary-600 dark:text-primary-400 mt-4 inline-block">Go Home</Link>
      </div>
    )
  }

  const prevModule = modules[modules.indexOf(mod) - 1]
  const nextModule = modules[modules.indexOf(mod) + 1]

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-surface-700 dark:hover:text-surface-300 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="text-2xl font-bold text-white">M{mod.number}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-surface-900 dark:text-white">{mod.title}</h1>
              <Badge variant="concept">{mod.duration}</Badge>
            </div>
            <p className="text-lg text-surface-500 dark:text-surface-400">{mod.subtitle}</p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary-600" />
          Topics ({mod.topics.length})
        </h2>

        {mod.topics.map((topic, i) => {
          const isCompleted = progress[topic.id]?.approved
          const isLocked = !topic.prerequisites.every((p) => progress[p]?.approved)
          const isFirst = i === 0
          const actuallyLocked = !isFirst && isLocked

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={actuallyLocked ? '#' : `/topic/${mod.id}/${topic.id}`}
                onClick={() => !actuallyLocked && setCurrentTopic(topic.id)}
                className="block"
              >
                <Card hover className={`flex items-center gap-4 py-4 ${actuallyLocked ? 'opacity-50' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isCompleted
                      ? 'bg-success/20 text-success'
                      : actuallyLocked
                        ? 'bg-surface-200 dark:bg-surface-700 text-surface-400'
                        : 'bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : actuallyLocked ? (
                      <Lock className="w-4 h-4" />
                    ) : (
                      <span className="text-sm font-bold">{topic.id.split('.')[1]}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-surface-900 dark:text-white truncate">
                      {topic.id} {topic.title}
                    </h3>
                    {topic.prerequisites.length > 0 && (
                      <p className="text-xs text-surface-400 mt-0.5">
                        Prerequisites: {topic.prerequisites.join(', ')}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-surface-400 flex-shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    {topic.duration}
                    {!actuallyLocked && <ArrowRight className="w-4 h-4 text-primary-600" />}
                  </div>
                </Card>
              </Link>
            </motion.div>
          )
        })}
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-surface-200 dark:border-surface-700">
        <div>
          {prevModule && (
            <Link to={`/module/${prevModule.id}`}>
              <Button variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
                Previous: M{prevModule.number}
              </Button>
            </Link>
          )}
        </div>
        <div>
          {nextModule && (
            <Link to={`/module/${nextModule.id}`}>
              <Button variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                Next: M{nextModule.number}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
