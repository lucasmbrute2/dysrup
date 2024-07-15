import { app } from './app'


import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()
}

main()
  .then(() => {
    console.info("Prisma connected")
    app.listen(3333, () => {
      console.log(`Server running on port 3333`)
    })
  })
  .catch(async (e) => {
    await prisma.$disconnect()
    console.error("Prisma was disconnected - error: " + e)
    process.exit(1)
  })
