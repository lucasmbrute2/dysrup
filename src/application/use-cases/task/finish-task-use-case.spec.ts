import { makeTask } from '@/src/domain/entities/task/task-factory'
import { Task } from '@/src/domain/entities/task/task'
import { FinishTaskUseCase } from './finish-task-use-case'
import { TaskRepository } from '../../protocols/repositories/task-repository'
import { InMemoryTaskRepository } from '../../protocols/repositories/in-memory/in-memory-task-repository'

type Sut = {
  sut: FinishTaskUseCase
  inMemoryTaskRepository: TaskRepository
}

const makeSut = (): Sut => {
  const inMemoryTaskRepository = new InMemoryTaskRepository()
  const sut = new FinishTaskUseCase(inMemoryTaskRepository)

  return {
    sut,
    inMemoryTaskRepository,
  }
}

describe('FinishTask use case', () => {
  it('should return NULL if did not find Task by ID', async () => {
    const { sut, inMemoryTaskRepository } = makeSut()
    const findByIdSpy = vi.spyOn(inMemoryTaskRepository, 'edit')
    const response = await sut.finish('non-existent-id')

    expect(response).toBeNull()
    expect(findByIdSpy).not.toHaveBeenCalled()
  })

  it('should be able to finish a Task', async () => {
    const { sut, inMemoryTaskRepository } = makeSut()
    const task = makeTask()
    await inMemoryTaskRepository.add(task)
    await sut.finish(task.id.toString())

    expect(task.finished_at).toBeDefined()
    expect(task.finished_at).toBeInstanceOf(Date)
  })

  it('should call taskRepository.edit with correct values', async () => {
    const { inMemoryTaskRepository, sut } = makeSut()
    const editSpy = vi.spyOn(inMemoryTaskRepository, 'edit')

    const task = makeTask()
    await inMemoryTaskRepository.add(task)
    await sut.finish(task.id.toString())

    expect(editSpy).toHaveBeenCalledWith(task.id.toString(), task)
  })

  it('should return Task on success', async () => {
    const { inMemoryTaskRepository, sut } = makeSut()

    const task = makeTask()
    await inMemoryTaskRepository.add(task)
    const response = await sut.finish(task.id.toString())

    expect(response).toBeDefined()
    expect(response).toBeInstanceOf(Task)
    expect(response.finished_at).toBeDefined()
    expect(response.finished_at).toBeInstanceOf(Date)
  })
})
