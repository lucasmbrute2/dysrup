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
}