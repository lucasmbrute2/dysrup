import { InMemoryProjectRepository } from '@/src/application/protocols/repositories/in-memory/in-memory-project-repository'
import { AddProjectUseCase } from '@/src/application/use-cases/project/add-project-use-case'
import { AddProjectController } from '@/src/presentation/controllers/add-project-controller'
import { Controller } from '@/src/presentation/protocols/controller'

export const makeAddProjectController = (): Controller => {
  const projectRepository = new InMemoryProjectRepository() //TODO change to impl
  const addProjectUseCase = new AddProjectUseCase(projectRepository)
  return new AddProjectController(addProjectUseCase)
}
