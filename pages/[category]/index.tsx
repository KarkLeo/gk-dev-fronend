import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import Layout from 'components/Layout'
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
  return (
    <Layout meta={meta} localesParams={localesParams}>
      <h1>Contact page</h1>
    </Layout>
  )
}

//===== fetching data =====

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await pathData.getCategorySlug()

  const paths = res.productCategories.reduce((res, i) => {
    const category = [
      { slug: i.slug, locale: i.locale },
      ...i.localizations,
    ].map((i) => ({ params: { category: i.slug }, locale: i.locale }))

    return [...res, ...category]
  }, [] as { params: { category: string }; locale: string }[])

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
        params && getCategoryLocalesParams(lang, params.category as string),
    },
  }
}

export default Category
