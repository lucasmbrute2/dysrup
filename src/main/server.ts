import { config } from 'dotenv'
config()

import { app } from './app'

import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()
}

main()
  .then(() => {
    console.info('Prisma connected')
    const port = process.env.PORT ?? 3334
    app.listen(+port, () => {
      console.log(`Server running on port ${port}`)
    })
  })
  .catch(async (e) => {
    await prisma.$disconnect()
    console.error('Prisma was disconnected - error: ' + e)
    process.exit(1)
  })
