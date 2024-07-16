import { Router } from 'express'
import { adaptRoute } from '../adapters/express-routes-adapters'
import { makeAddTaskController } from '../factories/add-task-controller-factory'
import { makeDeleteTaskController } from '../factories/delete-task-controller-factory'
import { makeFinishTaskController } from '../factories/finish-task-controller.factory'
import { makeFetchTaskByProjectController } from '../factories/fetch-task-by-project-controller-factory'

const taskRouter = Router()

taskRouter.post('/:project_id', adaptRoute(makeAddTaskController()))
taskRouter.delete('/:id', adaptRoute(makeDeleteTaskController()))
taskRouter.put('/finish/:id', adaptRoute(makeFinishTaskController()))
taskRouter.get('/:project_id', adaptRoute(makeFetchTaskByProjectController()))

export { taskRouter }
