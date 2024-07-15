import { InMemoryProjectRepository } from '@/src/application/protocols/repositories/in-memory/in-memory-project-repository'
import { InMemoryTaskRepository } from '@/src/application/protocols/repositories/in-memory/in-memory-task-repository'
import { AddTaskUseCase } from '@/src/application/use-cases/task/add-task-use-case'
import { AddTaskController } from '@/src/presentation/controllers/add-task-controller'
import { Controller } from '@/src/presentation/protocols/controller'

export const makeAddTaskController = (): Controller => {
  const projectRepository = new InMemoryProjectRepository() //TODO change to impl
  const taskRepository = new InMemoryTaskRepository() //TODO change to impl
  const addTaskUseCase = new AddTaskUseCase(projectRepository, taskRepository)
  return new AddTaskController(addTaskUseCase)
}
