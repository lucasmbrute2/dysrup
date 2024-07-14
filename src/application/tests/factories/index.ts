import { AddProjectModel } from '@/src/domain/use-cases/project/create-project'
import { ProjectRepository } from '../../protocols/repositories/project-repository'
import { Project } from '@/src/domain/entities/project/project'
import { TaskRepository } from '../../protocols/repositories/task-repository'
import { Task } from '@/src/domain/entities/task/task'
import { AddTaskModel } from '@/src/domain/use-cases/task/create-task'
import { Uuid } from '@/src/shared/domain/uuid'

export const makeProjectModel = (): AddProjectModel => ({
  name: 'any-name',
  description: 'any-description',
  started_at: new Date(),
})

export const makeTaskModel = (projectId: string): AddTaskModel => ({
  description: 'any-description',
  project_id: projectId,
  title: 'any-title',
})

export const makeProjectRepositoryStub = (): ProjectRepository => {
  class ProjectRepositoryStub implements ProjectRepository {
    async findById(id: string): Promise<Project | null> {
      return Promise.resolve(null)
    }
    async fetch(): Promise<Project[]> {
      return Promise.resolve(null)
    }

    async edit(id: string, data: Project): Promise<void> {
      return Promise.resolve(null)
    }
    async add(project: Project): Promise<Project> {
      return Promise.resolve(null)
    }
  }

  return new ProjectRepositoryStub()
}

export const makeTaskRepositoryStub = (): TaskRepository => {
  class TaskRepositoryStub implements TaskRepository {
    async findById(id: string): Promise<Task | null> {
      return Promise.resolve(null)
    }
    async add(task: Task): Promise<Task> {
      return Promise.resolve(null)
    }
    async fetchByProjectId(id: string): Promise<Task[]> {
      return Promise.resolve(null)
    }
    async erase(id: string): Promise<void> {
      Promise.resolve(null)
    }
    async edit(id: string, data: Task): Promise<void> {
      Promise.resolve(null)
    }
  }

  return new TaskRepositoryStub()
}
