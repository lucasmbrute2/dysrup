import { Uuid } from '@/src/shared/domain/uuid'
import { Task } from '../../entities/task/task'

export type AddTaskModel = {
  title: string
  description: string
  project_id: string
}

export interface AddTask {
  add(task: AddTaskModel): Promise<Task | null>
}
