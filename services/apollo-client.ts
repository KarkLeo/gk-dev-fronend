import { ApolloClient, InMemoryCache } from '@apollo/client'

export const graphql = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
})
