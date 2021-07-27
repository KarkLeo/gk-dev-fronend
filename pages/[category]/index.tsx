import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { pathData, staticData } from 'services'
import { MetaData, ProductCardType } from 'services/static'
import {
  DefaultLocalesParams,
  getCategoryLocalesParams,
} from 'common/utils/locales-params'
import { GetStaticPaths, GetStaticProps } from 'next'
import CategoryPage from 'containers/CategoryPage'
import { PRODUCTS_PER_PAGE } from 'common/constans/paginaiton'
import { getAllCategoryPath } from 'common/utils/path/'

export interface CategoryProps {
  meta: MetaData
  localesParams: DefaultLocalesParams
  totalProduct: number
  products: ProductCardType[]
}

const Category: React.FC<CategoryProps> = ({
  meta,
  localesParams,
  totalProduct,
  products,
}) => {
  return (
    <CategoryPage
      meta={meta}
      localesParams={localesParams}
      products={products}
      totalProduct={totalProduct}
    />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await pathData.getCategorySlug()
  const paths = getAllCategoryPath(res.productCategories)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const lang = locale ? locale : 'ru'
  const slug = params ? (params.category as string) : ''

  const meta = await staticData.getMeta({ lang })
  const categorySlugSet = await pathData.getCategorySlug()
  const totalProducts = await staticData.getTotalProductsInCategory({
    slug,
    lang,
  })
  const products = await staticData.getProductsByCategory({
    slug,
    lang,
    limit: PRODUCTS_PER_PAGE,
    start: 0,
  })

  return {
    props: {
      ...(await serverSideTranslations(lang, ['common'], nextI18NextConfig)),
      meta,
      localesParams:
        params &&
        getCategoryLocalesParams(categorySlugSet, {
          ...params,
          category: params.category as string,
        }),
      totalProduct: totalProducts.products.length,
      products: products.products,
    } as CategoryProps,
  }
}

export default Category
