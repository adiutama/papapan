import path from 'path'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { makeSchema } from 'nexus'
import Prisma from '@prisma/client'
import * as types from '../schema'

const app = express()
const db = new Prisma.PrismaClient()

const schema = makeSchema({
  types,
  outputs: {
    typegen: path.resolve('./server/nexus.d.ts'),
    schema: path.resolve('./server/schema.graphql'),
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
  contextType: {
    module: path.join(process.cwd(), 'server', 'context.ts'),
    export: 'Context',
  },
})

app.use(
  graphqlHTTP({
    schema,
    context: { db },
  })
)

export default app
