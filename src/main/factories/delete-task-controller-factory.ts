import { InMemoryTaskRepository } from '@/src/application/protocols/repositories/in-memory/in-memory-task-repository'
import { DeleteTaskUseCase } from '@/src/application/use-cases/task/delete-task-use-case'
import { PrismaTaskRepository } from '@/src/infra/db/prisma/task-repository'
import { DeleteTaskController } from '@/src/presentation/controllers/delete-task-controller'
import { Controller } from '@/src/presentation/protocols/controller'

export const makeDeleteTaskController = (): Controller => {
  const taskRepository = new PrismaTaskRepository()
  const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository)
  return new DeleteTaskController(deleteTaskUseCase)
}
