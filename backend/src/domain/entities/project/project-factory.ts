import { Uuid } from '@/src/shared/domain/uuid'
import { Project, ProjectConstructorProps } from './project'

export const makeProjectProps = (): ProjectConstructorProps => ({
  id: new Uuid(),
  name: 'any-name',
  description: 'any-description',
})

export const makeProject = (override?: Partial<Project>): Project => {
  return new Project({
    ...makeProjectProps(),
    ...override,
  })
}
