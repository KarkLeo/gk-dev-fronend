import { gql } from '@apollo/client'
import { ProductDetail } from './types/'
import { graphql } from '../'

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
      id
      name
      slug
      category {
        slug
      }
      vendor_code
      description
      price
      old_price
      wholesale_price
      box_width
      box_length
      box_height
      weights
      photos {
        url
        formats
      }
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
