import { ProjectRepository } from "@/src/application/protocols/repositories/project-repository";
import { Project } from "@/src/domain/entities/project/project";
import { prisma as prismaClient } from "@/src/main/server"
import { PrismaProjectMapper } from "./mappers/project-mapper";

export class PrismaProjectRepository implements ProjectRepository {
  private readonly prisma = prismaClient.project

  async fetch(): Promise<Project[]> {
    const projects = await this.prisma.findMany()  
    return projects.map(PrismaProjectMapper.toDomain)
  }

  async edit(id: string, data: Project): Promise<void> {
    await this.prisma.update({
      where: {
        id
      },
      data: PrismaProjectMapper.toPrisma(data)
    })
  }
  async add(project: Project): Promise<Project> {
    const createdProject = await this.prisma.create({
      data: PrismaProjectMapper.toPrisma(project)
    })

    return PrismaProjectMapper.toDomain(createdProject)
  }
  
  async findById(id: string): Promise<Project | null> {
    const project = await this.prisma.findUnique({
      where: {
        id
      }
    })

    return PrismaProjectMapper.toDomain(project)
  }

}