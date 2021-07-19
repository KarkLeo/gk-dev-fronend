import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { pathData, staticData } from 'services'
import { MetaData } from 'services/static'
import {
  DefaultLocalesParams,
  getCategoryLocalesParams,
} from 'common/utils/locales-params'
import { GetStaticPaths, GetStaticProps } from 'next'
import CategoryPage from 'containers/CategoryPage'

interface CategoryProps {
  meta: MetaData
  localesParams: DefaultLocalesParams
}

const Category: React.FC<CategoryProps> = ({ meta, localesParams }) => {
  return <CategoryPage meta={meta} localesParams={localesParams} />
}

interface PagePath {
  locale: string
  params: {
    category: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await pathData.getCategorySlug()

  const paths = res.productCategories.reduce((res, i) => {
    const category = [
      // create all category locales` array
      { slug: i.slug, locale: i.locale },
      ...i.localizations,
    ].map((i) => ({ params: { category: i.slug }, locale: i.locale }))

    return [...res, ...category]
  }, [] as PagePath[])

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const meta = await staticData.getMeta({
    lang: locale ? locale : 'ru',
  })
  const categorySlugSet = await pathData.getCategorySlug()

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
    },
  }
}

export default Category
