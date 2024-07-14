import { Uuid } from '@/src/shared/domain/uuid'

export type TaskView = {
  id: string
  title: string
  description: string
  finished_at: string | null
  project_id: string
}

export type TaskConstructorProps = {
  id?: Uuid
  title: string
  description: string
  project_id: Uuid
}

export class Task {
  id?: Uuid
  title: string
  description: string
  finished_at?: Date
  project_id: Uuid

  constructor(props: TaskConstructorProps) {
    this.id = props.id ?? new Uuid()
    this.title = props.title
    this.description = props.description
    this.project_id = props.project_id
  }

  finish() {
    this.finished_at = new Date()
  }

  toJSON(): TaskView {
    let finished_at = null
    if (this.finished_at) {
      const year = this.finished_at.getFullYear()
      const month = String(this.finished_at.getMonth() + 1).padStart(2, '0')
      const day = String(this.finished_at.getDate()).padStart(2, '0')
      finished_at = `${year}-${month}-${day}`
    }

    return {
      id: this.id.toString(),
      title: this.title,
      description: this.description,
      finished_at,
      project_id: this.project_id.toString(),
    }
  }
}
