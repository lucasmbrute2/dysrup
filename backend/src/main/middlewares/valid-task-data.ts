import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

const addTaskSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(200),
})

const validationByRoutePaths = {
  POST: {
    '/task': addTaskSchema,
  },
}

export function validateTaskBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const method = req.method
  if (method !== 'POST') return next()

  const path = req.baseUrl

  const validationMethod = validationByRoutePaths[method][path]
  if (!validationMethod) {
    return res.status(404).json({
      error: 'Not found.',
    })
  }

  const validation = validationMethod.safeParse(req.body)

  if (validation.success === false) {
    res.status(422).json({
      error: `${validation.error.issues.map((error) => {
        if (error.code === 'invalid_type') {
          return `Field '${error.path}' is required`
        }

        return error.message
      })}`,
    })
  }

  return next()
}
