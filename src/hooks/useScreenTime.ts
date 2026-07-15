import { useEffect, useState } from 'react'

export function useScreenTime() {
  const [screenTime, setScreenTime] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setScreenTime((time) => time + 1), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return screenTime
}
