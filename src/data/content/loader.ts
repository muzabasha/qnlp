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

const contentMap: Record<string, TopicContent> = {
  ...m1Content,
}

export function getTopicContent(topicId: string): TopicContent | null {
  return contentMap[topicId] || null
}

export function getAllContent(): Record<string, TopicContent> {
  return contentMap
}
