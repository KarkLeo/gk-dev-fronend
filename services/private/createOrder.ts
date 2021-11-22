import { gql } from '@apollo/client'
import { UserAddressEdit } from '../public'
import { graphql } from '../apollo-client'
import { OrderCartInfo } from './types'

export interface CreateOrderData {
  createOrder: {
    order: { id: string }
  }
}

export interface CreateOrderVars extends OrderCartInfo {
  number: string
  date: string
  userID: string
  address: UserAddressEdit
  description: string
}

const CREATE_ORDER = gql`
  mutation (
    $number: String!
    $date: DateTime!
    $userID: ID!
    $address: ComponentUserDeliveryInfoInput!
    $cart: [ComponentCartCartItemInput!]
    $totalCost: Float!
    $discount: Float!
    $discountedCost: Float!
    $description: String!
  ) {
    createOrder(
      input: {
        data: {
          number: $number
          date: $date
          status: created
          user: $userID
          delivery_info: $address
          cart_item: $cart
          total_cost: $totalCost
          discount: $discount
          discounted_cost: $discountedCost
          description: $description
        }
      }
    ) {
      order {
        id
      }
    }
  }
`

export const createOrder = async (
  variables: CreateOrderVars,
  jwt: string
): Promise<CreateOrderData | undefined> => {
  try {
    const res = await graphql.mutate<CreateOrderData, CreateOrderVars>({
      mutation: CREATE_ORDER,
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
