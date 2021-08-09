import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'

export interface RegisterUserData {
  register: {
    jwt: string
    user: {
      id: string
    }
  }
}

export interface RegisterUserVars {
  email: string
  password: string
}

const REGISTER_USER = gql`
  mutation ($email: String!, $password: String!) {
    register(input: { email: $email, username: $email, password: $password }) {
      jwt
      user {
        id
      }
    }
  }
`

export const registerUser = async (
  variables: RegisterUserVars
): Promise<RegisterUserData | undefined> => {
  try {
    const res = await graphql.mutate<RegisterUserData, RegisterUserVars>({
      mutation: REGISTER_USER,
      variables,
    })
    return res.data ?? undefined
  } catch (e) {
    console.log(e)
  }
}
