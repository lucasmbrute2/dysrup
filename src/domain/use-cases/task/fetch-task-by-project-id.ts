import { Task } from '../../entities/task/task'

export interface FetchTaskByProjectId {
  fetchByProjectId(id: string): Promise<Task[]>
}
