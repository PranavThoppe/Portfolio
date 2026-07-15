import { isAudienceId } from '../data/audiences'
import type { AudienceId } from '../types/audience'

export function getAudiencePath(audienceId: AudienceId) {
  return `/${audienceId}`
}

export function getAudienceIdFromPath(pathname: string): AudienceId | null {
  const segment = pathname.replace(/^\/+|\/+$/g, '').split('/')[0]
  return segment && isAudienceId(segment) ? segment : null
}
