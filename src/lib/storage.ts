import { defaultAudienceId, isAudienceId } from '../data/audiences'
import type { AudienceId } from '../types/audience'

const audienceStorageKey = 'portfolio-audience'

export function getAudienceFromUrl(search = window.location.search): AudienceId | null {
  const params = new URLSearchParams(search)
  const audience = params.get('as')
  return isAudienceId(audience) ? audience : null
}

export function getStoredAudience(): AudienceId | null {
  const audience = window.localStorage.getItem(audienceStorageKey)
  return isAudienceId(audience) ? audience : null
}

export function saveAudience(audience: AudienceId) {
  window.localStorage.setItem(audienceStorageKey, audience)
}

export function clearStoredAudience() {
  window.localStorage.removeItem(audienceStorageKey)
}

export function getFallbackAudience(): AudienceId {
  return defaultAudienceId
}
