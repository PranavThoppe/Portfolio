import { motion } from 'framer-motion'
import type { PortfolioData } from '../../data/portfolio'

interface IntroSlideProps {
  data: PortfolioData
  bio?: string
  tagline?: string
}

export function IntroSlide({ data, bio = data.bio, tagline = data.tagline }: IntroSlideProps) {
  return (
    <div className="slide-content intro-slide">
      <motion.div
        className="intro-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="intro-header">
          <div className="avatar">{data.avatar}</div>
          <div>
            <h2 className="intro-name">{data.name}</h2>
            <p className="intro-handle">{data.handle}</p>
          </div>
          <button type="button" className="follow-btn">
            Follow
          </button>
        </div>

        <p className="intro-role">{data.role}</p>
        <p className="intro-tagline">{tagline}</p>
        <p className="intro-bio">{bio}</p>

        <div className="intro-stats">
          <div>
            <strong>{data.projects.length}</strong>
            <span>projects</span>
          </div>
          <div>
            <strong>{data.skills.length}+</strong>
            <span>skills</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>coffee</span>
          </div>
        </div>

        <p className="intro-location">📍 {data.location}</p>
      </motion.div>
    </div>
  )
}
