import type { ReactNode } from 'react'
import type { SlideId } from './audience'

export interface FeedSlide {
  id: SlideId
  element: ReactNode
}
