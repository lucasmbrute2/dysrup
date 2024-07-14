import { TaskRepository } from '../../protocols/repositories/task-repository'
import { makeTaskModel, makeTaskRepositoryStub } from '../../tests/factories'
import { AddTaskUseCase } from './add-task-use-case'
import { InMemoryProjectRepository } from '../../protocols/repositories/in-memory/in-memory-project-repository'
import { makeProject } from '@/src/domain/entities/project/project-factory'
import { makeTask } from '@/src/domain/entities/task/task-factory'
import { Task } from '@/src/domain/entities/task/task'

type Sut = {
  sut: AddTaskUseCase
  taskRepositoryStub: TaskRepository
  inMemoryProjectRepository: InMemoryProjectRepository
}

const makeSut = (): Sut => {
  const inMemoryProjectRepository = new InMemoryProjectRepository()
  const taskRepositoryStub = makeTaskRepositoryStub()
  const addTaskToUseCase = new AddTaskUseCase(
    inMemoryProjectRepository,
    taskRepositoryStub
  )

  return {
    sut: addTaskToUseCase,
    taskRepositoryStub,
    inMemoryProjectRepository,
  }
}

describe('AddTask use case', () => {
  it('should throw if did not find any project by id', async () => {
    expect(async () => {
      const { sut, inMemoryProjectRepository } = makeSut()
      const project = makeProject()
      await inMemoryProjectRepository.add(project)

      return await sut.add({
        ...makeTaskModel(project.id.toString()),
        project_id: 'wrong-project-id',
      })
    }).rejects.toBeInstanceOf(Error)
  })

  it('should call projectRepository with correct ID', async () => {
    const { sut, inMemoryProjectRepository } = makeSut()
    const findByIdSpy = vi.spyOn(inMemoryProjectRepository, 'findById')

    const project = makeProject()
    await inMemoryProjectRepository.add(project)
    await sut.add(makeTaskModel(project.id.toString()))

    expect(findByIdSpy).toBeCalledWith(project.id.toString())
  })

  it('should call taskRepository with correct values', async () => {
    const { sut, inMemoryProjectRepository, taskRepositoryStub } = makeSut()
    const addSpy = vi.spyOn(taskRepositoryStub, 'add')

    const project = makeProject()
    await inMemoryProjectRepository.add(project)
    const task = await sut.add(makeTaskModel(project.id.toString()))

    expect(addSpy).toHaveBeenCalledOnce()
    expect(addSpy).toHaveBeenCalledWith(
      makeTask({
        project_id: project.id,
        id: task.id,
      })
    )
  })

  it('should return a task on success', async () => {
    const { sut, inMemoryProjectRepository } = makeSut()

    const project = makeProject()
    await inMemoryProjectRepository.add(project)

    const task = await sut.add(makeTaskModel(project.id.toString()))

    expect(task).toBeInstanceOf(Task)
  })
})
