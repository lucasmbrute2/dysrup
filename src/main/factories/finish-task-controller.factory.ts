import { InMemoryTaskRepository } from '@/src/application/protocols/repositories/in-memory/in-memory-task-repository'
import { FinishTaskUseCase } from '@/src/application/use-cases/task/finish-task-use-case'
import { FinishTaskController } from '@/src/presentation/controllers/finish-task-controller'
import { Controller } from '@/src/presentation/protocols/controller'

export const makeFinishTaskController = (): Controller => {
  const taskRepository = new InMemoryTaskRepository() //TODO change to impl
  const finishTaskUseCase = new FinishTaskUseCase(taskRepository)
  return new FinishTaskController(finishTaskUseCase)
}
