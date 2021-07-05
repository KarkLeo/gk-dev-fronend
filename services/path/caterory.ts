import { gql } from '@apollo/client'
import client from '../apollo-client'

export interface CategorySlug {
  slug: string
  locale: string
}
export interface HeadCategorySlug extends CategorySlug {
  localizations: CategorySlug[]
}

export interface CategorySlugData {
  productCategories: HeadCategorySlug[]
}

const GET_CATEGORY_SLUG = gql`
  query {
    productCategories {
      slug
      locale
      localizations {
        slug
        locale
      }
    }
  }
`

export const getCategorySlug = async (): Promise<CategorySlugData> => {
  const res = await client.query<CategorySlugData, {}>({
    query: GET_CATEGORY_SLUG,
  })
  return res.data
}
