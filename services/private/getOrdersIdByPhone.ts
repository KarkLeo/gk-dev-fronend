import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'

export interface OrdersIdByPhoneData {
  orders: {
    id: string
  }[]
}

export interface OrdersIdByPhoneVars {
  phone: string
}

const GET_ORDERS_ID_BY_PHONE = gql`
  query ($phone: String!) {
    orders(where: { user_null: true, user_phone_number_contains: $phone }) {
      id
    }
  }
`
export const getOrdersIdByPhone = async (
  variables: OrdersIdByPhoneVars
): Promise<OrdersIdByPhoneData | undefined> => {
  try {
    const res = await graphql.query<OrdersIdByPhoneData, OrdersIdByPhoneVars>({
      query: GET_ORDERS_ID_BY_PHONE,
      variables,
    })
    return res.data || undefined
  } catch (e) {
    console.log(e)
  }
}
