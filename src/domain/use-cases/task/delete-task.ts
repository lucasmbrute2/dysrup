export interface DeleteTask {
  erase(id: string): Promise<void>
}
