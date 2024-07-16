import { Router } from 'express'
import { taskRouter } from './task-routes'
import { projectRouter } from './project-routes'
import { validateProjectBody } from '../middlewares/valid-project-data'
import { validateTaskBody } from '../middlewares/valid-task-data'

const route = Router()

route.use('/project', validateProjectBody, projectRouter)
route.use('/task', validateTaskBody, taskRouter)

export { route }
