import { Task } from '../../entities/task/task'

export interface FetchTaskByProjectId {
  findByProjectId(id: string): Promise<Task[]>
}
