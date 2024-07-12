import { Project } from "./project"
import { makeProject } from "./project-factory"

type SutTypes = {
  sut: Project
}

const makeSut = (): SutTypes=> {
  return {
    sut: makeProject() 
  }
}

describe('Project entity', ()=> {
  it("should be able to instance a Project", ()=> {
    const { sut } = makeSut()

    expect(sut).toBeInstanceOf(Project)
    expect(sut).toMatchObject(makeProject({
      id: sut.id
    }))
  })

  it("should be able to change a Project name property", ()=> {
    const { sut } = makeSut()
    const newName = 'new-name'

    sut.changeName(newName)
    expect(sut.name).toBe(newName)
    expect(sut).toMatchObject(makeProject({
      name: newName,
      id: sut.id
    }))
  })

  it("should be able to change a Project description property", ()=> {
    const { sut } = makeSut()

    const newDescription = 'new-description'
    sut.changeDescription(newDescription)

    expect(sut.description).toBe(newDescription)
    expect(sut).toMatchObject(makeProject({
      description: newDescription,
      id: sut.id
    }))
  })

  it("should be able to change a Project started_at property", ()=> {
    const { sut } = makeSut()

    const now = new Date()
    sut.changeStartedAt(now)
    expect(sut.started_at).toBe(now)


    const project = makeProject({
      started_at: now
    })

    const tomorrow = new Date(now.setDate(now.getDate() + 1)) 
    project.changeStartedAt(tomorrow)
    expect(project.started_at).toBe(tomorrow)
  })
})