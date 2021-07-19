import { gql } from '@apollo/client'
import client from '../apollo-client'

export interface ProductSlug {
  slug: string
  locale: string
  category: { slug: string }
}

export interface HeadProductSlug extends ProductSlug {
  localizations: ProductSlug[]
}

export interface ProductSlugData {
  products: HeadProductSlug[]
}

export interface ProductSlugVars {
  slug: string
}

const GET_PRODUCT_SLUG = gql`
  query ($slug: String!) {
    products(where: { slug: $slug }) {
      slug
      locale
      category {
        slug
      }
      localizations {
        slug
        locale
        category {
          slug
        }
      }
    }
  }
`

export const getProductSlug = async (
  variables: ProductSlugVars
): Promise<ProductSlugData> => {
  const res = await client.query<ProductSlugData, ProductSlugVars>({
    query: GET_PRODUCT_SLUG,
    variables,
  })
  return res.data
}
