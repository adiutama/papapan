import path from 'path'
import { makeSchema } from 'nexus'

import * as QueryType from './query'
import * as BoardType from './board'
import * as ListType from './list'
import * as TaskType from './task'

const schema = makeSchema({
  types: [QueryType, BoardType, ListType, TaskType],
  outputs: {
    typegen: path.resolve('./server/nexus.d.ts'),
    schema: path.resolve('./server/schema.graphql'),
  },
})

export default schema
