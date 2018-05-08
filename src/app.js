import express from 'express'
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './schema'

import companyQuery from './resolvers/company/company.query'
import Company from './resolvers/company/company.field'
import userQuery from './resolvers/user/user.query'
import userMutation from './resolvers/user/user.mutation'
import User from './resolvers/user/user.field'

const app = express()

const resolvers = {
    Query: {
        ...userQuery,
        ...companyQuery
    },
    Mutation: {
        ...userMutation
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


app.listen(3000, () => console.log('Example app listening on port 3000!'))