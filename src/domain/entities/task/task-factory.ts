import { Uuid } from '@/src/shared/domain/uuid'
import { Task, TaskConstructorProps } from './task'
import { makeProject } from '../project/project-factory'

export const makeTaskProps = (): TaskConstructorProps => {
  const project = makeProject()
  return {
    id: new Uuid(),
    description: 'any-description',
    title: 'any-title',
    project_id: project.id,
  }
}

export const makeTask = (override?: Partial<Task>): Task => {
  return new Task({
    ...makeTaskProps(),
    ...override,
  })
}
