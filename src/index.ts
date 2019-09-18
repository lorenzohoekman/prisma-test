import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import resolvers from './resolvers'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => ({
        ...request,
        prisma,
    }),
})
server.start(() => console.log(`Server is running on http://localhost:4000`))

/* import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma-client'
import { importSchema } from 'graphql-import'
import resolvers from './resolvers'
//import { Prisma } from 'prisma-binding'

const typeDefs = importSchema('./src/schema.graphql')

const prisma = new Prisma({
    endpoint: process.env.ENDPOINT, // the endpoint of the Prisma DB service (value is set in .env)
    secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml (value is set in .env)
    debug: true, // log all
})

const server = new GraphQLServer({
    //typeDefs: './src/schema.graphql',
    typeDefs: typeDefs,
    resolvers,
    context: req => ({
        req,
        prisma
    }),
})
server.start(() => console.log(`Server is running on ${process.env.ENDPOINT}`))
 */