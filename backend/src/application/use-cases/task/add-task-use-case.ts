import { Task } from '@/src/domain/entities/task/task'
import { AddTask, AddTaskModel } from '@/src/domain/use-cases/task/create-task'
import { Uuid } from '@/src/shared/domain/uuid'
import { ProjectRepository } from '../../protocols/repositories/project-repository'
import { TaskRepository } from '../../protocols/repositories/task-repository'

export class AddTaskUseCase implements AddTask {
  constructor(
    private readonly projectRepository: ProjectRepository,
    private readonly taskRepository: TaskRepository
  ) {}

  async add(data: AddTaskModel): Promise<Task | null> {
    const project = await this.projectRepository.findById(
      data.project_id.toString()
    )

    if (!project) {
      const PROJECT_NOT_FOUND = null
      return PROJECT_NOT_FOUND
    }

    const task = new Task({
      description: data.description,
      project_id: new Uuid(data.project_id),
      title: data.title,
    })

    await this.taskRepository.add(task)
    return task
  }
}
