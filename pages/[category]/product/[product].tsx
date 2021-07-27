import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { pathData, staticData } from 'services'
import { MetaData } from 'services/static'
import {
  DefaultLocalesParams,
  getProductLocalesParams,
} from 'common/utils/locales-params'
import { GetStaticPaths, GetStaticProps } from 'next'
import ProductPage from 'containers/ProductPage'
import { getAllProductsPath } from 'common/utils/path'

interface CategoryProps {
  meta: MetaData
  localesParams: DefaultLocalesParams
}

const Category: React.FC<CategoryProps> = ({ meta, localesParams }) => {
  return <ProductPage meta={meta} localesParams={localesParams} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await pathData.getCategorySlugWithProducts()
  const paths = getAllProductsPath(res.productCategories)

  return { paths, fallback: false } // todo add fallback page
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const meta = await staticData.getMeta({
    lang: locale ? locale : 'ru',
  })
  const productSlugSet = await pathData.getProductSlug({
    slug: params?.product as string,
  })

  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale : 'ru',
        ['common'],
        nextI18NextConfig
      )),
      meta,
      localesParams: getProductLocalesParams(productSlugSet),
    },
  }
}

export default Category
