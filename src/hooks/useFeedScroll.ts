import { useCallback, useEffect, useRef, useState } from 'react'

export function useFeedScroll(totalSlides: number) {
  const feedRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showSwipeHint, setShowSwipeHint] = useState(true)

  const updateCurrentSlide = useCallback(() => {
    const feed = feedRef.current
    if (!feed) return

    const slideHeight = feed.clientHeight
    const index = Math.round(feed.scrollTop / slideHeight)
    setCurrentSlide(Math.min(index, totalSlides - 1))
  }, [totalSlides])

  useEffect(() => {
    const feed = feedRef.current
    if (!feed) return

    feed.addEventListener('scroll', updateCurrentSlide, { passive: true })
    return () => feed.removeEventListener('scroll', updateCurrentSlide)
  }, [updateCurrentSlide])

  useEffect(() => {
    if (currentSlide > 0) setShowSwipeHint(false)
  }, [currentSlide])

  useEffect(() => {
    const feed = feedRef.current
    if (!feed) return

    feed.scrollTo({ top: 0 })
    setCurrentSlide(0)
    setShowSwipeHint(true)
  }, [totalSlides])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const feed = feedRef.current
      if (!feed) return

      const slideHeight = feed.clientHeight
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault()
        feed.scrollBy({ top: slideHeight, behavior: 'smooth' })
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        feed.scrollBy({ top: -slideHeight, behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return {
    feedRef,
    currentSlide,
    showSwipeHint,
  }
}
