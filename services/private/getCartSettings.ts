import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'
import { CART_SETTINGS_QUERY } from './query'
import { CartSettingsTypes } from './types'

export interface CartSettingsData {
  cartSetting: CartSettingsTypes
}

const CART_SETTINGS = gql`
  query {
    cartSetting {
      ${CART_SETTINGS_QUERY}
    }
  }
`

export const getCartSettings = async (): Promise<
  CartSettingsData | undefined
> => {
  try {
    const res = await graphql.query<CartSettingsData>({
      query: CART_SETTINGS,
      variables: {},
    })
    return res.data ?? undefined
  } catch (e) {
    console.log(e)
  }
}
