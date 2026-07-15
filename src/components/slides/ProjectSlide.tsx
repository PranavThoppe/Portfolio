import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { NotificationPopup } from '../notifications/NotificationPopup'
import type { Project } from '../../types/project'

interface ProjectSlideProps {
  project: Project
  index: number
  onNotification?: () => void
}

export function ProjectSlide({ project, index, onNotification }: ProjectSlideProps) {
  const [showNotification, setShowNotification] = useState(false)
  const hasShownNotification = useRef(false)

  useEffect(() => {
    if (!showNotification) return

    const timeout = window.setTimeout(() => setShowNotification(false), 4000)
    return () => window.clearTimeout(timeout)
  }, [showNotification])

  const showProjectNotification = () => {
    if (!project.notification || hasShownNotification.current) return

    hasShownNotification.current = true
    window.setTimeout(() => {
      setShowNotification(true)
      onNotification?.()
    }, project.notification?.delayMs ?? 1200)
  }

  return (
    <div className="slide-content project-slide">
      {project.notification && (
        <NotificationPopup
          notification={project.notification}
          isVisible={showNotification}
          onDismiss={() => setShowNotification(false)}
        />
      )}

      <motion.div
        className="project-visual"
        style={{ background: project.gradient }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onViewportEnter={showProjectNotification}
      >
        <span className="project-number">0{index + 1}</span>
        {project.icon && (
          <img
            className="project-app-icon"
            src={project.icon.src}
            alt={project.icon.alt}
          />
        )}
        {project.media?.type === 'image' && project.media.src ? (
          <img
            className="project-screenshot"
            src={project.media.src}
            alt={project.media.alt}
          />
        ) : project.media?.type === 'mockup' ? (
          <div className="project-media" aria-label={project.media.alt}>
            <span className="project-media-bar" />
            <span className="project-media-line wide" />
            <span className="project-media-line" />
            <span className="project-media-caption">{project.media.caption}</span>
          </div>
        ) : null}
        <h2 className="project-title">{project.title}</h2>
      </motion.div>

      <motion.div
        className="project-info"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-desc">{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              #{tag}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Live App →
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
          )}
          {project.instagram && (
            <a href={project.instagram} target="_blank" rel="noopener noreferrer">
              Instagram →
            </a>
          )}
        </div>

        <p className="project-likes">♥ {project.likes} developers liked this</p>
      </motion.div>
    </div>
  )
}
