import { gql } from '@apollo/client'
import { graphql } from '../'
import { ProductCardType } from './types'

//===== PRODUCTS BY CATEGORY =====

export interface ProductsByCategoryData {
  products: ProductCardType[]
}

export interface ProductsByCategoryVars {
  slug: string
  lang: string
  limit: number
  start: number
}

const GET_PRODUCTS_BY_CATEGORY = gql`
  query ($slug: String!, $lang: String!, $limit: Int!, $start: Int!) {
    products(
      where: { category: { slug: $slug } }
      locale: $lang
      sort: "order:asc,vendor_code:asc"
      limit: $limit
      start: $start
    ) {
      id
      slug
      name
      category {
        slug
      }
      vendor_code
      price
      old_price
      wholesale_price
      photos {
        url
        formats
      }
    }
  }
`
export const getProductsByCategory = async (
  variables: ProductsByCategoryVars
): Promise<ProductsByCategoryData> => {
  const res = await graphql.query<
    ProductsByCategoryData,
    ProductsByCategoryVars
  >({
    query: GET_PRODUCTS_BY_CATEGORY,
    variables,
  })

  return res.data
}

//===== TOTAL PRODUCTS IN CATEGORY  =====

export interface TotalProductsInCategoryData {
  products: { id: string }[]
}

export interface TotalProductsInCategoryVars {
  slug: string
  lang: string
}

const GET_TOTAL_PRODUCTS_IN_CATEGORY = gql`
  query ($slug: String!, $lang: String!) {
    products(
      where: { category: { slug: $slug } }
      locale: $lang
      limit: -1
      start: 0
    ) {
      id
    }
  }
`

export const getTotalProductsInCategory = async (
  variables: TotalProductsInCategoryVars
): Promise<TotalProductsInCategoryData> => {
  const res = await graphql.query<
    TotalProductsInCategoryData,
    TotalProductsInCategoryVars
  >({
    query: GET_TOTAL_PRODUCTS_IN_CATEGORY,
    variables,
  })

  return res.data
}
