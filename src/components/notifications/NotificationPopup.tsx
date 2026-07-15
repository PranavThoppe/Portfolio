import { AnimatePresence, motion } from 'framer-motion'
import { AppIcon } from '../shared/AppIcon'
import type { ProjectNotification } from '../../types/project'

interface NotificationPopupProps {
  notification: ProjectNotification
  isVisible: boolean
  onDismiss: () => void
}

export function NotificationPopup({
  notification,
  isVisible,
  onDismiss,
}: NotificationPopupProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          className="notification-popup"
          initial={{ opacity: 0, y: -40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.98 }}
          whileTap={{ scale: 0.96, rotate: [-1, 1, -1, 0] }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onClick={onDismiss}
        >
          <AppIcon
            icon={notification.appIcon}
            alt={notification.appName}
            className="notification-icon"
          />
          <span className="notification-body">
            <span className="notification-meta">
              <strong>{notification.appName}</strong>
              <span>now</span>
            </span>
            <span className="notification-title">{notification.title}</span>
            <span className="notification-text">{notification.body}</span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
