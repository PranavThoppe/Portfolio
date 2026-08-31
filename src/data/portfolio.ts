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
  name: 'Pranav Thoppe',
  handle: '@thepranavt',
  role: 'Engineer',
  tagline: 'I build things for the internet.',
  bio: 'Full-stack engineer who turns coconut water into code. Previously shipped products used by thousands. Currently looking for my next challenge.',
  avatar: '👤',
  location: 'Dallas, TX',
  email: 'prvthoppe.work@gmail.com',
  github: 'https://github.com/pranavthoppe',
  linkedin: 'https://www.linkedin.com/in/pranav-thoppe/',
  projects,
  skills: [
    'Claude Code',
    'TypeScript',
    'React',
    'C++',
    'Swift',
    'Node.js',
    'Python',
    'PostgreSQL',
    'AWS',
    'System Design',
  ],
}
