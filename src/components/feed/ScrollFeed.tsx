import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScrollChrome } from '../chrome/ScrollChrome'
import { buildFeed } from '../../lib/buildFeed'
import { useFeedSound } from '../../hooks/useFeedSound'
import { useFeedScroll } from '../../hooks/useFeedScroll'
import { useScreenTime } from '../../hooks/useScreenTime'
import type { AudienceProfile } from '../../types/audience'

interface ScrollFeedProps {
  audience: AudienceProfile
}

export function ScrollFeed({ audience }: ScrollFeedProps) {
  const navigate = useNavigate()
  const screenTime = useScreenTime()
  const { soundEnabled, toggleSound, playNotification } = useFeedSound()

  const slides = useMemo(
    () =>
      buildFeed({
        audience,
        screenTime,
        onNotification: playNotification,
      }),
    [audience, playNotification, screenTime],
  )

  const totalSlides = slides.length
  const { feedRef, currentSlide, showSwipeHint } = useFeedScroll(totalSlides)

  return (
    <div className="scroll-app">
      <ScrollChrome
        audience={audience}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        screenTime={screenTime}
        showSwipeHint={showSwipeHint}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onSwitchAudience={() => navigate('/')}
      />

      <div ref={feedRef} className="scroll-feed" role="feed" aria-label="Portfolio feed">
        {slides.map((slide, i) => (
          <section
            key={slide.id}
            className="feed-slide"
            aria-label={`Slide ${i + 1} of ${totalSlides}`}
          >
            {slide.element}
          </section>
        ))}
      </div>
    </div>
  )
}
