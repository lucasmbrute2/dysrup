import { Project } from '@/src/domain/entities/project/project'

export interface ProjectRepository {
  fetch(): Promise<Project[]>
  edit(id: string, data: Partial<Project>): Promise<void>
  add(project: Project): Promise<Project>
}
