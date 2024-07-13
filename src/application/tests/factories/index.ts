import { AddProjectModel } from '@/src/domain/use-cases/project/create-project'
import { ProjectRepository } from '../../protocols/repositories/project-repository'
import { Project } from '@/src/domain/entities/project/project'

export const makeProjectModel = (): AddProjectModel => ({
  name: 'any-name',
  description: 'any-description',
  started_at: new Date(),
})

export const makeProjectRepositoryStub = (): ProjectRepository => {
  class ProjectRepositoryStub implements ProjectRepository {
    async fetch(): Promise<Project[]> {
      return Promise.resolve(null)
    }

    async edit(id: string, data: Project): Promise<void> {
      return Promise.resolve(null)
    }
    async add(project: Project): Promise<Project> {
      return Promise.resolve(null)
    }
  }

  return new ProjectRepositoryStub()
}
