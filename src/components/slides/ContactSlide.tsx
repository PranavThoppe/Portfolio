import { motion } from 'framer-motion'
import type { PortfolioData } from '../../data/portfolio'

interface ContactSlideProps {
  data: PortfolioData
  screenTime: number
  title?: string
  sub?: string
}

export function ContactSlide({ data, screenTime, title, sub }: ContactSlideProps) {
  const minutes = Math.floor(screenTime / 60)
  const guiltMessage =
    minutes >= 2
      ? "Okay, you've been here a while. Hire me?"
      : "You made it to the end!"
  const contactTitle = title ?? guiltMessage
  const contactSub =
    sub ?? "You've scrolled through my entire portfolio. The least you can do is say hi."

  return (
    <div className="slide-content contact-slide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="contact-eyebrow">end of feed</p>
        <h2 className="contact-title">{contactTitle}</h2>
        <p className="contact-sub">{contactSub}</p>

        <div className="contact-links">
          <a href={`mailto:${data.email}`} className="contact-btn primary">
            Email me
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            LinkedIn
          </a>
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            GitHub
          </a>
        </div>

        <p className="contact-footer">
          Scroll responsibly
        </p>
      </motion.div>
    </div>
  )
}
