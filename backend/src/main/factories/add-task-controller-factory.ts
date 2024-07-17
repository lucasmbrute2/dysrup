import { AddTaskUseCase } from '@/src/application/use-cases/task/add-task-use-case'
import { PrismaProjectRepository } from '@/src/infra/db/prisma/project-repository'
import { PrismaTaskRepository } from '@/src/infra/db/prisma/task-repository'
import { AddTaskController } from '@/src/presentation/controllers/add-task-controller'
import { Controller } from '@/src/presentation/protocols/controller'

export const makeAddTaskController = (): Controller => {
  const projectRepository = new PrismaProjectRepository()
  const taskRepository = new PrismaTaskRepository()
  const addTaskUseCase = new AddTaskUseCase(projectRepository, taskRepository)
  return new AddTaskController(addTaskUseCase)
}
