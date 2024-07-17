import { Project } from '../../entities/project/project'
import { Task } from '../../entities/task/task'

export type AddProjectModel = {
  name: string
  description: string
  started_at: Date
  tasks?: Task[]
}

export interface AddProject {
  add(project: AddProjectModel): Promise<Project | null>
}
