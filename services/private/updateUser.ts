import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'
import { USER_QUERY } from './query'
import { UserResponseTypes } from './types'

export interface UpdateUserData {
  updateUser: {
    user: UserResponseTypes
  }
}

export interface UpdateUserVars {
  id: string
  first_name?: string
  last_name?: string
  phone_number?: string
  email?: string
}

const UPDATE_USER = gql`
  mutation (
    $id: ID!
    $first_name: String
    $last_name: String
    $phone_number: String
    $email: String
  ) {
    updateUser(
      input: {
        where: { id: $id }
        data: {
          first_name: $first_name
          last_name: $last_name
          phone_number: $phone_number
          email: $email
          username: $email
        }
      }
    ) {
      user {
        ${USER_QUERY}
      }
    }
  }
`

export const updateUser = async (
  variables: UpdateUserVars,
  jwt: string
): Promise<UpdateUserData | undefined> => {
  try {
    const res = await graphql.mutate<UpdateUserData, UpdateUserVars>({
      mutation: UPDATE_USER,
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
