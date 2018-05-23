import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools'
import bodyParser from 'body-parser';
import express from 'express'

import typeDefs from './schema'

import Customer from './resolvers/customer/customer.field'
import CustomerMutation from './resolvers/customer/customer.mutation'
import CustomerQuery from './resolvers/customer/customer.query'

import Company from './resolvers/company/company.field'
import companyMutation from './resolvers/company/company.mutation'
import companyQuery from './resolvers/company/company.query'

import User from './resolvers/user/user.field'
import userMutation from './resolvers/user/user.mutation'
import userQuery from './resolvers/user/user.query'

import cors from 'cors'


const app = express()
const PORT = 8881


app.use(cors())

const resolvers = {
    Query: {
        ...userQuery,
        ...companyQuery,
        ...CustomerQuery,
    },
    Mutation: {
        ...userMutation,
        ...companyMutation,
        ...CustomerMutation,
    },
    Company: Company,
    User: User,
    Customer: Customer,
}

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))