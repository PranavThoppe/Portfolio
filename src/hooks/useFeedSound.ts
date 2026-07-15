import { useCallback, useState } from 'react'

export function useFeedSound() {
  const [soundEnabled, setSoundEnabled] = useState(false)

  const playNotification = useCallback(() => {
    if (!soundEnabled) return

    const AudioContext =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof window.AudioContext })
        .webkitAudioContext
    if (!AudioContext) return

    const audioContext = new AudioContext()
    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain()

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(1320, audioContext.currentTime + 0.08)

    gain.gain.setValueAtTime(0.001, audioContext.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.12, audioContext.currentTime + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.25)

    oscillator.connect(gain)
    gain.connect(audioContext.destination)
    oscillator.start()
    oscillator.stop(audioContext.currentTime + 0.25)
  }, [soundEnabled])

  return {
    soundEnabled,
    toggleSound: () => setSoundEnabled((enabled) => !enabled),
    playNotification,
  }
}
