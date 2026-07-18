import type { Project } from '../../types/project'

export const remind: Project = {
  id: 'remind',
  title: 'Re-mind',
  tagline: 'Reminders that sound like someone who knows you.',
  description:
    'Re-mind turns lightweight reminders into conversational nudges. It fits the portfolio concept perfectly because it can interrupt the feed like a notification from your future self.',
  tags: ['React Native', 'Notifications', 'UX Writing', 'Mobile'],
  likes: '18.6K',
  link: 'https://apps.apple.com/us/app/re-mind-7af78a/id6758965979',
  github: undefined,
  gradient: 'linear-gradient(135deg, #a78bfa 0%, #5b21b6 100%)',
  icon: {
    src: '/apps/remind/icon.png',
    alt: 'Re-mind app icon',
  },
  notification: {
    appName: 'Re-mind',
    appIcon: '/apps/remind/icon.png',
    title: 'Reminder',
    body: "You said you'd finish this portfolio. Suspiciously on brand.",
    delayMs: 1200,
    byAudience: {
      recruiter: {
        title: 'Interview prep',
        body: "You said you'd shortlist strong product builders.",
      },
      engineer: {
        title: 'TODO',
        body: "Refactor this portfolio later. Narrator: they didn't.",
      },
      friend: {
        title: 'Reminder',
        body: "Tell Pranav his jokes are mid. Or don't.",
      },
      classmate: {
        title: 'Reminder',
        body: "Office hours aren't the only way to ship.",
      },
      'imessage-user': {
        title: 'Reminder from future you',
        body: "Open Re-mind before you forget why you're here.",
      },
    },
  },
}
