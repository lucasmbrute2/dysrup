import { Task } from '@/src/domain/entities/task/task'
import { FetchTaskByProjectId } from '@/src/domain/use-cases/task/fetch-task-by-project-id'
import { TaskRepository } from '../protocols/repositories/task-repository'

export class FetchTaskUseCase implements FetchTaskByProjectId {
  constructor(private readonly taskRepository: TaskRepository) {}

  async fetchByProjectId(id: string): Promise<Task[]> {
    return await this.taskRepository.fetchByProjectId(id)
  }
}
