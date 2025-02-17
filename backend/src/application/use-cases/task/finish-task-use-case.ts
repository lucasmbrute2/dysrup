import { Task } from '@/src/domain/entities/task/task'
import { FinishTask } from '@/src/domain/use-cases/task/finish-task'
import { TaskRepository } from '../../protocols/repositories/task-repository'

export class FinishTaskUseCase implements FinishTask {
  constructor(private readonly taskRepository: TaskRepository) {}

  async finish(id: string): Promise<Task | null> {
    const task = await this.taskRepository.findById(id)

    if (!task) {
      const TASK_NOT_FOUND = null
      return TASK_NOT_FOUND
    }
    if (task.finished_at) {
      return task
    }

    task.finish()
    await this.taskRepository.edit(id, task)
    return task
  }
}
