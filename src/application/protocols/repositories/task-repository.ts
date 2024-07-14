import { Task } from '@/src/domain/entities/task/task'

export interface TaskRepository {
  add(data: Task): Promise<Task>
  fetchByProjectId(id: string): Promise<Task[]>
  erase(id: string): Promise<void>
  edit(id: string, data: Task): Promise<void>
}
