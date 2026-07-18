import { AnimatePresence, motion } from 'framer-motion'

interface SystemAlertProps {
  title: string
  message: string
  actionLabel?: string
  isVisible: boolean
  onDismiss: () => void
}

export function SystemAlert({
  title,
  message,
  actionLabel = 'OK',
  isVisible,
  onDismiss,
}: SystemAlertProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="system-alert-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onDismiss}
        >
          <motion.div
            className="system-alert"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="system-alert-title"
            aria-describedby="system-alert-message"
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="system-alert-content">
              <h3 id="system-alert-title" className="system-alert-title">
                {title}
              </h3>
              <p id="system-alert-message" className="system-alert-message">
                {message}
              </p>
            </div>
            <button
              type="button"
              className="system-alert-action"
              onClick={onDismiss}
            >
              {actionLabel}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
