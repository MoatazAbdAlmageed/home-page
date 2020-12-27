import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
type Query {
    testPassingParams(name:String):String!
    user: User!
    post: Post!
  }

type User {
     id: ID!
     name: String!
     age: Int!
     email: String
}
type Post {
     id: ID!
     title: String!
     body: String!
}


`

const resolvers = {
    Query: {
        testPassingParams(_, { name }) {
            console.log(
                '🚀 ~ file: index.js ~ line 28 ~ testPassingParams ~ name',
                name
            )
            console.log(
                '🚀 ~ file: index.js ~ line 28 ~ testPassingParams ~ _',
                _
            )
            return name
        },
        user() {
            return {
                id: '123',
                name: 'Moataz',
                age: 32,
            }
        },
        post() {
            return {
                id: '123',
                title: 'title',
                body: 'this is post body',
            }
        },
    },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
