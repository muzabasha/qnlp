import { create } from 'zustand'

interface TopicProgress {
  completed: boolean
  feedbackGiven: boolean
  approved: boolean
}

interface ProgressStore {
  progress: Record<string, TopicProgress>
  currentModule: string
  currentTopic: string
  setCurrentModule: (id: string) => void
  setCurrentTopic: (id: string) => void
  markCompleted: (topicId: string) => void
  markApproved: (topicId: string) => void
  giveFeedback: (topicId: string, feedback: string) => void
  isUnlocked: (topicId: string, prerequisites: string[]) => boolean
}

export const useProgressStore = create<ProgressStore>((set, get) => ({
  progress: {},
  currentModule: 'm1',
  currentTopic: '1.1',
  setCurrentModule: (id) => set({ currentModule: id }),
  setCurrentTopic: (id) => set({ currentTopic: id }),
  markCompleted: (topicId) =>
    set((s) => ({
      progress: {
        ...s.progress,
        [topicId]: { ...s.progress[topicId], completed: true },
      },
    })),
  markApproved: (topicId) =>
    set((s) => ({
      progress: {
        ...s.progress,
        [topicId]: { ...s.progress[topicId], approved: true, feedbackGiven: true },
      },
    })),
  giveFeedback: (topicId, feedback) =>
    set((s) => ({
      progress: {
        ...s.progress,
        [topicId]: { ...s.progress[topicId], feedbackGiven: true, feedback },
      },
    })),
  isUnlocked: (topicId, prerequisites) => {
    const state = get().progress
    return prerequisites.every((p) => state[p]?.approved)
  },
}))
