import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  GraduationCap, Clock, Users, Target, Zap, ArrowRight,
  BookOpen, FlaskConical, BarChart3, Sparkles, Layers, Atom,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { modules } from '@/data/modules'

const highlights = [
  { icon: Clock, label: '6 Hours', desc: 'One-Day Workshop' },
  { icon: Users, label: 'Faculty & Researchers', desc: 'Target Audience' },
  { icon: Target, label: 'Hands-On', desc: 'Learn by Doing' },
  { icon: Zap, label: 'No Quantum Background', desc: 'Required' },
]

const features = [
  {
    Icon: BookOpen,
    title: '18 Comprehensive Modules',
    desc: 'From NLP fundamentals to advanced quantum language models',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    Icon: FlaskConical,
    title: 'Virtual Labs',
    desc: 'Interactive simulations and hands-on coding exercises',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    Icon: Layers,
    title: 'Progressive Learning',
    desc: 'Step-by-step from basics to quantum circuits',
    color: 'from-orange-500 to-red-600',
  },
  {
    Icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Track your progress and learning outcomes',
    color: 'from-purple-500 to-pink-600',
  },
  {
    Icon: Atom,
    title: 'Quantum Computing',
    desc: 'Understand qubits, gates, and quantum circuits',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    Icon: Sparkles,
    title: 'NEP 2020 Aligned',
    desc: 'Activity-based, project-based, experiential learning',
    color: 'from-violet-500 to-purple-600',
  },
]

export function HomePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8 md:py-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
          <GraduationCap className="w-4 h-4" />
          NEP 2020 Aligned Hands-On Workshop
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          <span className="text-gradient">Quantum Natural Language<br />Processing (QNLP)</span>
        </h1>
        <p className="text-xl md:text-2xl text-surface-600 dark:text-surface-400 max-w-3xl mx-auto mb-2">
          A Hands-On Journey from Words to Quantum Circuits
        </p>
        <p className="text-lg text-surface-500 dark:text-surface-500 max-w-2xl mx-auto mb-8">
          No prior quantum computing knowledge required. Start your journey into the future of language processing.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/module/m1">
            <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Start Learning
            </Button>
          </Link>
          <Link to="/overview">
            <Button variant="outline" size="lg">
              View Overview
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
          {highlights.map((h, i) => {
            const Icon = h.icon
            return (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-4 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700"
              >
                <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <p className="font-bold text-surface-900 dark:text-white text-sm">{h.label}</p>
                <p className="text-xs text-surface-500">{h.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          What You Will Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Motivation behind Quantum NLP',
            'Why classical NLP needs huge resources',
            'Words and sentences as vectors',
            'Quantum states for linguistic info',
            'Install and use QNLP libraries',
            'Build sentence classification models',
            'Compare Classical vs Quantum NLP',
            'Identify QNLP research opportunities',
            'Continue independent research',
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.05 }}
              className="flex items-start gap-3 p-3"
            >
              <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-success" />
              </div>
              <span className="text-surface-700 dark:text-surface-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={f.title} delay={0.2 + i * 0.05} hover>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}>
                <f.Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-surface-500 dark:text-surface-400">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Curriculum</h2>
          <Link to="/module/m1" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-3">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link to={`/module/${mod.id}`}>
                <Card hover className="flex items-center gap-4 py-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-700 dark:text-primary-300">{mod.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-surface-900 dark:text-white truncate">
                      Module {mod.number}: {mod.title}
                    </h3>
                    <p className="text-sm text-surface-500 truncate">{mod.subtitle}</p>
                  </div>
                  <div className="text-xs text-surface-400 flex items-center gap-1 flex-shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    {mod.duration}
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
