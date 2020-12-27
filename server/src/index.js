import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
type User{
     name: String!
     age: Int!
}
  type Query {
    user: User!
  }
`

const resolvers = {
    Query: {
        user: () => {
            return {
                name: 'Moataz',
                age: 30,
            }
        },
    },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
