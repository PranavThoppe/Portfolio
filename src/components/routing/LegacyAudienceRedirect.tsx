import { Navigate, useSearchParams } from 'react-router-dom'
import { getAudiencePath } from '../../lib/routes'
import { getAudienceFromUrl } from '../../lib/storage'

export function LegacyAudienceRedirect() {
  const [searchParams] = useSearchParams()
  const audience = getAudienceFromUrl(`?${searchParams.toString()}`)

  if (!audience) return null

  return <Navigate to={getAudiencePath(audience)} replace />
}
