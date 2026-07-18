import type { AudienceId } from './audience'

export interface ProjectNotificationCopy {
  title: string
  body: string
  delayMs?: number
}

export interface ProjectNotification extends ProjectNotificationCopy {
  appName: string
  /** Emoji fallback, or image path like /apps/linkup/icon.png */
  appIcon: string
  /** Audience-specific title/body overrides. Falls back to the default copy. */
  byAudience?: Partial<Record<AudienceId, ProjectNotificationCopy>>
}

export interface ProjectIcon {
  src: string
  alt: string
}

export interface ProjectMedia {
  type: 'mockup' | 'image' | 'video'
  src?: string
  alt: string
  caption?: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  tags: string[]
  likes: string
  link?: string
  /** When true, Live App tap shows a coming-soon system alert instead of navigating. */
  comingSoon?: boolean
  github?: string
  instagram?: string
  youtube?: string
  gradient: string
  icon?: ProjectIcon
  media?: ProjectMedia
  notification?: ProjectNotification
  audiences?: AudienceId[]
}
