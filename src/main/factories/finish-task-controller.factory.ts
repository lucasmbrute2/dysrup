import { FinishTaskUseCase } from '@/src/application/use-cases/task/finish-task-use-case'
import { PrismaTaskRepository } from '@/src/infra/db/prisma/task-repository'
import { FinishTaskController } from '@/src/presentation/controllers/finish-task-controller'
import { Controller } from '@/src/presentation/protocols/controller'

export const makeFinishTaskController = (): Controller => {
  const taskRepository = new PrismaTaskRepository()
  const finishTaskUseCase = new FinishTaskUseCase(taskRepository)
  return new FinishTaskController(finishTaskUseCase)
}
