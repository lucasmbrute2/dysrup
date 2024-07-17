#!/bin/sh

echo "Docker-Entrypoint iniciado"

npx prisma migrate dev

npm run start:dev

echo "Docker-Entrypoint finalizado"
