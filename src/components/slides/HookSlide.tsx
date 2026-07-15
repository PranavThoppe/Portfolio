import { motion } from 'framer-motion'

interface HookSlideProps {
  eyebrow?: string
  title?: string
  accent?: string
  sub?: string
  meta?: string[]
}

export function HookSlide({
  eyebrow = 'recommended for you',
  title = "You're scrolling",
  accent = 'again.',
  sub = 'Might as well learn something about the person who built this.',
  meta = ['∞ algorithm approved', 'no exit planned'],
}: HookSlideProps) {
  return (
    <div className="slide-content hook-slide">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="hook-eyebrow">{eyebrow}</p>
        <h1 className="hook-title">
          {title}
          <br />
          <span className="hook-accent">{accent}</span>
        </h1>
        <p className="hook-sub">{sub}</p>
        <div className="hook-meta">
          {meta.map((item, index) => (
            <span key={item}>
              {index > 0 ? '· ' : ''}
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
