import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools'
import bodyParser from 'body-parser';
import express from 'express'

import typeDefs from './schema'

import Company from './resolvers/company/company.field'
import companyMutation from './resolvers/company/company.mutation'
import companyQuery from './resolvers/company/company.query'

import User from './resolvers/user/user.field'
import userMutation from './resolvers/user/user.mutation'
import userQuery from './resolvers/user/user.query'

import cors from 'cors'


const app = express()
const PORT = 8880


app.use(cors())

const resolvers = {
    Query: {
        ...userQuery,
        ...companyQuery
    },
    Mutation: {
        ...userMutation,
        ...companyMutation
    },
    Company: Company,
    User: User
}

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))