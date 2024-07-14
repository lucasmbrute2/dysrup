import { TaskRepository } from '../protocols/repositories/task-repository'
import { Task } from '@/src/domain/entities/task/task'
import { FinishTask } from '@/src/domain/use-cases/task/finish-task'

export class FinishTaskUseCase implements FinishTask {
  constructor(private readonly taskRepository: TaskRepository) {}

  async finish(id: string): Promise<Task | null> {
    const task = await this.taskRepository.findById(id)

    if (!task) {
      const TASK_NOT_FOUND = null
      return TASK_NOT_FOUND
    }

    task.finish()
    await this.taskRepository.edit(id, task)
    return task
  }
}
