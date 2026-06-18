import { motion } from 'framer-motion'
import {
  BarChart3, TrendingUp, PieChart, Clock, Award,
  Target, Brain, Activity,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { PerformanceChart } from '@/components/charts/PerformanceChart'
import { modules, getTotalTopics, getCompletedTopics } from '@/data/modules'
import { useProgressStore } from '@/store/progressStore'

export function AnalyticsPage() {
  const { progress } = useProgressStore()
  const total = getTotalTopics()
  const completed = getCompletedTopics(progress)
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0

  const moduleProgress = modules.map((m) => {
    const modCompleted = m.topics.filter((t) => progress[t.id]?.approved).length
    return {
      name: `M${m.number}`,
      Completed: modCompleted,
      Total: m.topics.length,
      Percent: m.topics.length > 0 ? Math.round((modCompleted / m.topics.length) * 100) : 0,
    }
  })

  const topicCompletionData = modules.map((m) => ({
    name: `M${m.number}`,
    Completed: m.topics.filter((t) => progress[t.id]?.approved).length,
    Pending: m.topics.filter((t) => !progress[t.id]?.approved).length,
  }))

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-2">Learning Analytics</h1>
        <p className="text-lg text-surface-500 dark:text-surface-400">
          Track your progress and learning performance
        </p>
      </motion.div>

      {/* Overall Progress */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary-600" />
            Overall Progress
          </h2>
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{pct}%</div>
        </div>
        <ProgressBar value={completed} max={total} label={`${completed} of ${total} topics completed`} />
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Award, label: 'Modules Started', value: moduleProgress.filter((m) => m.Completed > 0).length.toString(), color: 'text-blue-600' },
          { icon: Target, label: 'Modules Completed', value: moduleProgress.filter((m) => m.Completed === m.Total).length.toString(), color: 'text-emerald-600' },
          { icon: Brain, label: 'Topics Mastered', value: completed.toString(), color: 'text-purple-600' },
          { icon: Clock, label: 'Est. Hours Spent', value: `${Math.round(completed * 5 / 60)}h`, color: 'text-orange-600' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700"
          >
            <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
            <p className="text-2xl font-bold text-surface-900 dark:text-white">{stat.value}</p>
            <p className="text-xs text-surface-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Module Progress */}
      <Card>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary-600" />
          Module Progress
        </h2>
        <div className="space-y-3">
          {modules.map((m) => {
            const modProgress = moduleProgress.find((mp) => mp.name === `M${m.number}`)
            if (!modProgress) return null
            return (
              <div key={m.id}>
                <ProgressBar
                  value={modProgress.Completed}
                  max={modProgress.Total}
                  label={`M${m.number}: ${m.title}`}
                />
              </div>
            )
          })}
        </div>
      </Card>

      {/* Topic Completion Distribution */}
      <Card>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <PieChart className="w-5 h-5 text-primary-600" />
          Topic Distribution
        </h2>
        <PerformanceChart
          type="bar"
          data={topicCompletionData}
          title="Completed vs Pending Topics per Module"
          bars={[
            { key: 'Completed', color: '#10b981' },
            { key: 'Pending', color: '#94a3b8' },
          ]}
        />
      </Card>

      {/* Learning Velocity */}
      <Card>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary-600" />
          Learning Velocity
        </h2>
        <PerformanceChart
          type="area"
          data={[
            { name: 'Start', Velocity: 0 },
            { name: 'M1', Velocity: 4 },
            { name: 'M2', Velocity: 9 },
            { name: 'M3', Velocity: 18 },
            { name: 'M4', Velocity: 24 },
            { name: 'M5', Velocity: 32 },
            { name: 'M6', Velocity: 38 },
            { name: 'M7', Velocity: 44 },
            { name: 'M8', Velocity: 50 },
            { name: 'M9', Velocity: 56 },
            { name: 'M10', Velocity: 61 },
            { name: 'M11', Velocity: 68 },
            { name: 'M12', Velocity: 74 },
            { name: 'M13', Velocity: 79 },
            { name: 'M14', Velocity: 86 },
            { name: 'M15', Velocity: 92 },
            { name: 'M16', Velocity: 100 },
            { name: 'Complete', Velocity: 100 },
          ]}
          title="Expected Knowledge Accumulation"
        />
      </Card>

      {/* Learning Recommendations */}
      <Card>
        <h2 className="text-xl font-bold mb-4">Recommendations</h2>
        <div className="space-y-3">
          {moduleProgress
            .filter((m) => m.Completed < m.Total && m.Completed > 0)
            .slice(0, 3)
            .map((m) => (
              <div key={m.name} className="flex items-center gap-3 p-3 bg-surface-50 dark:bg-surface-900 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-700 dark:text-primary-300">{m.name.replace('M', '')}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-surface-800 dark:text-surface-200">
                    Continue {m.name} ({m.Completed}/{m.Total} completed)
                  </p>
                  <ProgressBar value={m.Percent} max={100} showPercent={false} className="mt-1" />
                </div>
              </div>
            ))}
          {moduleProgress.filter((m) => m.Completed < m.Total && m.Completed > 0).length === 0 && (
            <p className="text-surface-400 text-center py-4">
              Start learning to see personalized recommendations
            </p>
          )}
        </div>
      </Card>
    </div>
  )
}
