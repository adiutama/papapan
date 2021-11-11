import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from '../schema'

const app = express()

app.use(graphqlHTTP({ schema }))

export default app
