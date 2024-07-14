export interface DeleteTask {
  erase(projectId: string): Promise<void>
}
