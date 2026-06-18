import { create } from 'zustand'

type Theme = 'light' | 'dark'

interface ThemeStore {
  theme: Theme
  toggle: () => void
  setTheme: (t: Theme) => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'light',
  toggle: () =>
    set((s) => {
      const next = s.theme === 'light' ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark', next === 'dark')
      return { theme: next }
    }),
  setTheme: (t) => {
    document.documentElement.classList.toggle('dark', t === 'dark')
    set({ theme: t })
  },
}))
