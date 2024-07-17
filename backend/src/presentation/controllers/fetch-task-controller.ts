import { FetchTaskByProjectId } from '@/src/domain/use-cases/task/fetch-task-by-project-id'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { ok, serverError } from '../helpers/http-helper'

type FetchTaskByProjectIdParams = {
  project_id: string
}

export class FetchTaskByProjectIdController implements Controller {
  constructor(private readonly fetchTaskUseCase: FetchTaskByProjectId) {}

  async handle(
    httpRequest: HttpRequest<any, FetchTaskByProjectIdParams>
  ): Promise<HttpResponse> {
    try {
      const { project_id } = httpRequest.params
      const tasks = await this.fetchTaskUseCase.fetch(project_id)

      return ok(tasks.map((task) => task.toJSON()))
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
