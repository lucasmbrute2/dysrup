import { Task } from '../../entities/task/task'

export interface FinishTask {
  finish(id: string): Promise<Task | null>
}
