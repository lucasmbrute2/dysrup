import { AddTask, AddTaskModel } from '@/src/domain/use-cases/task/create-task'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { TaskView } from '@/src/domain/entities/task/task'
import { badRequest, created, serverError } from '../helpers/http-helper'
import { BadRequestError } from '../errors/bad-request-error'

type AddTaskParams = {
  project_id: string
}

export class AddTaskController implements Controller {
  constructor(private readonly addTask: AddTask) {}

  async handle(
    httpRequest: HttpRequest<AddTaskModel, AddTaskParams>
  ): Promise<HttpResponse<TaskView>> {
    try {
      const { description, title } = httpRequest.body
      const { project_id } = httpRequest.params
      const task = await this.addTask.add({
        description,
        project_id,
        title,
      })

      if (!task) return badRequest(new BadRequestError('Project not found.'))

      return created(task.toJSON())
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
