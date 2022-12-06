Next.js Authentication Application Example

Technologies used:

- Next.js
- tRPC
- Prisma
- Postgres
- Redis
- Docker
- Tailwind

To start:
1. "docker-compose up -d" -  This will create our containers for redis and postgresql
2. "yarn && yarn db:migrate && yarn db:push" - Installs dependencies, migrates our db and executes the changes for your db schema to match your Prisma schema
3. "yarn dev" - This will spin up the Next.js app in Dev mode
