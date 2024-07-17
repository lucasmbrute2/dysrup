import { FetchProjectUseCase } from '@/src/application/use-cases/project/fetch-project-use-case'
import { PrismaProjectRepository } from '@/src/infra/db/prisma/project-repository'
import { FetchProjectController } from '@/src/presentation/controllers/fetch-project-controller'
import { Controller } from '@/src/presentation/protocols/controller'

export const makeFetchProjectController = (): Controller => {
  const projectRepository = new PrismaProjectRepository()
  const fetchProjectUseCase = new FetchProjectUseCase(projectRepository)
  return new FetchProjectController(fetchProjectUseCase)
}
