import { projects } from './projects'
import type { Project } from '../types/project'

export interface PortfolioData {
  name: string
  handle: string
  role: string
  tagline: string
  bio: string
  avatar: string
  location: string
  email: string
  github: string
  linkedin: string
  projects: Project[]
  skills: string[]
}

export const portfolio: PortfolioData = {
  name: 'Your Name',
  handle: '@yourname',
  role: 'Software Engineer',
  tagline: 'I build things for the internet.',
  bio: 'Full-stack developer who turns caffeine into code. Previously shipped products used by thousands. Currently looking for my next challenge.',
  avatar: '👤',
  location: 'San Francisco, CA',
  email: 'hello@yourname.dev',
  github: 'https://github.com/yourname',
  linkedin: 'https://www.linkedin.com/in/pranav-thoppe/',
  projects,
  skills: [
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'PostgreSQL',
    'AWS',
    'Docker',
    'System Design',
  ],
}
