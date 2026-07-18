import { linkup } from './linkup'
import { poker } from './poker'
import { remind } from './remind'
import { shorts } from './shorts'
import { toyotron } from './toyotron'
import type { Project } from '../../types/project'

export const projects = [linkup, poker, remind, shorts, toyotron]

export const projectsById: Record<string, Project> = Object.fromEntries(
  projects.map((project) => [project.id, project]),
)
