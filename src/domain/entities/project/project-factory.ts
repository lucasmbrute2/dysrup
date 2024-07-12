import { Uuid } from "@/src/shared/domain/uuid";
import { Project, ProjectConstructorProps } from "./project";

export const makeProjectProps = ():ProjectConstructorProps => ({
  id: new Uuid(),
  description: 'any-description',
  name: 'any-name'
})

export const makeProject = (override?: Partial<Project>): Project=> {
  return new Project({
    ...makeProjectProps(),
    ...override
  })
}