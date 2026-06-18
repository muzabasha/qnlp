import { motion } from 'framer-motion'
import {
  BookOpen, Clock, Users, Target, Zap, Award,
  GraduationCap, Brain, Atom, Sparkles, CheckCircle,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { PerformanceChart } from '@/components/charts/PerformanceChart'
import { modules } from '@/data/modules'

export function OverviewPage() {
  const totalTopics = modules.reduce((a, m) => a + m.topics.length, 0)
  const totalDuration = modules.reduce((a, m) => {
    const mins = m.topics.reduce((s, t) => {
      const num = parseInt(t.duration) || 5
      return s + num
    }, 0)
    return a + mins
  }, 0)

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-2">Subject Overview</h1>
        <p className="text-lg text-surface-500 dark:text-surface-400">
          Quantum Natural Language Processing (QNLP): A Hands-On Journey from Words to Quantum Circuits
        </p>
      </motion.div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: BookOpen, label: 'Modules', value: modules.length, color: 'from-blue-500 to-indigo-600' },
          { icon: Target, label: 'Topics', value: totalTopics, color: 'from-emerald-500 to-teal-600' },
          { icon: Clock, label: 'Total Duration', value: `${Math.round(totalDuration / 60)} hrs`, color: 'from-orange-500 to-red-600' },
          { icon: Award, label: 'Learning Outcomes', value: '9', color: 'from-purple-500 to-pink-600' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-center"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-surface-900 dark:text-white">{stat.value}</p>
            <p className="text-xs text-surface-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Target Audience & Prerequisites */}
      <Card>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-primary-600" />
          Target Audience & Prerequisites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-surface-800 dark:text-surface-200 mb-3">Audience</h3>
            <ul className="space-y-2">
              {['Faculty Members', 'Research Scholars', 'PG Students'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-surface-700 dark:text-surface-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 p-3 bg-warning/5 rounded-lg border border-warning/20">
              <p className="text-xs font-semibold text-warning">No Prior Quantum Computing Knowledge Required</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-surface-800 dark:text-surface-200 mb-3">Prerequisites</h3>
            <ul className="space-y-2">
              {['Basic Python programming', 'Basic understanding of NLP concepts', 'Willingness to learn new paradigms'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-warning" />
                  <span className="text-surface-700 dark:text-surface-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Learning Outcomes */}
      <Card>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-insight" />
          Learning Outcomes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            'Explain the motivation behind Quantum NLP',
            'Understand limitations of classical NLP models',
            'Represent words and sentences as vectors',
            'Understand quantum states for linguistic info',
            'Install and use QNLP libraries',
            'Build sentence classification with QNLP',
            'Compare Classical NLP and Quantum NLP',
            'Identify QNLP research opportunities',
            'Continue independent QNLP research',
          ].map((outcome, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-surface-50 dark:bg-surface-900 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-primary-700 dark:text-primary-300">{i + 1}</span>
              </div>
              <p className="text-sm text-surface-700 dark:text-surface-300">{outcome}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Module Distribution Chart */}
      <Card>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary-600" />
          Module Distribution
        </h2>
        <PerformanceChart
          type="bar"
          data={modules.map((m) => ({
            name: `M${m.number}`,
            Topics: m.topics.length,
          }))}
          title="Topics per Module"
        />
      </Card>

      {/* Learning Phases */}
      <Card>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary-600" />
          Learning Phases
        </h2>
        <div className="space-y-4">
          {[
            { phase: 'Foundation (M1-M4)', desc: 'Understanding NLP basics and why quantum computing matters', color: 'from-blue-500 to-cyan-500', modules: '1-4' },
            { phase: 'Quantum Basics (M5-M6)', desc: 'Learning quantum computing fundamentals and state encoding', color: 'from-purple-500 to-pink-500', modules: '5-6' },
            { phase: 'QNLP Core (M7-M10)', desc: 'Deep dive into QNLP theory, linguistics, and frameworks', color: 'from-emerald-500 to-teal-500', modules: '7-10' },
            { phase: 'Applications (M11-M14)', desc: 'Building classifiers, hybrid models, and evaluation', color: 'from-orange-500 to-red-500', modules: '11-14' },
            { phase: 'Synthesis (M15-M18)', desc: 'Projects, research roadmap, resources, and wrap-up', color: 'from-violet-500 to-indigo-500', modules: '15-18' },
          ].map((phase, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-surface-50 dark:bg-surface-900 rounded-xl">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-sm font-bold text-white">{phase.modules}</span>
              </div>
              <div>
                <h3 className="font-bold text-surface-800 dark:text-surface-200">{phase.phase}</h3>
                <p className="text-sm text-surface-600 dark:text-surface-400">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* NEP 2020 Alignment */}
      <Card>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary-600" />
          NEP 2020 Alignment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Experiential Learning', desc: 'Hands-on labs, virtual simulations, and project-based activities' },
            { title: 'Multidisciplinary', desc: 'Bridges quantum physics, computer science, and linguistics' },
            { title: 'Critical Thinking', desc: 'Problem-solving through comparative analysis and research identification' },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-surface-50 dark:bg-surface-900 rounded-xl text-center">
              <h3 className="font-bold text-surface-800 dark:text-surface-200 mb-2">{item.title}</h3>
              <p className="text-sm text-surface-600 dark:text-surface-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
