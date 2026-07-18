import type { Project } from '../../types/project'

export const poker: Project = {
  id: 'poker',
  title: 'Poker for iMessage',
  tagline: 'A poker table hiding inside the group chat.',
  description:
    'A turn-based Poker experience designed around iMessage constraints: quick decisions, visible stakes, and enough polish to make a chat game feel like a real product.',
  tags: ['iMessage', 'Game Design', 'Swift', 'State Machines'],
  likes: '21.8K',
  link: '#',
  comingSoon: true,
  instagram: 'https://www.instagram.com/poker.imsg/',
  gradient: 'linear-gradient(135deg, #1c1917 0%, #7f1d1d 100%)',
  icon: {
    src: '/apps/poker/icon.png',
    alt: 'Poker app icon',
  },
  notification: {
    appName: 'Poker',
    appIcon: '/apps/poker/icon.png',
    title: 'Your turn',
    body: 'Bluff in the chat or fold forever.',
    delayMs: 1200,
    byAudience: {
      recruiter: {
        title: 'Coming soon',
        body: 'Turn-based game designed for iMessage constraints.',
      },
      engineer: {
        title: 'State machine waiting',
        body: 'Next action required.',
      },
    },
  },
}
