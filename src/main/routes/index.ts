import { Router } from 'express'
import { taskRouter } from './task-routes'
import { projectRouter } from './project-routes'

const route = Router()

route.use('/project', projectRouter)
route.use('/task', taskRouter)

export { route }
