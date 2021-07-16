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
import CategoryPage from 'containers/CategoryPage'
import { PRODUCTS_PER_PAGE } from 'common/constans/paginaiton'

interface CategoryProps {
  meta: MetaData
  localesParams: CategoryLocalesParams
}

const Category: React.FC<CategoryProps> = ({ meta, localesParams }) => {
  return <CategoryPage meta={meta} localesParams={localesParams} />
}

interface PagePath {
  locale: string
  params: {
    category: string
    page: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await pathData.getCategorySlugWithProducts()

  const paths = res.productCategories.reduce((res, i) => {
    const category = [
      // create all category locales` array
      { slug: i.slug, locale: i.locale, products: i.products },
      ...i.localizations,
    ]
      .map((i) => ({
        // convert from categories locales` array to page path`s array (temp params pageCount)
        params: {
          category: i.slug,
          pageCount: Math.ceil(i.products.length / PRODUCTS_PER_PAGE),
        },
        locale: i.locale,
      }))
      .reduce((categoryRes, i) => {
        // crete path params` array with page number
        if (i.params.pageCount < 2) return categoryRes
        // remove path with categories has 1 page
        else {
          let pages = []
          for (let j = 2; j <= i.params.pageCount; j++) {
            // generate all pages path
            pages.push({
              locale: i.locale,
              params: {
                category: i.params.category,
                page: String(j),
              },
            })
          }
          return [...categoryRes, ...pages]
        }
      }, [] as PagePath[])
    return [...res, ...category]
  }, [] as PagePath[])
  return { paths, fallback: false }
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
