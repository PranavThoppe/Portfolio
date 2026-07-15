import { motion } from 'framer-motion'
import { audienceList } from '../../data/audiences'
import { getStoredAudience } from '../../lib/storage'
import type { AudienceId } from '../../types/audience'

interface OnboardingSlideProps {
  onSelectAudience: (audience: AudienceId) => void
}

export function OnboardingSlide({ onSelectAudience }: OnboardingSlideProps) {
  const lastAudienceId = getStoredAudience()

  return (
    <div className="scroll-app onboarding-app">
      <section className="feed-slide onboarding-slide">
        <motion.div
          className="slide-content onboarding-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="onboarding-eyebrow">before you scroll</p>
          <h1 className="onboarding-title">Who are you?</h1>

          <div className="audience-grid">
            {audienceList.map((audience, index) => (
              <motion.button
                key={audience.id}
                type="button"
                className={`audience-card${audience.id === lastAudienceId ? ' selected' : ''}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => onSelectAudience(audience.id)}
              >
                <span>{audience.label}</span>
                <small>{audience.subtitle}</small>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
