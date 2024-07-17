import { Project } from '@/src/domain/entities/project/project'
import {
  AddProject,
  AddProjectModel,
} from '@/src/domain/use-cases/project/create-project'
import { ProjectRepository } from '../../protocols/repositories/project-repository'

export class AddProjectUseCase implements AddProject {
  constructor(private readonly projectRepository: ProjectRepository) {}
  async add(data: AddProjectModel): Promise<Project | null> {
    const project = new Project(data)

    await this.projectRepository.add(project)

    return project
  }
}
