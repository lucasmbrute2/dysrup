import { Project } from '@/src/domain/entities/project/project'

export interface FetchProjectRepository {
  fetch(): Promise<Project[]>
}
