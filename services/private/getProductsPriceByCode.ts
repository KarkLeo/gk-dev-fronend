import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'

export interface ProductsPriceByCodeData {
  products: {
    id: string
    vendor_code: string
    price: number
    wholesale_price: number | null
  }[]
}

export interface ProductsPriceByCodeVars {
  products: string[]
}

const GET_PRODUCTS_PRICE_FROM_CODE = gql`
  query ($products: [String!]) {
    products(where: { vendor_code_in: $products }) {
      id
      vendor_code
      price
      wholesale_price
    }
  }
`

export const getProductsPriceByCode = async (
  variables: ProductsPriceByCodeVars
): Promise<ProductsPriceByCodeData | undefined> => {
  try {
    const res = await graphql.query<
      ProductsPriceByCodeData,
      ProductsPriceByCodeVars
    >({
      query: GET_PRODUCTS_PRICE_FROM_CODE,
      variables,
    })
    return res.data || undefined
  } catch (e) {
    console.log(e)
  }
}
