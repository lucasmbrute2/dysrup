import { AddProjectUseCase } from '@/src/application/use-cases/project/add-project-use-case'
import { PrismaProjectRepository } from '@/src/infra/db/prisma/project-repository'
import { AddProjectController } from '@/src/presentation/controllers/add-project-controller'
import { Controller } from '@/src/presentation/protocols/controller'

export const makeAddProjectController = (): Controller => {
  const projectRepository = new PrismaProjectRepository()
  const addProjectUseCase = new AddProjectUseCase(projectRepository)
  return new AddProjectController(addProjectUseCase)
}
