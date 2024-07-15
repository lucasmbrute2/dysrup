import { DeleteTask } from '@/src/domain/use-cases/task/delete-task'
import { serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

type DeleteTaskParams = {
  id: string
}

export class DeleteTaskController implements Controller {
  constructor(private readonly deleteTask: DeleteTask) {}

  async handle(
    httpRequest: HttpRequest<any, DeleteTaskParams>
  ): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      await this.deleteTask.erase(id)
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
