import type { Project } from '../../types/project'

export const linkup: Project = {
  id: 'linkup',
  title: 'Linkup',
  tagline: 'An iMessage app for making plans before the group chat dies.',
  description:
    'Linkup helps friends turn vague "we should hang soon" energy into actual plans inside iMessage. The slide is written to feel like the app is interrupting the portfolio in real time.',
  tags: ['iMessage', 'Swift', 'Social', 'Product Design'],
  likes: '14.2K',
  link: 'https://apps.apple.com/us/app/linkup-in-imessage/id6762589212',
  instagram: 'https://www.instagram.com/linkup.chat/',
  gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1f2937 100%)',
  icon: {
    src: '/apps/linkup/icon.png',
    alt: 'Linkup app icon',
  },
  notification: {
    appName: 'Linkup',
    appIcon: '/apps/linkup/icon.png',
    title: '3 friends are waiting',
    body: 'Pick a time before the chat loses momentum.',
    delayMs: 1200,
  },
}
