import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'
import { USER_QUERY } from './query'
import { UserResponseTypes } from './types'

export interface UpdateUserOrdersData {
  updateUser: {
    user: UserResponseTypes
  }
}

export interface UpdateUserOrdersVars {
  orders: string[]
  id: string
}

const UPDATE_USER_ORDERS = gql`
  mutation ($id: ID!, $orders: [ID]) {
    updateUser(
      input: { where: { id: $id }, data: { orders: $orders } }
    ) {
      user {
        ${USER_QUERY}
      }
    }
  }
`

export const updateUserOrders = async (
  variables: UpdateUserOrdersVars,
  jwt: string
): Promise<UpdateUserOrdersData | undefined> => {
  try {
    const res = await graphql.mutate<
      UpdateUserOrdersData,
      UpdateUserOrdersVars
    >({
      mutation: UPDATE_USER_ORDERS,
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
