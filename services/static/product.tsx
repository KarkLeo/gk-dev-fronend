import { gql } from '@apollo/client'
import { ProductDetail } from './types/'
import { graphql } from '../'
import { PRODUCT_CART_QUERY } from './query'

export interface ProductData {
  products: ProductDetail[]
}

export interface ProductVar {
  slug: string
  lang: string
}

const GET_PRODUCT = gql`
  query ($slug: String!, $lang: String!) {
    products(where: { slug: $slug }, locale: $lang) {
      ${PRODUCT_CART_QUERY}
      description
      box_width
      box_length
      box_height
      weights
    }
  }
`

export const getProduct = async (
  variables: ProductVar
): Promise<ProductData> => {
  const res = await graphql.query<ProductData, ProductVar>({
    query: GET_PRODUCT,
    variables,
  })

  return res.data
}
