export interface StorytellingContent {
  story: string
  questions: string[]
  connection: string
  technicalIntro: string
  lifeSkills: string
}

export interface EquationDef {
  latex: string
  meaning: string
  interpretation: string
}

export interface VariableDef {
  symbol: string
  name: string
  description: string
}

export interface SliderDef {
  name: string
  label: string
  min: number
  max: number
  step: number
  default: number
}

export interface InteractiveEquation {
  equation: string
  description: string
  variables: VariableDef[]
  sliders: SliderDef[]
}

export interface ChartDef {
  title: string
  type: string
  data: Record<string, string | number>[]
}

export interface MathModellingContent {
  need: string
  motivation: string
  challenge: string
  equations: EquationDef[]
  variables: VariableDef[]
  interactive?: InteractiveEquation
  charts?: ChartDef[]
  advantages: string
  limitations: string
}

export interface ActivityContent {
  title: string
  description: string
  steps: string[]
  materials?: string
  timeRequired?: string
  outcomes: string
  rubrics?: string
  duration?: string
}

export interface TimelineItem {
  phase: string
  duration: string
  percent: number
}

export interface TeamRole {
  role: string
  responsibility: string
}

export interface ProjectContent {
  scope: string
  objectives: string[]
  timeline: TimelineItem[]
  teamRoles: TeamRole[]
  deliverables: string[]
}

export interface QuestionContent {
  question: string
  answer: string
  explanation: string
  commonMistake?: string
  tip?: string
}

export interface VirtualLabContent {
  description: string
  steps: string[]
  stepDetails: string[]
  completionMessage: string
  dataFlow?: string
}

export interface InsightsContent {
  advantages: string[]
  disadvantages: string[]
  futureScope: string
  industrialApplications: string[]
  careerRelevance: string
}

export interface TopicContent {
  topicId: string
  learningObjective: string
  nextPrep: string
  dependencyGraph?: string
  storytelling: StorytellingContent
  mathModelling: MathModellingContent
  activities: ActivityContent[]
  project: ProjectContent
  questions: QuestionContent[]
  virtualLab: VirtualLabContent
  insights: InsightsContent
}

import { m1Content } from './module1'
import { m2Content } from './module2'
import { m3Content } from './module3'
import { m4Content } from './module4'
import { m5Content } from './module5'
import { m6Content } from './module6'
import { m7Content } from './module7'
import { m8Content } from './module8'
import { m9Content } from './module9'
import { m10Content } from './module10'
import { m11Content } from './module11'
import { m12Content } from './module12'
import { m13Content } from './module13'
import { m14Content } from './module14'
import { m15Content } from './module15'
import { m16Content } from './module16'
import { m17Content } from './module17'
import { m18Content } from './module18'

const contentMap: Record<string, TopicContent> = {
  ...m1Content,
  ...m2Content,
  ...m3Content,
  ...m4Content,
  ...m5Content,
  ...m6Content,
  ...m7Content,
  ...m8Content,
  ...m9Content,
  ...m10Content,
  ...m11Content,
  ...m12Content,
  ...m13Content,
  ...m14Content,
  ...m15Content,
  ...m16Content,
  ...m17Content,
  ...m18Content,
}

export function getTopicContent(topicId: string): TopicContent | null {
  return contentMap[topicId] || null
}

export function getAllContent(): Record<string, TopicContent> {
  return contentMap
}
