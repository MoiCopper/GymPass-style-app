import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prismas = new PrismaClient()

export const app = fastify()
