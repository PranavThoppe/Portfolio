import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LegacyAudienceRedirect } from './components/routing/LegacyAudienceRedirect'
import { AudienceFeedPage } from './pages/AudienceFeedPage'
import { OnboardingPage } from './pages/OnboardingPage'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <LegacyAudienceRedirect />
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/:audienceId" element={<AudienceFeedPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
