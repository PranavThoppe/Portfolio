import type { AudienceId } from '../types/audience'
import type { ProjectNotification } from '../types/project'

export function resolveNotification(
  notification: ProjectNotification,
  audienceId: AudienceId,
): Omit<ProjectNotification, 'byAudience'> {
  const override = notification.byAudience?.[audienceId]

  return {
    appName: notification.appName,
    appIcon: notification.appIcon,
    title: override?.title ?? notification.title,
    body: override?.body ?? notification.body,
    delayMs: override?.delayMs ?? notification.delayMs,
  }
}
