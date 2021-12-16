import { gql } from '@apollo/client'
import { UserAddressEdit } from '../public'
import { graphql } from '../apollo-client'
import { OrderCartInfo } from './types'

export interface CreateSimpleOrderData {
  createOrder: {
    order: { id: string }
  }
}

export interface CreateSimpleOrderVars extends OrderCartInfo {
  userID: string | null
  number: string
  date: string
  address: UserAddressEdit
  description: string
  email: string
  phone: string
}

const CREATE_SIMPLE_ORDER = gql`
  mutation (
    $userID: ID
    $number: String!
    $date: DateTime!
    $address: ComponentUserDeliveryInfoInput!
    $cart: [ComponentCartCartItemInput!]
    $totalCost: Float!
    $discount: Float!
    $discountedCost: Float!
    $description: String!
    $email: String
    $phone: String!
  ) {
    createOrder(
      input: {
        data: {
          user: $userID
          number: $number
          date: $date
          status: created
          delivery_info: $address
          cart_item: $cart
          total_cost: $totalCost
          discount: $discount
          discounted_cost: $discountedCost
          description: $description
          user_email: $email
          user_phone_number: $phone
        }
      }
    ) {
      order {
        id
      }
    }
  }
`

export const createSimpleOrder = async (
  variables: CreateSimpleOrderVars
): Promise<CreateSimpleOrderData | undefined> => {
  try {
    const res = await graphql.mutate<
      CreateSimpleOrderData,
      CreateSimpleOrderVars
    >({
      mutation: CREATE_SIMPLE_ORDER,
      variables,
    })
    return res.data || undefined
  } catch (e) {
    console.log(e)
  }
}
