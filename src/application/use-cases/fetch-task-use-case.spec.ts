import { InMemoryTaskRepository } from '../protocols/repositories/in-memory/in-memory-task-repository'
import { FetchTaskUseCase } from './fetch-task-use-case'

type Sut = {
  sut: FetchTaskUseCase
  inMemoryTaskRepository: InMemoryTaskRepository
}

const makeSut = (): Sut => {
  const inMemoryTaskRepository = new InMemoryTaskRepository()
  const sut = new FetchTaskUseCase(inMemoryTaskRepository)

  return {
    sut,
    inMemoryTaskRepository,
  }
}

describe('FetchTask use case', () => {
  it('should call taskRepository with correct ID', async () => {
    const { sut, inMemoryTaskRepository } = makeSut()
    const fetchByProjectIdSpy = vi.spyOn(
      inMemoryTaskRepository,
      'fetchByProjectId'
    )

    await sut.fetchByProjectId('any-id')
    expect(fetchByProjectIdSpy).toHaveBeenCalledOnce()
    expect(fetchByProjectIdSpy).toHaveBeenCalledWith('any-id')
  })
})
