import { InMemoryProjectRepository } from '@/src/application/protocols/repositories/in-memory/in-memory-project-repository'
import { FetchProjectUseCase } from '@/src/application/use-cases/project/fetch-project-use-case'
import { FetchProjectController } from '@/src/presentation/controllers/fetch-project-controller'
import { Controller } from '@/src/presentation/protocols/controller'

export const makeFetchProjectController = (): Controller => {
  const projectRepository = new InMemoryProjectRepository() //TODO change to impl
  const fetchProjectUseCase = new FetchProjectUseCase(projectRepository)
  return new FetchProjectController(fetchProjectUseCase)
}
