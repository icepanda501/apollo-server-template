import {execute, subscribe} from 'graphql'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import http from 'http';
import bodyParser from 'body-parser';
import express from 'express'

import typeDefs from './schema'

import Customer from './resolvers/customer/customer.field'
import CustomerMutation from './resolvers/customer/customer.mutation'
import CustomerQuery from './resolvers/customer/customer.query'
import customerSubscription from './resolvers/customer/customer.subscription'

import Company from './resolvers/company/company.field'
import companyMutation from './resolvers/company/company.mutation'
import companyQuery from './resolvers/company/company.query'

import User from './resolvers/user/user.field'
import userMutation from './resolvers/user/user.mutation'
import userQuery from './resolvers/user/user.query'
import userSubscription from './resolvers/user/user.subscription'

import cors from 'cors'

const app = express()
const PORT = 8880
const port_websocket = 5000
const websocketServer = http.createServer((request, response) => {
    response.writeHead(404)
    response.end()
  })

websocketServer.listen(port_websocket, () => console.log(
    `Websocket Server is now running on port: ${port_websocket}`
))

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
    Subscription: {
        ...customerSubscription,
        ...userSubscription,
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
//grapiql test 
app.get('/graphiql', graphiqlExpress({
     subscriptionsEndpoint: 'ws://localhost:5000/subscriptions',
     endpointURL: '/graphql' 

    }))


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

// real server
SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
      onConnect: (connectionParams, webSocket, context) => {
        console.log('connectionParams :', connectionParams)
      },
    },
    {
      server: websocketServer,
      path: '/subscriptions',
    },
   )