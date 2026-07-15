import { motion } from 'framer-motion'
import type { AudienceProfile } from '../../types/audience'

interface ScrollChromeProps {
  audience: AudienceProfile
  currentSlide: number
  totalSlides: number
  screenTime: number
  showSwipeHint: boolean
  soundEnabled: boolean
  onToggleSound: () => void
  onSwitchAudience: () => void
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function ScrollChrome({
  audience,
  currentSlide,
  totalSlides,
  screenTime,
  showSwipeHint,
  soundEnabled,
  onToggleSound,
  onSwitchAudience,
}: ScrollChromeProps) {
  return (
    <>
      <header className="chrome-header">
        <div className="chrome-tabs">
          <button type="button" className="chrome-tab switch-audience" onClick={onSwitchAudience}>
            Switch
          </button>
          <span className="chrome-tab active">For {audience.label.split(' / ')[0]}</span>
        </div>
        <div className="chrome-controls">
          <button type="button" className="sound-toggle" onClick={onToggleSound}>
            {soundEnabled ? 'sound on' : 'muted'}
          </button>
          <div className="screen-time">
            <span className="screen-time-dot" />
            {formatTime(screenTime)}
          </div>
        </div>
      </header>

      <aside className="chrome-actions" aria-hidden="true">
        <button type="button" className="action-btn">
          <span className="action-icon">♥</span>
          <span className="action-count">847</span>
        </button>
        <button type="button" className="action-btn">
          <span className="action-icon">💬</span>
          <span className="action-count">42</span>
        </button>
        <button type="button" className="action-btn">
          <span className="action-icon">↗</span>
          <span className="action-count">Share</span>
        </button>
      </aside>

      <nav className="slide-progress" aria-label="Slide progress">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className={`progress-dot ${i === currentSlide ? 'active' : ''} ${
              i < currentSlide ? 'passed' : ''
            }`}
          />
        ))}
      </nav>

      {showSwipeHint && currentSlide < totalSlides - 1 && (
        <motion.div
          className="swipe-hint"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <span>swipe up</span>
          <span className="swipe-arrow">↑</span>
        </motion.div>
      )}
    </>
  )
}
