import { Project } from '@/src/domain/entities/project/project'

export interface ChangeProjectRepository {
  edit(id: string, data: Partial<Project>): Promise<void>
}
