import { Project } from "@/src/domain/entities/project/project"
import { Uuid } from "@/src/shared/domain/uuid"
import { Project as PrismaProjectEntity } from "@prisma/client"

export class PrismaProjectMapper {
  static toPrisma(project: Project): PrismaProjectEntity {
    return {
      id: project.id.toString(),
      description: project.description,
      name: project.name,
      started_at: project.started_at
    }
  }
  static toDomain(prismaProjectEntity: PrismaProjectEntity): Project{
    return new Project({
      id: new Uuid(prismaProjectEntity.id),
      description: prismaProjectEntity.description,
      name: prismaProjectEntity.name,
      started_at: prismaProjectEntity.started_at,
    })
  }
}