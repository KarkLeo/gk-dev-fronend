import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'
import { UserAddressResponse } from '../public'

export interface UpdateUserData {
  updateUser: {
    user: {
      id: string
      first_name: string
      last_name: string
      phone_number: string
      email: string
      delivery_info: UserAddressResponse[] | null
    }
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
        id
        first_name
        last_name
        phone_number
        email
        delivery_info {
          id
          address
          firs_name
          last_name
          phone_number
          is_novaposhta
          city
          novaposhta_number
        }
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
    })
    return res.data || undefined
  } catch (e) {
    console.log(e)
  }
}
