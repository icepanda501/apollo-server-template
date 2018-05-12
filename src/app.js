import { Binding } from 'graphql-binding'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools'
import bodyParser from 'body-parser';
import express from 'express'

import typeDefs from './schema'

import Company from './resolvers/company/company.field'
import companyQuery from './resolvers/company/company.query'
import User from './resolvers/user/user.field'
import userMutation from './resolvers/user/user.mutation'
import userQuery from './resolvers/user/user.query'

const app = express()
const PORT = 3000

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

const findUserBinding = new Binding({
    schema,
})

findUserBinding.query.users().then(data=>{
    console.log(data)
})
  
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))