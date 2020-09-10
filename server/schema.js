const graphql = require('graphql')

// module.exports = graphql.buildSchema(`
// type User {
//   id: ID!
//   email: String!
//   password: String!
// }
// type Auth {
//   user: User
// }
// type Mutation {
//   signup(email: String!, password: String!): Auth
//   login(email: String!, password: String!): Auth
// }
// type Query {
//   user: User
// }
// `)

module.exports = graphql.buildSchema(`
type Post {
  id: ID!
  content: String
  posted: String
}
type User {
  id: ID!
  email: String
  password: String
}
type Query {
  user(id: Int): User
}
`)

// posts: [Post]
