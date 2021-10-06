import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'
import { UserAddressEdit } from '../public'
import { USER_QUERY } from './query'
import { UserResponseTypes } from './types'

export interface UpdateUserAddressData {
  updateUser: {
    user: UserResponseTypes
  }
}

export interface UpdateUserAddressVars {
  address: UserAddressEdit[]
  id: string
}

const UPDATE_USER_ADDRESS = gql`
  mutation ($id: ID!, $address: [editComponentUserDeliveryInfoInput]) {
    updateUser(
      input: { where: { id: $id }, data: { delivery_info: $address } }
    ) {
      user {
        ${USER_QUERY}
      }
    }
  }
`

export const updateUserAddress = async (
  variables: UpdateUserAddressVars,
  jwt: string
): Promise<UpdateUserAddressData | undefined> => {
  try {
    const res = await graphql.mutate<
      UpdateUserAddressData,
      UpdateUserAddressVars
    >({
      mutation: UPDATE_USER_ADDRESS,
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
