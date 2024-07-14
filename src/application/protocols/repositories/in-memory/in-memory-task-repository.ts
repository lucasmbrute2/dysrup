import { Task } from '@/src/domain/entities/task/task'
import { TaskRepository } from '../task-repository'

export class InMemoryTaskRepository implements TaskRepository {
  public tasks: Task[] = []

  async add(task: Task): Promise<Task> {
    this.tasks.push(task)
    return task
  }

  async findById(id: string): Promise<Task | null> {
    const task = this.tasks.find((task) => task.id.toString() === id)
    if (!task) return null

    return task
  }

  async fetchByProjectId(id: string): Promise<Task[]> {
    return this.tasks.filter((task) => task.project_id.toString() === id)
  }

  async erase(id: string): Promise<void> {
    const taskIndex = this.tasks.findIndex((task) => task.id.toString() === id)
    this.tasks.splice(taskIndex, 1)
  }

  async edit(id: string, data: Task): Promise<void> {
    const taskIndex = this.tasks.findIndex((task) => task.id.toString() === id)
    this.tasks[taskIndex] = data
  }
}
