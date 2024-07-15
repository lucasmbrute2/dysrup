import { FetchTaskUseCase } from '@/src/application/use-cases/task/fetch-task-use-case'
import { PrismaTaskRepository } from '@/src/infra/db/prisma/task-repository'
import { FetchTaskByProjectIdController } from '@/src/presentation/controllers/fetch-task-controller'
import { Controller } from '@/src/presentation/protocols/controller'

export const makeFetchTaskByProjectController = (): Controller => {
  const taskRepository = new PrismaTaskRepository()
  const fetchTaskUseCase = new FetchTaskUseCase(taskRepository)
  return new FetchTaskByProjectIdController(fetchTaskUseCase)
}
