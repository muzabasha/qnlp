import { create } from 'zustand'

interface FeedbackItem {
  topicId: string
  comment: string
  rating: number
  timestamp: number
}

interface FeedbackStore {
  feedbacks: FeedbackItem[]
  addFeedback: (f: FeedbackItem) => void
  getFeedback: (topicId: string) => FeedbackItem | undefined
}

export const useFeedbackStore = create<FeedbackStore>((set, get) => ({
  feedbacks: [],
  addFeedback: (f) => set((s) => ({ feedbacks: [...s.feedbacks, f] })),
  getFeedback: (topicId) => get().feedbacks.find((f) => f.topicId === topicId),
}))
