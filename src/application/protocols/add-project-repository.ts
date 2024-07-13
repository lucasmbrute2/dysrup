import { Project } from '@/src/domain/entities/project/project'

export interface AddProjectRepository {
  add(project: Project): Promise<Project>
}
