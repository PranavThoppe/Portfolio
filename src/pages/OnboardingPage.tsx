import { useNavigate } from 'react-router-dom'
import { OnboardingSlide } from '../components/onboarding/OnboardingSlide'
import { getAudiencePath } from '../lib/routes'
import { saveAudience } from '../lib/storage'
import type { AudienceId } from '../types/audience'

export function OnboardingPage() {
  const navigate = useNavigate()

  const handleSelectAudience = (audienceId: AudienceId) => {
    saveAudience(audienceId)
    navigate(getAudiencePath(audienceId))
  }

  return <OnboardingSlide onSelectAudience={handleSelectAudience} />
}
