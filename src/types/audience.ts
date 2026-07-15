export type AudienceId =
  | 'recruiter'
  | 'engineer'
  | 'friend'
  | 'curious'
  | 'classmate'
  | 'imessage-user'

export type ProjectSlideId = `project:${string}`
export type InterstitialSlideId = `interstitial:${string}`

export type SlideId =
  | 'hook'
  | 'intro'
  | 'skills'
  | 'resume'
  | 'contact'
  | 'easter-egg'
  | ProjectSlideId
  | InterstitialSlideId

export interface AudienceCopy {
  hook?: {
    eyebrow?: string
    title: string
    accent: string
    sub: string
    meta?: string[]
  }
  intro?: {
    bio?: string
    tagline?: string
  }
  skills?: {
    eyebrow?: string
    title?: string
    sub?: string
  }
  contact?: {
    title: string
    sub: string
  }
}

export interface AudienceProfile {
  id: AudienceId
  label: string
  subtitle: string
  slideOrder: SlideId[]
  copy: AudienceCopy
  showEasterEggs: boolean
}
