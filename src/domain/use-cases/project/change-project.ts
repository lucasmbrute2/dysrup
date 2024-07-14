export type ChangeProjectModel = {
  name?: string
  description?: string
  started_at?: Date
}

export interface ChangeProject {
  edit(project: ChangeProjectModel): Promise<void>
}
