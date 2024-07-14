import { Uuid } from '@/src/shared/domain/uuid'
import { Task } from '../../entities/task/task'

export type AddTaskModel = {
  title: string
  description: string
  finished_at?: Date
  project_id: Uuid
}

export interface AddTask {
  add(task: AddTaskModel): Promise<Task | null>
}
