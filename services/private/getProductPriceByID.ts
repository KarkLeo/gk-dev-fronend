import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'

export interface ProductPriceByIDData {
  products: {
    id: string
    price: number
    wholesale_price: number | null
  }[]
}

export interface ProductPriceByIDVars {
  products: string[]
}

const GET_PRODUCT_PRICE_FROM_ID = gql`
  query ($products: [ID!]) {
    products(where: { id_in: $products }) {
      id
      price
      wholesale_price
    }
  }
`

export const getProductPriceByID = async (
  variables: ProductPriceByIDVars,
  jwt: string
): Promise<ProductPriceByIDData | undefined> => {
  try {
    const res = await graphql.mutate<
      ProductPriceByIDData,
      ProductPriceByIDVars
    >({
      mutation: GET_PRODUCT_PRICE_FROM_ID,
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
