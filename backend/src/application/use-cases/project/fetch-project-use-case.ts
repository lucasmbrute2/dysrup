import { Project } from '@/src/domain/entities/project/project'
import { FetchProject } from '@/src/domain/use-cases/project/fetch-project'
import { ProjectRepository } from '../../protocols/repositories/project-repository'

export class FetchProjectUseCase implements FetchProject {
  constructor(private readonly projectRepository: ProjectRepository) {}
  async list(): Promise<Project[]> {
    return await this.projectRepository.fetch()
  }
}
