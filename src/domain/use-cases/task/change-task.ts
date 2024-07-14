import { Task } from '../../entities/task/task'

export type ChangeTaskModel = {
  title?: string
  description?: string
  finished_at?: Date
}

export interface ChangeTask {
  edit(id: string, data: ChangeTaskModel): Promise<Task | null>
}
