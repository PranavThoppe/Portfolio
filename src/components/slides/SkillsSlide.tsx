import { motion } from 'framer-motion'

interface SkillsSlideProps {
  skills: string[]
  eyebrow?: string
  title?: string
  sub?: string
}

export function SkillsSlide({
  skills,
  eyebrow = 'trending in your area',
  title = 'Tech Stack',
  sub = "The algorithm thinks you'd like these.",
}: SkillsSlideProps) {
  return (
    <div className="slide-content skills-slide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="skills-eyebrow">{eyebrow}</p>
        <h2 className="skills-title">{title}</h2>
        <p className="skills-sub">{sub}</p>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="skill-chip"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
