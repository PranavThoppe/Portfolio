import { motion } from 'framer-motion'

export function EasterEggSlide() {
  return (
    <div className="slide-content easter-slide">
      <motion.div
        className="easter-card"
        initial={{ opacity: 0, rotate: -2, y: 20 }}
        whileInView={{ opacity: 1, rotate: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="easter-label">hidden post unlocked</p>
        <h2 className="easter-title">Touch grass mode unavailable.</h2>
        <p className="easter-sub">
          You picked a route with easter eggs, so the feed rewarded you with one more
          unnecessary but memorable slide.
        </p>
        <div className="easter-terminal">
          <span>$ sudo stop-scrolling</span>
          <span>permission denied: portfolio still has more personality</span>
        </div>
      </motion.div>
    </div>
  )
}
