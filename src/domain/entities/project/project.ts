import { Uuid } from '@/src/shared/domain/uuid'
import { Task, TaskView } from '../task/task'

export type ProjectView = {
  id: string
  name: string
  description: string
  started_at: string
  tasks: TaskView[]
}

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

  toJSON(): ProjectView {
    let started_at = null
    if (this.started_at) {
      const year = this.started_at.getFullYear()
      const month = String(this.started_at.getMonth() + 1).padStart(2, '0')
      const day = String(this.started_at.getDate()).padStart(2, '0')
      started_at = `${year}-${month}-${day}`
    }

    return {
      id: this.id.toString(),
      name: this.name,
      description: this.description,
      started_at,
      tasks: this.tasks?.map((task) => task.toJSON()) ?? [],
    }
  }
}
