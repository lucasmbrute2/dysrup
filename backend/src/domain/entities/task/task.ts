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
  finished_at?: Date
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
    this.finished_at = props.finished_at ?? null
  }

  finish() {
    this.finished_at = new Date()
  }

  toJSON(): TaskView {
    let finished_at = null
    if (this.finished_at) {
      finished_at = this.makeEntityFormatDate(this.finished_at)
    }

    return {
      id: this.id.toString(),
      title: this.title,
      description: this.description,
      finished_at,
      project_id: this.project_id.toString(),
    }
  }

  private makeEntityFormatDate(date: Date): string {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${day}-${month}-${year}`
  }
}
