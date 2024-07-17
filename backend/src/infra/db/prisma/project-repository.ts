import { ProjectRepository } from '@/src/application/protocols/repositories/project-repository'
import { Project } from '@/src/domain/entities/project/project'
import { PrismaProjectMapper } from './mappers/project-mapper'
import { Prisma, PrismaClient } from '@prisma/client'

export type ProjectWithTask = Prisma.ProjectGetPayload<{
  include: { tasks: true }
}>

export class PrismaProjectRepository implements ProjectRepository {
  private readonly prisma = new PrismaClient().project

  async fetch(): Promise<Project[]> {
    const projects = await this.prisma.findMany({
      include: {
        tasks: true,
      },
    })
    return projects.map((project) =>
      PrismaProjectMapper.toDomainWithTasks(project)
    )
  }

  async edit(id: string, data: Project): Promise<void> {
    await this.prisma.update({
      where: {
        id,
      },
      data: PrismaProjectMapper.toPrisma(data),
    })
  }
  async add(project: Project): Promise<Project> {
    const createdProject = await this.prisma.create({
      data: PrismaProjectMapper.toPrisma(project),
    })

    return PrismaProjectMapper.toDomain(createdProject)
  }

  async findById(id: string): Promise<Project | null> {
    const project = await this.prisma.findUnique({
      where: {
        id,
      },
    })
    if (!project) return null
    return PrismaProjectMapper.toDomain(project)
  }
}
