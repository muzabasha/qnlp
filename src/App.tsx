import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/Home'
import { OverviewPage } from '@/pages/Overview'
import { ModulePage } from '@/pages/ModulePage'
import { TopicPage } from '@/pages/TopicPage'
import { AnalyticsPage } from '@/pages/Analytics'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/module/:moduleId" element={<ModulePage />} />
          <Route path="/topic/:moduleId/:topicId" element={<TopicPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
