import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'
import { UserAddressResponse, UserAddressEdit } from '../public'

export interface UpdateUserAddressData {
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
    })
    return res.data || undefined
  } catch (e) {
    console.log(e)
  }
}
