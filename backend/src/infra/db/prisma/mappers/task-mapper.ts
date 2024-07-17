import { Task } from '@/src/domain/entities/task/task'
import { Uuid } from '@/src/shared/domain/uuid'
import { Task as PrismaTaskEntity } from '@prisma/client'

export class PrismaTaskMapper {
  static toPrisma(task: Task): PrismaTaskEntity {
    return {
      id: task.id.toString(),
      description: task.description,
      title: task.title,
      project_id: task.project_id.toString(),
      finished_at: task.finished_at,
    }
  }

  static toDomain(prismaTaskEntity: PrismaTaskEntity): Task {
    return new Task({
      id: new Uuid(prismaTaskEntity.id),
      description: prismaTaskEntity.description,
      title: prismaTaskEntity.title,
      project_id: new Uuid(prismaTaskEntity.project_id),
      finished_at: prismaTaskEntity.finished_at,
    })
  }
}
