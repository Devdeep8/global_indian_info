import 'dotenv/config'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from '@/generated/client/client'

declare global {
  var prisma: PrismaClient | undefined
  var adapter: PrismaMariaDb | undefined
}

const getAdapter = () => {
  if (!global.adapter) {
    global.adapter = new PrismaMariaDb({
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      connectionLimit: 25
    })
  }
  return global.adapter
}

const getPrisma = () => {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      adapter: getAdapter(),
      log: ["error", "warn"] 
    })
  }
  return global.prisma
}

export const db = getPrisma()
