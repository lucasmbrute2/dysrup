import {
  AddProject,
  AddProjectModel,
} from '@/src/domain/use-cases/project/create-project'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { created, serverError } from '../helpers/http-helper'

export class AddProjectController implements Controller {
  constructor(private readonly addProject: AddProject) {}
  async handle(
    httpRequest?: HttpRequest<AddProjectModel>
  ): Promise<HttpResponse<AddProjectModel>> {
    try {
      const { description, name, started_at, tasks } = httpRequest.body
      const project = await this.addProject.add({
        description,
        name,
        started_at,
        tasks,
      })

      return created(project.toJSON())
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
