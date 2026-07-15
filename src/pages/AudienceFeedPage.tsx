import { Navigate, useParams } from 'react-router-dom'
import { audiences, isAudienceId } from '../data/audiences'
import { ScrollFeed } from '../components/feed/ScrollFeed'

export function AudienceFeedPage() {
  const { audienceId } = useParams()

  if (!audienceId || !isAudienceId(audienceId)) {
    return <Navigate to="/" replace />
  }

  return <ScrollFeed audience={audiences[audienceId]} />
}
