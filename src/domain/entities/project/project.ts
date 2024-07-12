import { Uuid } from "@/src/shared/domain/uuid"

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

  constructor(props: ProjectConstructorProps){
    this.id = props.id ?? new Uuid()
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