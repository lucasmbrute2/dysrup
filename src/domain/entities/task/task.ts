import { Uuid } from '@/src/shared/domain/uuid'

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
}
