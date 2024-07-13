import { makeProject } from '@/src/domain/entities/project/project-factory'
import { ProjectRepository } from '../protocols/repositories/project-repository'
import { FetchProjectUseCase } from './fetch-project-use-case'
import { InMemoryProjectRepository } from '../protocols/repositories/in-memory/in-memory-project-repository'
import { Project } from '@/src/domain/entities/project/project'

type Sut = {
  sut: FetchProjectUseCase
  projectRepositoryStub: ProjectRepository
}

const makeSut = (): Sut => {
  const projectRepositoryStub = new InMemoryProjectRepository()
  const fetchProjectUseCase = new FetchProjectUseCase(projectRepositoryStub)

  return {
    sut: fetchProjectUseCase,
    projectRepositoryStub,
  }
}

describe('FetchProject use case', () => {
  it('should call ProjectRepository.fetch', async () => {
    const { sut, projectRepositoryStub } = makeSut()
    const fetchSpy = vi.spyOn(projectRepositoryStub, 'fetch')
    await sut.list()

    expect(fetchSpy).toHaveBeenCalledOnce()
  })

  it('should return an array of Project on success', async () => {
    const { sut, projectRepositoryStub } = makeSut()
    const projectMock1 = makeProject()
    const projectMock2 = makeProject()

    await projectRepositoryStub.add(projectMock1)
    await projectRepositoryStub.add(projectMock2)

    const projects = await sut.list()

    expect(projects).toHaveLength(2)
    expect(projects[0]).toBeInstanceOf(Project)
    expect(projects[1]).toBeInstanceOf(Project)
  })
})
