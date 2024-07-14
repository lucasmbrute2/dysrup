import { Task } from '../../entities/task/task'

export interface FetchTaskByProjectId {
  fetch(projectId: string): Promise<Task[]>
}
