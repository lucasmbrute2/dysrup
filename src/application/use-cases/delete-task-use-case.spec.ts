import { DeleteTask } from '@/src/domain/use-cases/task/delete-task'
import { TaskRepository } from '../protocols/repositories/task-repository'
import { DeleteTaskUseCase } from './delete-task-use-case'
import { InMemoryTaskRepository } from '../protocols/repositories/in-memory/in-memory-task-repository'
import { makeTask } from '@/src/domain/entities/task/task-factory'

type Sut = {
  sut: DeleteTask
  inMemoryTaskRepository: TaskRepository
}

const makeSut = (): Sut => {
  const inMemoryTaskRepository = new InMemoryTaskRepository()
  const sut = new DeleteTaskUseCase(inMemoryTaskRepository)

  return {
    sut,
    inMemoryTaskRepository,
  }
}
describe('DeleteTask use case', () => {
  it('should not call taskRepository.erase if did not find Task', async () => {
    const { inMemoryTaskRepository, sut } = makeSut()
    const eraseSpy = vi.spyOn(inMemoryTaskRepository, 'erase')

    await sut.erase('any-id')
    expect(eraseSpy).toHaveBeenCalledTimes(0)
    expect(eraseSpy).not.toHaveBeenCalled()
  })

  it('should call taskRepository with correct Task ID', async () => {
    const { inMemoryTaskRepository, sut } = makeSut()
    const eraseSpy = vi.spyOn(inMemoryTaskRepository, 'erase')

    const task = makeTask()
    await inMemoryTaskRepository.add(task)
    await sut.erase(task.id.toString())

    expect(eraseSpy).toHaveBeenCalledWith(task.id.toString())
  })

  it('should erase Task on success', async () => {
    const { inMemoryTaskRepository, sut } = makeSut()
    const task = makeTask()
    await inMemoryTaskRepository.add(task)
    await sut.erase(task.id.toString())

    const taskStillOnRepository = await inMemoryTaskRepository.findById(
      task.id.toString()
    )
    expect(taskStillOnRepository).toBeNull()
  })
})
