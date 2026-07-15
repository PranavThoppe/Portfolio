import type { Project } from '../../types/project'

export const toyotron: Project = {
  id: 'toyotron',
  title: 'Talk to Toyota',
  tagline: 'Talk to Toyota. Find your car by voice.',
  description:
    '2x first-place HackUTD 2025 project: a multi-agent Toyota shopping companion powered by NVIDIA Nemotron. Browse the catalog, compare trims, estimate financing, and book test drives through chat or voice.',
  tags: ['Next.js', 'NVIDIA Nemotron', 'Multi-Agent AI', 'Voice AI', 'HackUTD'],
  likes: '9.4K',
  link: 'https://talk-to-toyota.vercel.app',
  github: 'https://github.com/anbguye/hackutd-Toyota-Toyotron',
  gradient: 'linear-gradient(135deg, #EB0A1E 0%, #1a1a1a 100%)',
  icon: {
    src: '/apps/toyotron/icon.png',
    alt: 'Toyota logo',
  },
  notification: {
    appName: 'Toyotron',
    appIcon: '/apps/toyotron/icon.png',
    title: 'Voice Assistant',
    body: 'Tell me your budget and I will find your perfect Toyota.',
    delayMs: 1200,
  },
}
