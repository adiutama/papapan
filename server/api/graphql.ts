import path from 'path'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { makeSchema } from 'nexus'

import * as types from '../schema'

const schema = makeSchema({
  types,
  outputs: {
    typegen: path.resolve('./server/nexus.d.ts'),
    schema: path.resolve('./server/schema.graphql'),
  },
})

const app = express()

app.use(graphqlHTTP({ schema }))

export default app
