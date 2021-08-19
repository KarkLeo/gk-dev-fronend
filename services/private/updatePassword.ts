import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'
import { UserAddressResponse } from '../public'

export interface UpdateUserPasswordData {
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

export interface UpdateUserPasswordVars {
  id: string
  password: string
}

const UPDATE_USER_PASSWORD = gql`
  mutation ($id: ID!, $password: String) {
    updateUser(input: { where: { id: $id }, data: { password: $password } }) {
      user {
        id
        first_name
        last_name
        phone_number
        email
        delivery_info {
          id
          address
          first_name
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
    })
    return res.data || undefined
  } catch (e) {
    console.log(e)
  }
}
