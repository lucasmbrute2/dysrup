import { app } from './app'

async function main() {}

main()
  .then(() => {
    app.listen(3333, () => {
      console.log(`Server running on port 3333`)
    })
  })
  .catch(() => {
    process.exit(1)
  })
