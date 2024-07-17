import { TaskRepository } from '@/src/application/protocols/repositories/task-repository'
import { Task } from '@/src/domain/entities/task/task'
import { PrismaTaskMapper } from './mappers/task-mapper'
import { PrismaClient } from '@prisma/client'

export class PrismaTaskRepository implements TaskRepository {
  private readonly prisma = new PrismaClient().task

  async add(data: Task): Promise<Task> {
    const task = await this.prisma.create({
      data: PrismaTaskMapper.toPrisma(data),
    })

    return PrismaTaskMapper.toDomain(task)
  }
  async findById(id: string): Promise<Task | null> {
    const task = await this.prisma.findUnique({
      where: {
        id: id,
      },
    })
    if (!task) return null
    return PrismaTaskMapper.toDomain(task)
  }

  async fetchByProjectId(id: string): Promise<Task[]> {
    const tasks =
      (await this.prisma.findMany({
        where: {
          project_id: id,
        },
      })) ?? []

    return tasks.map(PrismaTaskMapper.toDomain)
  }

  async erase(id: string): Promise<void> {
    await this.prisma.delete({
      where: {
        id,
      },
    })
  }

  async edit(id: string, data: Task): Promise<void> {
    await this.prisma.update({
      where: {
        id,
      },
      data: PrismaTaskMapper.toPrisma(data),
    })
  }
}
