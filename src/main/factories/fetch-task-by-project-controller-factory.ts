import { InMemoryTaskRepository } from '@/src/application/protocols/repositories/in-memory/in-memory-task-repository'
import { FetchTaskUseCase } from '@/src/application/use-cases/task/fetch-task-use-case'
import { FetchTaskByProjectIdController } from '@/src/presentation/controllers/fetch-task-controller'
import { Controller } from '@/src/presentation/protocols/controller'

export const makeFetchTaskByProjectController = (): Controller => {
  const taskRepository = new InMemoryTaskRepository() //TODO change to impl
  const fetchTaskUseCase = new FetchTaskUseCase(taskRepository)
  return new FetchTaskByProjectIdController(fetchTaskUseCase)
}
