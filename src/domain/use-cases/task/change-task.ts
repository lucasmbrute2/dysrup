export type ChangeTaskModel = {
  title?: string
  description?: string
  finished_at?: Date
}

export interface ChangeTask {
  edit(task: ChangeTaskModel): Promise<void>
}
