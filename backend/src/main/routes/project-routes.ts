import { Router } from 'express'
import { adaptRoute } from '../adapters/express-routes-adapters'
import { makeAddProjectController } from '../factories/add-project-controller-factory'
import { makeFetchProjectController } from '../factories/fetch-project-controller-factory'

const projectRouter = Router()

projectRouter.post('/', adaptRoute(makeAddProjectController()))
projectRouter.get('/', adaptRoute(makeFetchProjectController()))

export { projectRouter }
