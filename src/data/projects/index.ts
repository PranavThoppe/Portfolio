import { linkup } from './linkup'
import { poker } from './poker'
import { remind } from './remind'
import { toyotron } from './toyotron'
import type { Project } from '../../types/project'

export const projects = [linkup, poker, remind, toyotron]

export const projectsById: Record<string, Project> = Object.fromEntries(
  projects.map((project) => [project.id, project]),
)
