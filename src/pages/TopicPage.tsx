import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, CheckCircle, MessageSquare,
  BookOpen, Activity, Target, HelpCircle, Beaker,
  Lightbulb, ThumbsUp, Send, RefreshCw, Play, Pause,
  ChevronLeft, ChevronRight, BarChart3, FlaskConical,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { EqBlock, EqInline } from '@/components/equations/Equation'
import { EquationExplorer } from '@/components/equations/EquationExplorer'
import { MermaidDiagram } from '@/components/diagrams/MermaidDiagram'
import { PerformanceChart } from '@/components/charts/PerformanceChart'
import { modules, getModule, getTopic as findTopic, type Topic } from '@/data/modules'
import { useProgressStore } from '@/store/progressStore'
import { useFeedbackStore } from '@/store/feedbackStore'
import { getTopicContent } from '@/data/content/loader'
import { useState, useMemo } from 'react'

export function TopicPage() {
  const { moduleId, topicId } = useParams<{ moduleId: string; topicId: string }>()
  const mod = getModule(moduleId || '')
  const topicInfo = findTopic(topicId || '')
  const { progress, markCompleted, markApproved, giveFeedback, setCurrentTopic } = useProgressStore()
  const { addFeedback } = useFeedbackStore()
  const [feedbackText, setFeedbackText] = useState('')
  const [rating, setRating] = useState(5)
  const [submitted, setSubmitted] = useState(false)
  const [labRunning, setLabRunning] = useState(false)
  const [labStep, setLabStep] = useState(0)

  const content = useMemo(() => {
    if (!topicId) return null
    return getTopicContent(topicId)
  }, [topicId])

  const isApproved = topicId ? progress[topicId]?.approved : false
  const hasFeedback = topicId ? progress[topicId]?.feedbackGiven : false

  if (!mod || !topicInfo || !content) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-surface-600 dark:text-surface-400">Topic not found</h2>
        <Link to="/" className="text-primary-600 dark:text-primary-400 mt-4 inline-block">Go Home</Link>
      </div>
    )
  }

  const { topic } = topicInfo
  const topicIndex = mod.topics.indexOf(topic)
  const prevTopic = topicIndex > 0 ? mod.topics[topicIndex - 1] : null
  const nextTopic = topicIndex < mod.topics.length - 1 ? mod.topics[topicIndex + 1] : null

  const handleApprove = () => {
    if (!topicId) return
    markApproved(topicId)
    addFeedback({ topicId, comment: feedbackText, rating, timestamp: Date.now() })
    if (feedbackText) giveFeedback(topicId, feedbackText)
    setSubmitted(true)
    markCompleted(topicId)
  }

  const handleNextTopic = () => {
    if (nextTopic) {
      setCurrentTopic(nextTopic.id)
    }
  }

  const labSteps = content.virtualLab?.steps || [
    'Initialize the environment',
    'Load input data',
    'Apply preprocessing',
    'Run the transformation',
    'Analyze results',
  ]

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Link to={`/module/${mod.id}`} className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-surface-700 dark:hover:text-surface-300 mb-3">
          <ArrowLeft className="w-4 h-4" /> Back to Module {mod.number}
        </Link>
        <div className="flex items-start gap-3">
          <Badge variant="concept" className="text-base px-4 py-1.5">{topic.id}</Badge>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-surface-900 dark:text-white">{topic.title}</h1>
            <p className="text-surface-500 dark:text-surface-400 mt-1">Module {mod.number}: {mod.title}</p>
          </div>
          {isApproved && (
            <div className="flex items-center gap-2 text-success">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">Completed</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Progress indicator */}
      <div className="flex items-center gap-4 text-sm text-surface-500">
        <span>Topic {topicIndex + 1} of {mod.topics.length}</span>
        <ProgressBar value={topicIndex + 1} max={mod.topics.length} showPercent={false} className="flex-1 max-w-xs" />
      </div>

      {/* ============================================ */}
      {/* SECTION 1: PREREQUISITES & DEPENDENCIES      */}
      {/* ============================================ */}
      <Section title="Prerequisites & Topic Dependencies" icon={<BookOpen className="w-5 h-5" />} defaultOpen={true}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-l-4 border-l-primary-500">
            <h4 className="font-bold text-surface-900 dark:text-white mb-2 flex items-center gap-2">
              <ChevronLeft className="w-4 h-4 text-primary-500" /> Prerequisites
            </h4>
            {topic.prerequisites.length > 0 ? (
              <ul className="space-y-1 text-sm text-surface-600 dark:text-surface-400">
                {topic.prerequisites.map((p) => {
                  const t = findTopic(p)
                  return (
                    <li key={p} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {t ? `${p}: ${t.topic.title}` : p}
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p className="text-sm text-surface-400 italic">No prerequisites (starting point)</p>
            )}
          </Card>

          <Card className="border-l-4 border-l-activity">
            <h4 className="font-bold text-surface-900 dark:text-white mb-2 flex items-center gap-2">
              Current Topic <span className="text-activity font-mono text-sm">{topic.id}</span>
            </h4>
            <p className="text-sm text-surface-600 dark:text-surface-400">{topic.title}</p>
            <div className="mt-3 p-3 bg-activity/5 rounded-lg border border-activity/20">
              <p className="text-xs font-medium text-activity">Learning Objective</p>
              <p className="text-sm text-surface-600 dark:text-surface-400 mt-1">{content.learningObjective || `Understand and apply ${topic.title} concepts`}</p>
            </div>
          </Card>

          <Card className="border-l-4 border-l-warning">
            <h4 className="font-bold text-surface-900 dark:text-white mb-2 flex items-center gap-2">
              Dependent Topics <ChevronRight className="w-4 h-4 text-warning" />
            </h4>
            {topic.dependencies.length > 0 ? (
              <ul className="space-y-1 text-sm text-surface-600 dark:text-surface-400">
                {topic.dependencies.map((d) => {
                  const t = findTopic(d)
                  return (
                    <li key={d} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-warning" />
                      {t ? `${d}: ${t.topic.title}` : d}
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p className="text-sm text-surface-400 italic">Foundation topic</p>
            )}
            <div className="mt-3 p-3 bg-warning/5 rounded-lg border border-warning/20">
              <p className="text-xs font-medium text-warning">Next Topic Preparation</p>
              <p className="text-sm text-surface-600 dark:text-surface-400 mt-1">{content.nextPrep || 'Review key concepts before proceeding'}</p>
            </div>
          </Card>
        </div>

        {/* Topic Dependency Graph */}
        {content.dependencyGraph && (
          <MermaidDiagram
            chart={content.dependencyGraph}
            caption="Topic dependency and knowledge flow diagram"
          />
        )}
      </Section>

      {/* ============================================ */}
      {/* SECTION 2: STORYTELLING                     */}
      {/* ============================================ */}
      <Section title="Story Time" icon={<MessageSquare className="w-5 h-5" />} badge={<Badge variant="insight">Learn with Stories</Badge>}>
        <div className="prose-content">
          {content.storytelling?.story ? (
            <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
              <p className="text-lg leading-relaxed text-surface-800 dark:text-surface-200 italic">
                "{content.storytelling.story}"
              </p>
            </div>
          ) : (
            <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
              <p className="text-lg leading-relaxed text-surface-800 dark:text-surface-200 italic">
                "Once upon a time, in a bustling city library, a curious student named Alex discovered a mysterious book that seemed to understand exactly what the reader was thinking. Every time someone opened it, the stories rearranged themselves to match the reader's mood. The librarians were baffled — how could a book understand human language so perfectly? Little did Alex know, this was the same challenge that has puzzled computer scientists for decades: How do we make machines truly understand our words?"
              </p>
            </div>
          )}

          {content.storytelling?.questions && content.storytelling.questions.length > 0 && (
            <div className="mt-4 space-y-3">
              <h4 className="font-bold text-surface-800 dark:text-surface-200">Reflective Questions:</h4>
              {content.storytelling.questions.map((q, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-surface-50 dark:bg-surface-900 rounded-lg">
                  <HelpCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <p className="text-surface-700 dark:text-surface-300">{q}</p>
                </div>
              ))}
            </div>
          )}

          {content.storytelling?.connection && (
            <div className="mt-4 p-4 bg-gradient-to-r from-primary-50 to-insight/5 dark:from-primary-900/20 dark:to-insight/10 rounded-xl border border-primary-200 dark:border-primary-800">
              <h4 className="font-bold text-surface-900 dark:text-white mb-2">What did we just learn?</h4>
              <p className="text-surface-700 dark:text-surface-300">{content.storytelling.connection}</p>
            </div>
          )}

          {content.storytelling?.technicalIntro && (
            <div className="mt-4 space-y-3">
              <h4 className="font-bold text-primary-600 dark:text-primary-400">Connecting to {topic.title}</h4>
              <p className="text-surface-700 dark:text-surface-300">{content.storytelling.technicalIntro}</p>
            </div>
          )}

          {content.storytelling?.lifeSkills && (
            <div className="mt-4 p-4 bg-insight/5 rounded-xl border border-insight/20">
              <h4 className="font-bold text-insight mb-1">Life Skills You Gain</h4>
              <p className="text-surface-700 dark:text-surface-300">{content.storytelling.lifeSkills}</p>
            </div>
          )}
        </div>
      </Section>

      {/* ============================================ */}
      {/* SECTION 3A: MATHEMATICAL MODELLING            */}
      {/* ============================================ */}
      <Section title="Mathematical Modelling" icon={<BarChart3 className="w-5 h-5" />} badge={<Badge variant="math">Mathematical</Badge>}>
        {content.mathModelling ? (
          <div className="space-y-6">
            {/* Overview */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {content.mathModelling.need && (
                <div className="p-3 bg-surface-50 dark:bg-surface-900 rounded-lg">
                  <p className="text-xs font-semibold text-surface-500 uppercase">Need</p>
                  <p className="text-sm mt-1 text-surface-700 dark:text-surface-300">{content.mathModelling.need}</p>
                </div>
              )}
              {content.mathModelling.motivation && (
                <div className="p-3 bg-surface-50 dark:bg-surface-900 rounded-lg">
                  <p className="text-xs font-semibold text-surface-500 uppercase">Motivation</p>
                  <p className="text-sm mt-1 text-surface-700 dark:text-surface-300">{content.mathModelling.motivation}</p>
                </div>
              )}
              {content.mathModelling.challenge && (
                <div className="p-3 bg-surface-50 dark:bg-surface-900 rounded-lg">
                  <p className="text-xs font-semibold text-surface-500 uppercase">Challenge</p>
                  <p className="text-sm mt-1 text-surface-700 dark:text-surface-300">{content.mathModelling.challenge}</p>
                </div>
              )}
            </div>

            {/* Equations */}
            {content.mathModelling.equations && content.mathModelling.equations.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-surface-800 dark:text-surface-200">Core Equations</h4>
                {content.mathModelling.equations.map((eq, i) => (
                  <Card key={i} className="border-l-4 border-l-math">
                    <EqBlock math={eq.latex} />
                    <div className="mt-2 space-y-1 text-sm text-surface-600 dark:text-surface-400">
                      <p><strong className="text-surface-800 dark:text-surface-200">Meaning:</strong> {eq.meaning}</p>
                      <p><strong className="text-surface-800 dark:text-surface-200">Interpretation:</strong> {eq.interpretation}</p>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Variables */}
            {content.mathModelling.variables && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {content.mathModelling.variables.map((v, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 bg-surface-50 dark:bg-surface-900 rounded-lg">
                    <code className="font-mono font-bold text-math bg-math/10 px-2 py-1 rounded text-sm">{v.symbol}</code>
                    <div>
                      <p className="font-medium text-sm text-surface-800 dark:text-surface-200">{v.name}</p>
                      <p className="text-xs text-surface-500">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Interactive Equation Explorer */}
            {content.mathModelling.interactive && (
              <EquationExplorer
                title="Interactive Equation Explorer"
                equation={content.mathModelling.interactive.equation}
                description={content.mathModelling.interactive.description}
                variables={content.mathModelling.interactive.variables}
                sliders={content.mathModelling.interactive.sliders}
              />
            )}

            {/* Performance Charts */}
            {content.mathModelling.charts && content.mathModelling.charts.length > 0 && (
              <div className="space-y-4">
                {content.mathModelling.charts.map((chart, i) => (
                  <PerformanceChart
                    key={i}
                    title={chart.title}
                    data={chart.data}
                    type={chart.type as 'bar' | 'line' | 'area' | undefined}
                  />
                ))}
              </div>
            )}

            {/* Advantages & Limitations */}
            {content.mathModelling.advantages && (
              <div className="p-4 bg-success/5 rounded-xl border border-success/20">
                <h4 className="font-bold text-success mb-2">Advantages</h4>
                <p className="text-surface-700 dark:text-surface-300">{content.mathModelling.advantages}</p>
              </div>
            )}
            {content.mathModelling.limitations && (
              <div className="p-4 bg-warning/5 rounded-xl border border-warning/20">
                <h4 className="font-bold text-warning mb-2">Limitations</h4>
                <p className="text-surface-700 dark:text-surface-300">{content.mathModelling.limitations}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-surface-600 dark:text-surface-400">
              Mathematical foundation is being developed for this topic. Here's an overview of the key concepts:
            </p>

            {/* Fallback content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-surface-50 dark:bg-surface-900 rounded-xl">
                <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-2">Need & Motivation</h4>
                <p className="text-surface-600 dark:text-surface-400">Understanding {topic.title} requires a solid grasp of prerequisite mathematical concepts and their application in quantum natural language processing.</p>
              </div>
              <div className="p-4 bg-surface-50 dark:bg-surface-900 rounded-xl">
                <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-2">Key Concepts</h4>
                <ul className="space-y-1 text-sm text-surface-600 dark:text-surface-400">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-math" />Vector space representation</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-math" />Linear algebra fundamentals</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-math" />Probability distributions</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </Section>

      {/* ============================================ */}
      {/* SECTION 3B: ACTIVITY BASED LEARNING           */}
      {/* ============================================ */}
      <Section
        title="Activity-Based Learning"
        icon={<Activity className="w-5 h-5" />}
        badge={<Badge variant="activity">4 Levels</Badge>}
      >
        <div className="space-y-6">
          {content.activities ? (
            content.activities.map((activity, i) => (
              <Card key={i} className={`border-l-4 ${
                i === 0 ? 'border-l-primary-500' :
                i === 1 ? 'border-l-activity' :
                i === 2 ? 'border-l-warning' :
                'border-l-insight'
              }`}>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={i === 0 ? 'concept' : i === 1 ? 'activity' : i === 2 ? 'warning' : 'insight'}>
                    Level {i + 1}: {
                      i === 0 ? 'Teacher Demonstrates' :
                      i === 1 ? 'Teacher + Students' :
                      i === 2 ? 'All Students (Groups)' :
                      'Individual Work'
                    }
                  </Badge>
                  {activity.duration && (
                    <span className="text-xs text-surface-400">{activity.duration}</span>
                  )}
                </div>
                <h4 className="font-bold text-lg text-surface-800 dark:text-surface-200 mb-2">{activity.title}</h4>
                <p className="text-surface-600 dark:text-surface-400 mb-3">{activity.description}</p>

                {activity.steps && (
                  <div className="space-y-2 mb-3">
                    <h5 className="font-semibold text-sm text-surface-700 dark:text-surface-300">Steps:</h5>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-surface-600 dark:text-surface-400">
                      {activity.steps.map((step, j) => (
                        <li key={j}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {(activity.materials || activity.timeRequired) && (
                  <div className="flex flex-wrap gap-4 text-xs text-surface-500 mb-3">
                    {activity.materials && <span>Materials: {activity.materials}</span>}
                    {activity.timeRequired && <span>Time: {activity.timeRequired}</span>}
                  </div>
                )}

                {activity.outcomes && (
                  <div className="p-3 bg-success/5 rounded-lg border border-success/20">
                    <p className="text-xs font-semibold text-success mb-1">Expected Outcomes:</p>
                    <p className="text-sm text-surface-600 dark:text-surface-400">{activity.outcomes}</p>
                  </div>
                )}

                {activity.rubrics && (
                  <div className="mt-3 p-3 bg-surface-50 dark:bg-surface-900 rounded-lg">
                    <p className="text-xs font-semibold text-surface-500 mb-1">Assessment Rubrics:</p>
                    <p className="text-sm text-surface-600 dark:text-surface-400">{activity.rubrics}</p>
                  </div>
                )}
              </Card>
            ))
          ) : (
            // Fallback activities
            [
              {
                level: 'Teacher Demonstrates',
                title: 'Instructor-Led Demonstration',
                description: `The instructor demonstrates the core concepts of ${topic.title} with real-world examples.`,
                steps: ['Setup demonstration environment', 'Explain key concepts with visual aids', 'Show step-by-step workflow', 'Highlight important observations'],
                materials: 'Projector, presentation slides, code editor',
                timeRequired: '5 min',
                outcomes: 'Students visualize the concept in action',
              },
              {
                level: 'Teacher + Students',
                title: 'Guided Collaborative Learning',
                description: 'Students work alongside the instructor in a guided exercise.',
                steps: ['Instructor poses guiding questions', 'Students suggest approaches', 'Collaborative problem solving', 'Discussion and clarification'],
                outcomes: 'Students actively participate in problem-solving',
                rubrics: 'Participation, quality of questions asked',
              },
              {
                level: 'All Students (Groups)',
                title: 'Group Experimentation',
                description: 'Students collaborate in groups to experiment with the concept.',
                steps: ['Form groups of 4-5 students', 'Distribute materials/code', 'Groups work on assigned tasks', 'Present findings to class'],
                timeRequired: '10 min',
                outcomes: 'Teamwork and collaborative learning',
              },
              {
                level: 'Individual Work',
                title: 'Independent Practice',
                description: 'Students apply concepts independently.',
                steps: ['Solve given problem', 'Write key takeaways', 'Self-evaluate understanding'],
                outcomes: 'Individual mastery assessment',
                rubrics: 'Correctness, clarity of explanation',
              },
            ].map((activity, i) => (
              <Card key={i} className={`border-l-4 ${
                i === 0 ? 'border-l-primary-500' :
                i === 1 ? 'border-l-activity' :
                i === 2 ? 'border-l-warning' :
                'border-l-insight'
              }`}>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={i === 0 ? 'concept' : i === 1 ? 'activity' : i === 2 ? 'warning' : 'insight'}>
                    Level {i + 1}: {activity.level}
                  </Badge>
                </div>
                <h4 className="font-bold text-lg text-surface-800 dark:text-surface-200 mb-2">{activity.title}</h4>
                <p className="text-surface-600 dark:text-surface-400 mb-3">{activity.description}</p>
                {activity.steps && (
                  <ol className="list-decimal list-inside space-y-1 text-sm text-surface-600 dark:text-surface-400 mb-3">
                    {activity.steps.map((s, j) => <li key={j}>{s}</li>)}
                  </ol>
                )}
                {(activity.materials || activity.timeRequired) && (
                  <div className="flex flex-wrap gap-4 text-xs text-surface-500 mb-3">
                    {activity.materials && <span>Materials: {activity.materials}</span>}
                    {activity.timeRequired && <span>Time: {activity.timeRequired}</span>}
                  </div>
                )}
                {activity.outcomes && (
                  <div className="p-3 bg-success/5 rounded-lg border border-success/20">
                    <p className="text-xs font-semibold text-success">Expected Outcomes:</p>
                    <p className="text-sm text-surface-600 dark:text-surface-400 mt-1">{activity.outcomes}</p>
                  </div>
                )}
              </Card>
            ))
          )}
        </div>
      </Section>

      {/* ============================================ */}
      {/* SECTION 4: PROJECT BASED LEARNING             */}
      {/* ============================================ */}
      <Section
        title="Project-Based Learning"
        icon={<Target className="w-5 h-5" />}
        badge={<Badge variant="project">TRL 3</Badge>}
      >
        {content.project ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-2">Scope</h4>
                <p className="text-sm text-surface-600 dark:text-surface-400">{content.project.scope}</p>
              </Card>
              <Card>
                <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-2">Objectives</h4>
                <ul className="space-y-1 text-sm text-surface-600 dark:text-surface-400">
                  {content.project.objectives?.map((o, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-project mt-2 flex-shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {content.project.timeline && (
              <Card>
                <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-3">Timeline</h4>
                <div className="space-y-3">
                  {content.project.timeline.map((t, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-20 text-xs font-mono text-surface-500">{t.phase}</div>
                      <div className="flex-1 h-3 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-project to-warning rounded-full"
                          style={{ width: `${t.percent}%` }}
                        />
                      </div>
                      <div className="text-xs text-surface-500 w-20 text-right">{t.duration}</div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {content.project.teamRoles && (
              <Card>
                <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-3">Team Roles</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {content.project.teamRoles.map((role, i) => (
                    <div key={i} className="p-3 bg-surface-50 dark:bg-surface-900 rounded-lg text-center">
                      <p className="font-semibold text-sm text-surface-800 dark:text-surface-200">{role.role}</p>
                      <p className="text-xs text-surface-500">{role.responsibility}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {content.project.deliverables && (
              <Card>
                <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-2">Deliverables</h4>
                <ul className="space-y-1 text-sm text-surface-600 dark:text-surface-400">
                  {content.project.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Target className="w-3.5 h-3.5 text-project flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-surface-600 dark:text-surface-400">
              Apply the concepts of {topic.title} in a practical project. Here are suggested project ideas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card hover>
                <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-2">Mini Project</h4>
                <p className="text-sm text-surface-600 dark:text-surface-400 mb-3">
                  Build a simple implementation that demonstrates the core concept of {topic.title}.
                </p>
                <div className="flex items-center gap-2 text-xs text-surface-500">
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>Estimated time: 15 min</span>
                </div>
              </Card>
              <Card hover>
                <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-2">Advanced Challenge</h4>
                <p className="text-sm text-surface-600 dark:text-surface-400 mb-3">
                  Extend the concept to solve a real-world problem relevant to quantum NLP.
                </p>
                <div className="flex items-center gap-2 text-xs text-surface-500">
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>Estimated time: 30 min</span>
                </div>
              </Card>
            </div>
          </div>
        )}
      </Section>

      {/* ============================================ */}
      {/* SECTION 5: QUESTION BANK (2-MARK QUESTIONS)   */}
      {/* ============================================ */}
      <Section title="Question Bank" icon={<HelpCircle className="w-5 h-5" />} badge={<Badge variant="concept">2-Mark Questions</Badge>}>
        <div className="space-y-4">
          {(content.questions && content.questions.length > 0 ? content.questions : [
            {
              question: `What is the core concept behind ${topic.title}?`,
              answer: 'This is a foundational concept in quantum NLP that helps bridge classical and quantum language processing.',
              explanation: 'Understanding this concept is crucial for building more complex QNLP systems.',
              commonMistake: 'Confusing this with its classical counterpart',
              tip: 'Remember the key distinction: quantum vs classical approaches',
            },
            {
              question: `How does ${topic.title} relate to the previous topic?`,
              answer: 'It builds upon previously established concepts and extends them into the quantum domain.',
              explanation: 'Each topic in QNLP builds upon previous knowledge in a progressive manner.',
              commonMistake: 'Skipping prerequisite concepts',
              tip: 'Always review prerequisites before proceeding',
            },
            {
              question: `What are the practical applications of ${topic.title}?`,
              answer: 'Applications include sentiment analysis, text classification, and language understanding.',
              explanation: 'Real-world applications help contextualize the theoretical concepts.',
              commonMistake: 'Thinking it only has theoretical value',
              tip: 'Look for industry use cases',
            },
          ]).map((q, i) => (
            <Card key={i} className="border-l-4 border-l-primary-500">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary-700 dark:text-primary-300">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-2">{q.question}</h4>
                  <details className="group">
                    <summary className="cursor-pointer text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
                      Show Answer
                    </summary>
                    <div className="mt-3 space-y-3 p-4 bg-surface-50 dark:bg-surface-900 rounded-xl">
                      <div>
                        <p className="text-xs font-semibold text-success uppercase mb-1">Answer:</p>
                        <p className="text-sm text-surface-700 dark:text-surface-300">{q.answer}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-insight uppercase mb-1">Explanation:</p>
                        <p className="text-sm text-surface-700 dark:text-surface-300">{q.explanation}</p>
                      </div>
                      {q.commonMistake && (
                        <div>
                          <p className="text-xs font-semibold text-warning uppercase mb-1">Common Mistake:</p>
                          <p className="text-sm text-surface-700 dark:text-surface-300">{q.commonMistake}</p>
                        </div>
                      )}
                      {q.tip && (
                        <div>
                          <p className="text-xs font-semibold text-primary-500 uppercase mb-1">Tip:</p>
                          <p className="text-sm text-surface-700 dark:text-surface-300">{q.tip}</p>
                        </div>
                      )}
                    </div>
                  </details>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ============================================ */}
      {/* SECTION 6: VIRTUAL LAB (LEARN BY DOING)       */}
      {/* ============================================ */}
      <Section
        title="Virtual Lab"
        icon={<Beaker className="w-5 h-5" />}
        badge={<Badge variant="activity">NEP 2020</Badge>}
        defaultOpen={true}
      >
        <div className="space-y-4">
          {content.virtualLab?.description && (
            <p className="text-surface-600 dark:text-surface-400">{content.virtualLab.description}</p>
          )}

          {/* Lab Controls */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant={labRunning ? 'secondary' : 'primary'}
              size="sm"
              icon={labRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              onClick={() => setLabRunning((v) => !v)}
            >
              {labRunning ? 'Pause' : 'Start Lab'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon={<RefreshCw className="w-4 h-4" />}
              onClick={() => { setLabRunning(false); setLabStep(0) }}
            >
              Reset
            </Button>
          </div>

          {/* Lab Steps */}
          <div className="space-y-3">
            {labSteps.map((step, i) => (
              <motion.div
                key={i}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  i === labStep && labRunning
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : i < labStep
                      ? 'border-success bg-success/5 dark:bg-success/10'
                      : 'border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800'
                }`}
                animate={{
                  scale: i === labStep && labRunning ? 1.02 : 1,
                }}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    i < labStep
                      ? 'bg-success/20 text-success'
                      : i === labStep && labRunning
                        ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-700'
                        : 'bg-surface-100 dark:bg-surface-700 text-surface-400'
                  }`}>
                    {i < labStep ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <span className="text-xs font-bold">{i + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-sm text-surface-800 dark:text-surface-200">{step}</h5>
                    {content.virtualLab?.stepDetails?.[i] && (
                      <p className="text-xs text-surface-500 mt-1">{content.virtualLab.stepDetails[i]}</p>
                    )}
                  </div>
                  {i < labStep && <CheckCircle className="w-5 h-5 text-success" />}
                </div>

                {/* Animation for current step */}
                {i === labStep && labRunning && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 pt-3 border-t border-primary-200 dark:border-primary-800"
                  >
                    <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400">
                      <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                      Processing...
                    </div>
                    {/* Simulated output visualization */}
                    <div className="mt-2 h-8 bg-gradient-to-r from-primary-200 to-primary-400 dark:from-primary-800 dark:to-primary-600 rounded-lg animate-pulse" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Run button */}
          {labRunning && labStep < labSteps.length - 1 && (
            <Button
              variant="primary"
              size="md"
              icon={<Play className="w-4 h-4" />}
              onClick={() => setLabStep((s) => Math.min(s + 1, labSteps.length - 1))}
            >
              Next Step
            </Button>
          )}

          {labStep === labSteps.length - 1 && labRunning && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="p-6 bg-success/10 rounded-xl border border-success/30 text-center"
            >
              <CheckCircle className="w-12 h-12 text-success mx-auto mb-3" />
              <h4 className="text-xl font-bold text-surface-800 dark:text-surface-200">Lab Complete!</h4>
              <p className="text-surface-600 dark:text-surface-400 mt-1">{content.virtualLab?.completionMessage || 'You have successfully completed this virtual lab exercise.'}</p>
            </motion.div>
          )}

          {/* Data Flow Diagram */}
          {content.virtualLab?.dataFlow && (
            <MermaidDiagram
              chart={content.virtualLab.dataFlow}
              caption="Data flow through the virtual lab pipeline"
            />
          )}

          {/* Performance metrics */}
          {labRunning && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Throughput', value: `${Math.round(Math.random() * 100)} ops/s`, color: 'text-primary-600' },
                { label: 'Accuracy', value: `${Math.round(70 + Math.random() * 25)}%`, color: 'text-success' },
                { label: 'Latency', value: `${Math.round(Math.random() * 50)} ms`, color: 'text-warning' },
                { label: 'Fidelity', value: `${Math.round(85 + Math.random() * 14)}%`, color: 'text-insight' },
              ].map((m, i) => (
                <div key={i} className="p-3 bg-surface-50 dark:bg-surface-900 rounded-lg text-center">
                  <p className="text-xs text-surface-500">{m.label}</p>
                  <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* ============================================ */}
      {/* SECTION 7: KEY INSIGHTS & WRAP-UP             */}
      {/* ============================================ */}
      <Section title="Key Insights & Wrap-Up" icon={<Lightbulb className="w-5 h-5" />}>
        <div className="space-y-4">
          {content.insights ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-success/5 rounded-xl border border-success/20">
                  <h4 className="font-bold text-success mb-2">Advantages</h4>
                  <ul className="space-y-1 text-sm text-surface-700 dark:text-surface-300">
                    {(content.insights.advantages || ['Clean mathematical foundation', 'Efficient for certain tasks', 'Scalable architecture']).map((a, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-warning/5 rounded-xl border border-warning/20">
                  <h4 className="font-bold text-warning mb-2">Disadvantages</h4>
                  <ul className="space-y-1 text-sm text-surface-700 dark:text-surface-300">
                    {(content.insights.disadvantages || ['Hardware limitations', 'Noise sensitivity', 'Steep learning curve']).map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-warning mt-2 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {content.insights.futureScope && (
                <Card>
                  <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-2">Future Scope</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-400">{content.insights.futureScope}</p>
                </Card>
              )}

              {content.insights.industrialApplications && (
                <Card>
                  <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-2">Industrial Applications</h4>
                  <ul className="space-y-1 text-sm text-surface-600 dark:text-surface-400">
                    {content.insights.industrialApplications.map((app, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-insight" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {content.insights.careerRelevance && (
                <Card>
                  <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-2">Career Relevance</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-400">{content.insights.careerRelevance}</p>
                </Card>
              )}
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-success/5 rounded-xl border border-success/20">
                  <h4 className="font-bold text-success mb-2">Key Takeaways</h4>
                  <ul className="space-y-1 text-sm text-surface-700 dark:text-surface-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                      {topic.title} bridges classical and quantum approaches to NLP
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                      Understanding this concept is essential for advanced QNLP topics
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                      Practical applications span multiple domains including healthcare and finance
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-warning/5 rounded-xl border border-warning/20">
                  <h4 className="font-bold text-warning mb-2">Challenges</h4>
                  <ul className="space-y-1 text-sm text-surface-700 dark:text-surface-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-warning mt-2 flex-shrink-0" />
                      Requires understanding of both NLP and quantum computing
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-warning mt-2 flex-shrink-0" />
                      Current quantum hardware has limitations
                    </li>
                  </ul>
                </div>
              </div>
              <Card>
                <h4 className="font-bold text-surface-800 dark:text-surface-200 mb-2">Research & Career Opportunities</h4>
                <p className="text-sm text-surface-600 dark:text-surface-400">
                  QNLP is an emerging field with active research in quantum machine learning, natural language understanding,
                  and hybrid quantum-classical systems. Career opportunities exist in quantum software development,
                  research institutions, and AI research labs.
                </p>
              </Card>
            </>
          )}
        </div>
      </Section>

      {/* ============================================ */}
      {/* FEEDBACK & APPROVAL SECTION                   */}
      {/* ============================================ */}
      <Section title="Feedback & Approval" icon={<ThumbsUp className="w-5 h-5" />} collapsible={false}>
        {!isApproved ? (
          <div className="space-y-4">
            <p className="text-surface-600 dark:text-surface-400">
              Please review this topic content and provide your feedback. Once approved, the next topic will be unlocked.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-surface-700 dark:text-surface-300">Rating:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((r) => (
                  <button
                    key={r}
                    onClick={() => setRating(r)}
                    className={`w-8 h-8 rounded-lg transition-colors ${
                      r <= rating
                        ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-600'
                        : 'bg-surface-100 dark:bg-surface-700 text-surface-400'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Text */}
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Share your feedback, suggestions, or comments about this topic..."
              className="w-full p-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[100px]"
            />

            <div className="flex gap-3">
              <Button
                variant="primary"
                size="lg"
                icon={<Send className="w-5 h-5" />}
                onClick={handleApprove}
              >
                Approve & Continue
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<RefreshCw className="w-4 h-4" />}
                onClick={() => { setFeedbackText(''); setRating(3) }}
              >
                Reset
              </Button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 bg-success/10 rounded-xl border border-success/30 text-center"
          >
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-surface-800 dark:text-surface-200 mb-2">Topic Completed!</h3>
            <p className="text-surface-600 dark:text-surface-400 mb-6">
              Thank you for your feedback. You can now proceed to the next topic.
            </p>

            <div className="flex justify-center gap-4">
              {prevTopic && (
                <Link to={`/topic/${mod.id}/${prevTopic.id}`}>
                  <Button variant="outline" size="md" icon={<ChevronLeft className="w-4 h-4" />}>
                    Previous: {prevTopic.id}
                  </Button>
                </Link>
              )}
              {nextTopic && (
                <Link to={`/topic/${mod.id}/${nextTopic.id}`} onClick={handleNextTopic}>
                  <Button variant="primary" size="md" icon={<ChevronRight className="w-4 h-4" />}>
                    Next: {nextTopic.id}
                  </Button>
                </Link>
              )}
              {!nextTopic && (
                <Link to={`/module/${mod.id}`}>
                  <Button variant="primary" size="md">
                    Back to Module
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </Section>
    </div>
  )
}
