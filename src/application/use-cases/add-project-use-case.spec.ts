import { Project } from '@/src/domain/entities/project/project'
import { ProjectRepository } from '../protocols/repositories/project-repository'
import { makeProjectModel, makeProjectRepositoryStub } from '../tests/factories'
import { AddProjectUseCase } from './add-project-use-case'
import { makeProjectProps } from '@/src/domain/entities/project/project-factory'

type SutTypes = {
  sut: AddProjectUseCase
  projectRepositoryStub: ProjectRepository
}

const makeSut = (): SutTypes => {
  const projectRepositoryStub = makeProjectRepositoryStub()
  const addProjectUseCase = new AddProjectUseCase(projectRepositoryStub)

  return {
    sut: addProjectUseCase,
    projectRepositoryStub,
  }
}

describe('AddProject use case', () => {
  it('should call ProjectRepository.add with correct values', async () => {
    const { sut, projectRepositoryStub } = makeSut()
    const addSpy = vi.spyOn(projectRepositoryStub, 'add')
    const projectResponse = await sut.add(makeProjectModel())

    const project = new Project({
      ...makeProjectModel(),
      id: projectResponse.id,
    })
    expect(addSpy).toHaveBeenCalledWith(project)
  })

  it('should return Project on success', async () => {
    const { sut } = makeSut()

    const project = await sut.add(makeProjectProps())

    expect(project).toBeInstanceOf(Project)
    expect(project).toEqual(
      new Project({ ...makeProjectProps(), id: project?.id })
    )
  })
})
