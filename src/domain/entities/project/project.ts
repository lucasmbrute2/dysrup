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
  started_at: Date
  tasks?: Task[]
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
    this.started_at =
      props.started_at instanceof Date
        ? props.started_at
        : new Date(props.started_at)
    this.tasks = props.tasks ?? []
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
      started_at = this.makeEntityFormatDate(this.started_at)
    }

    return {
      id: this.id.toString(),
      name: this.name,
      description: this.description,
      started_at,
      tasks: this.tasks?.map((task) => task.toJSON()) ?? [],
    }
  }

  private makeEntityFormatDate(date: Date): string {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${day}-${month}-${year}`
  }
}
