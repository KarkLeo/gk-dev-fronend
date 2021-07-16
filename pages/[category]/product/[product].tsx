import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { pathData, staticData } from 'services'
import { MetaData } from 'services/static'
import {
  CategoryLocalesParams,
  getCategoryLocalesParams,
} from 'common/utils/locales-params'
import { GetStaticPaths, GetStaticProps } from 'next'

interface CategoryProps {
  meta: MetaData
  localesParams: CategoryLocalesParams
}

const Category: React.FC<CategoryProps> = ({ meta, localesParams }) => {
  return <div>Product page</div>
}

interface PagePath {
  locale: string
  params: {
    category: string
    product: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await pathData.getCategorySlugWithProducts()

  const paths = res.productCategories.reduce((res, i) => {
    const products = [
      // create all category locales` array
      { slug: i.slug, locale: i.locale, products: i.products },
      ...i.localizations,
    ].reduce((productsRes, i) => {
      // create products array and converts to page path
      const pages: PagePath[] = i.products.map((product) => ({
        locale: i.locale,
        params: {
          category: i.slug,
          product: product.slug,
        },
      }))

      return [...productsRes, ...pages]
    }, [] as PagePath[])
    return [...res, ...products]
  }, [] as PagePath[])

  return { paths, fallback: false } // todo add fallback page
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const meta = await staticData.getMeta({
    lang: locale ? locale : 'ru',
  })
  const lang = await pathData.getCategorySlug()

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
        getCategoryLocalesParams(lang, {
          ...params,
          category: params.category as string,
        }),
    },
  }
}

export default Category
