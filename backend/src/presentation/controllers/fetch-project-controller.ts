import { FetchProject } from '@/src/domain/use-cases/project/fetch-project'
import { ok, serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpResponse } from '../protocols/http'

export class FetchProjectController implements Controller {
  constructor(private readonly fetchProject: FetchProject) {}

  async handle(): Promise<HttpResponse> {
    try {
      const projects = await this.fetchProject.list()
      return ok(projects.map((project) => project.toJSON()))
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
