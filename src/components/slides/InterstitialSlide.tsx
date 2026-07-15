import { motion } from 'framer-motion'

interface InterstitialSlideProps {
  message: string
  submessage?: string
}

export function InterstitialSlide({ message, submessage }: InterstitialSlideProps) {
  return (
    <div className="slide-content interstitial-slide">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="interstitial-emoji">👀</p>
        <h2 className="interstitial-title">{message}</h2>
        {submessage && <p className="interstitial-sub">{submessage}</p>}
        <p className="interstitial-cta">keep swiping. you know you want to.</p>
      </motion.div>
    </div>
  )
}
