import { motion } from 'framer-motion'
import type { PortfolioData } from '../../data/portfolio'

interface ResumeSlideProps {
  data: PortfolioData
}

export function ResumeSlide({ data }: ResumeSlideProps) {
  return (
    <div className="slide-content resume-slide">
      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="resume-eyebrow">recruiter fast lane</p>
        <h2 className="resume-title">Resume, without the hunt.</h2>
        <p className="resume-sub">
          Drop your resume at <code>public/resume.pdf</code> and this button will become
          the one-tap download recruiters expect.
        </p>

        <div className="resume-preview">
          <span />
          <span />
          <span />
          <span className="short" />
        </div>

        <a className="contact-btn primary" href="/resume.pdf" download>
          Download resume
        </a>
        <a
          className="contact-btn"
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          View LinkedIn
        </a>
      </motion.div>
    </div>
  )
}
