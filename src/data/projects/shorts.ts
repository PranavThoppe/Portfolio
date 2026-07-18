import type { Project } from '../../types/project'

export const shorts: Project = {
  id: 'shorts',
  title: 'YouTube Shorts Automation',
  tagline: 'AI that turns a story prompt into a YouTube Short.',
  description:
    'An automation pipeline that takes a story idea and ships a finished Short: voiceover, subtitles, gameplay overlay, and upload. Orchestrated with n8n, processed in Python/FFmpeg, and powered by Groq, Whisper, and ElevenLabs.',
  tags: ['n8n', 'Python', 'FFmpeg', 'AI Automation', 'YouTube'],
  likes: '12.1K',
  youtube: 'https://www.youtube.com/@SupermanShorts-l3g',
  github: 'https://github.com/PranavThoppe/ShortformContentAutomation',
  gradient: 'linear-gradient(135deg, #0f0f0f 0%, #FF0000 160%)',
  icon: {
    src: '/apps/shorts/icon.svg',
    alt: 'YouTube logo',
  },
  notification: {
    appName: 'YouTube',
    appIcon: '/apps/shorts/icon.svg',
    title: 'Short published',
    body: 'Superman Shorts just dropped another AI-edited clip.',
    delayMs: 1200,
    byAudience: {
      recruiter: {
        title: 'Pipeline shipped',
        body: 'Prompt → voice → edit → upload. Fully automated.',
      },
      engineer: {
        title: 'n8n job succeeded',
        body: 'Groq + Whisper + FFmpeg. No humans harmed.',
      },
      friend: {
        title: 'New Short dropped',
        body: 'Yes, the AI made the whole thing. Again.',
      },
      classmate: {
        title: 'Content machine online',
        body: 'Side project that actually posts.',
      },
    },
  },
}
