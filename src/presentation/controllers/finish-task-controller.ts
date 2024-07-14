import { FinishTask } from '@/src/domain/use-cases/task/finish-task'
import { badRequest, ok, serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { BadRequestError } from '../errors/bad-request-error'

type FinishTaskParams = {
  project_id: string
}

export class FinishTaskController implements Controller {
  constructor(private readonly finishTask: FinishTask) {}

  async handle(
    httpRequest: HttpRequest<any, FinishTaskParams>
  ): Promise<HttpResponse> {
    try {
      const { project_id } = httpRequest.params
      const finishedTask = await this.finishTask.finish(project_id)
      if (!finishedTask)
        return badRequest(new BadRequestError('Task not found.'))

      return ok(finishedTask.toJSON())
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
