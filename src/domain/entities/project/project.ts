import { Uuid } from '@/src/shared/domain/uuid'
import { Task } from '../task/task'

export type ProjectConstructorProps = {
  id?: Uuid
  name: string
  description: string
  started_at?: Date
}

export class Project {
  id: Uuid
  name: string
  description: string
  started_at: Date
  tasks?: Task[]

  constructor(props: ProjectConstructorProps) {
    this.id = props.id ?? new Uuid()
    this.name = props.name
    this.description = props.description
    this.started_at = props.started_at
  }

  changeName(name: string) {
    this.name = name
  }

  changeDescription(description: string) {
    this.description = description
  }

  changeStartedAt(startedAt: Date) {
    this.started_at = startedAt
  }
}
