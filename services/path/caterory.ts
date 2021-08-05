import { gql } from '@apollo/client'
import { graphql } from '../'

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
  const res = await graphql.query<CategorySlugData, {}>({
    query: GET_CATEGORY_SLUG,
  })
  return res.data
}

export interface CategorySlugWithProducts extends CategorySlug {
  products: { id: string; slug: string }[]
}

export interface HeadCategorySlugWithProducts extends CategorySlugWithProducts {
  localizations: CategorySlugWithProducts[]
}

export interface CategorySlugWithProductsData {
  productCategories: HeadCategorySlugWithProducts[]
}

const GET_CATEGORY_SLUG_WITH_PRODUCTS = gql`
  query {
    productCategories {
      slug
      locale
      products(limit: -1) {
        id
        slug
      }
      localizations {
        slug
        locale
        products(limit: -1) {
          id
          slug
        }
      }
    }
  }
`

export const getCategorySlugWithProducts =
  async (): Promise<CategorySlugWithProductsData> => {
    const res = await graphql.query<CategorySlugWithProductsData, {}>({
      query: GET_CATEGORY_SLUG_WITH_PRODUCTS,
    })
    return res.data
  }
