import { Task } from '../../entities/task/task'

export interface FinishTask {
  finish(projectId: string): Promise<Task | null>
}
