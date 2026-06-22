import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import config from './config.js'

const adapter = new PrismaNeon({
    connectionString: config.DATABASE_URL,
})

export const prisma = new PrismaClient({ adapter })