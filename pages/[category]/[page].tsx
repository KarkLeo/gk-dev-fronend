import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { pathServices, staticServices } from 'services'
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
  const res = await pathServices.getCategorySlugWithProducts()

  const paths = getAllCategoriesPagesPath(res.productCategories)
  return { paths, fallback: false } // todo add fallback page
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const lang = locale ? locale : 'ru'
  const slug = params ? (params.category as string) : ''
  const page = params ? parseInt(params.page as string) : 2

  const meta = await staticServices.getMeta({ lang })
  const categorySlugSet = await pathServices.getCategorySlug()
  const totalProducts = await staticServices.getTotalProductsInCategory({
    slug,
    lang,
  })
  const products = await staticServices.getProductsByCategory({
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
