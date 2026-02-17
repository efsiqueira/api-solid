import { PrismaPg } from "@prisma/adapter-pg"
import fastify from "fastify"
import { PrismaClient } from "generated/prisma/client"
import { env } from "node:process"

export const app = fastify()

const connectionString = env.DATABASE_URL
const adapter = new PrismaPg({ connectionString })

const prisma = new PrismaClient({ adapter })

prisma.user.create({
  data: {
    name: 'Eduardo Siqueira',
    email: 'eduardo.siqueira@example.com'
  }
})