import { DeleteTask } from '@/src/domain/use-cases/task/delete-task'
import { TaskRepository } from '../protocols/repositories/task-repository'

export class DeleteTaskUseCase implements DeleteTask {
  constructor(private readonly taskRepository: TaskRepository) {}

  async erase(id: string): Promise<void> {
    const task = await this.taskRepository.findById(id)
    if (!task) return

    await this.taskRepository.erase(id)
  }
}
