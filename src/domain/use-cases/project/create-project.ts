import { Project } from '../../entities/project/project'

export type AddProjectModel = {
  name: string
  description: string
  started_at?: Date
  tasks?: any[]
}

export interface AddProject {
  add(project: AddProjectModel): Promise<Project | null>
}
