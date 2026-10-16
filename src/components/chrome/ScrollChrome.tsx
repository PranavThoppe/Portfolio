import { useState } from 'react'
import { motion } from 'framer-motion'
import type { AudienceProfile } from '../../types/audience'
import { SystemAlert } from '../shared/SystemAlert'

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
  const [liked, setLiked] = useState(false)
  const [shareAlert, setShareAlert] = useState<string | null>(null)

  const handleShare = async () => {
    const url = `${window.location.origin}${window.location.pathname}`
    const shareData = {
      title: document.title,
      text: 'Check out this portfolio',
      url,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        if ((err as DOMException).name !== 'AbortError') console.error(err)
      }
      return
    }

    try {
      await navigator.clipboard.writeText(url)
      setShareAlert('Link copied to clipboard.')
    } catch {
      setShareAlert(`Copy this link: ${url}`)
    }
  }

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

      <aside className="chrome-actions">
        <button
          type="button"
          className={`action-btn like-btn ${liked ? 'liked' : ''}`}
          aria-pressed={liked}
          aria-label={liked ? 'Unlike' : 'Like'}
          onClick={() => setLiked((v) => !v)}
        >
          <span className="action-icon">{liked ? '♥' : '♡'}</span>
          <span className="action-count">{847 + (liked ? 1 : 0)}</span>
        </button>
        <button type="button" className="action-btn">
          <span className="action-icon">💬</span>
          <span className="action-count">42</span>
        </button>
        <button
          type="button"
          className="action-btn share-btn"
          aria-label="Share"
          onClick={handleShare}
        >
          <span className="action-icon share-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12" />
              <path d="M8 7l4-4 4 4" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
            </svg>
          </span>
          <span className="action-count">Share</span>
        </button>
      </aside>

      <SystemAlert
        title="Share"
        message={shareAlert ?? ''}
        isVisible={shareAlert !== null}
        onDismiss={() => setShareAlert(null)}
      />

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
