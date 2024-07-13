import { Project } from '@/src/domain/entities/project/project'
import { ProjectRepository } from '../project-repository'

export class InMemoryProjectRepository implements ProjectRepository {
  public projects: Project[] = []

  async fetch(): Promise<Project[]> {
    return this.projects
  }

  async edit(id: string, data: Project): Promise<void> {
    const projectIndex = this.projects.findIndex(
      (project) => project.id.toString() === id
    )
    this.projects[projectIndex] = data
  }

  async add(project: Project): Promise<Project> {
    this.projects.push(project)
    return project
  }
}
