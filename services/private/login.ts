import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'

export interface LoginUserData {
  login: {
    jwt: string
    user: {
      id: string
    }
  }
}

export interface LoginUserVars {
  email: string
  password: string
}

const LOGIN_USER = gql`
  mutation ($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
      }
    }
  }
`

export const loginUser = async (
  variables: LoginUserVars
): Promise<LoginUserData | undefined> => {
  try {
    const res = await graphql.mutate<LoginUserData, LoginUserVars>({
      mutation: LOGIN_USER,
      variables,
    })
    return res.data ?? undefined
  } catch (e) {
    console.log(e)
  }
}
