import type { AudienceId } from './audience'

export interface ProjectNotification {
  appName: string
  /** Emoji fallback, or image path like /apps/linkup/icon.png */
  appIcon: string
  title: string
  body: string
  delayMs?: number
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
  github?: string
  instagram?: string
  gradient: string
  icon?: ProjectIcon
  media?: ProjectMedia
  notification?: ProjectNotification
  audiences?: AudienceId[]
}
