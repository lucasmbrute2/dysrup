import { Task } from './task'
import { makeTask } from './task-factory'

type Sut = {
  sut: Task
}

const makeSut = (): Sut => {
  return {
    sut: makeTask(),
  }
}

describe('Task entity', () => {
  it('should be able to instance a Task', () => {
    const { sut } = makeSut()

    expect(sut).toBeInstanceOf(Task)
    expect(sut).toMatchObject(
      makeTask({
        id: sut.id,
        project_id: sut.project_id,
      })
    )
  })

  it('should be able to finish a project', () => {
    const { sut } = makeSut()
    sut.finish()

    expect(sut.finished_at).toBeDefined()
    expect(sut.finished_at).toBeInstanceOf(Date)
  })
})
