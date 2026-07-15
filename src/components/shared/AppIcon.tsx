import { isImageIcon } from '../../lib/appIcon'

interface AppIconProps {
  icon: string
  alt: string
  className?: string
}

export function AppIcon({ icon, alt, className = 'app-icon' }: AppIconProps) {
  if (isImageIcon(icon)) {
    return <img className={className} src={icon} alt={alt} />
  }

  return <span className={className}>{icon}</span>
}
