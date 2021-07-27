import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { pathData, staticData } from 'services'
import { getCategoryLocalesParams } from 'common/utils/locales-params'
import { GetStaticPaths, GetStaticProps } from 'next'
import CategoryPage from 'containers/CategoryPage'
import { PRODUCTS_PER_PAGE } from 'common/constans/paginaiton'
import { CategoryProps } from '.'
import { getAllCategoriesPagesPath } from 'common/utils/path'

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
      totalProduct={totalProduct}
      products={products}
    />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await pathData.getCategorySlugWithProducts()

  const paths = getAllCategoriesPagesPath(res.productCategories)
  return { paths, fallback: false } // todo add fallback page
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const lang = locale ? locale : 'ru'
  const slug = params ? (params.category as string) : ''
  const page = params ? parseInt(params.page as string) : 2

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
    start: PRODUCTS_PER_PAGE * (page - 1),
  })

  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale : 'ru',
        ['common'],
        nextI18NextConfig
      )),
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
