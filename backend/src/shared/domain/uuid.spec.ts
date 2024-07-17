import { validate as uuidValidate } from "uuid"
import { Uuid } from "./uuid";

describe("UUID", () => {

  const validateSpy = vi.spyOn(Uuid.prototype as any, 'validate')

  test("should throw error when UUID is invalid", () => {
    expect(() => {
      new Uuid('not-an-UUID')
    }).toThrow();
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  test("should create a valid uuid", () => {
    const uuid = new Uuid()

    expect(uuid.id).toBeDefined()
    expect(uuidValidate(uuid.id)).toBe(true)
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  test("should accept a valid UUID", () => {
    const uuid = new Uuid('cceb138d-3e1c-45bf-99b6-f532fb4dd4a0')
    expect(uuid.id).toBe('cceb138d-3e1c-45bf-99b6-f532fb4dd4a0')
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })
})