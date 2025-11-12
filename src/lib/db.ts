import {PrismaClient} from "@/generated/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

export const db = prisma.$extends({})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma