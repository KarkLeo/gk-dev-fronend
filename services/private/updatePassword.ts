import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'
import { USER_QUERY } from './query'
import { UserResponseTypes } from './types'

export interface UpdateUserPasswordData {
  updateUser: {
    user: UserResponseTypes
  }
}

export interface UpdateUserPasswordVars {
  id: string
  password: string
}

const UPDATE_USER_PASSWORD = gql`
  mutation ($id: ID!, $password: String) {
    updateUser(input: { where: { id: $id }, data: { password: $password } }) {
      user {
        ${USER_QUERY}
      }
    }
  }
`

export const updateUserPassword = async (
  variables: UpdateUserPasswordVars,
  jwt: string
): Promise<UpdateUserPasswordData | undefined> => {
  try {
    const res = await graphql.mutate<
      UpdateUserPasswordData,
      UpdateUserPasswordVars
    >({
      mutation: UPDATE_USER_PASSWORD,
      context: {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
      variables,
      fetchPolicy: 'no-cache',
    })
    return res.data || undefined
  } catch (e) {
    console.log(e)
  }
}
