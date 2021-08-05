import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { pathServices, staticServices } from 'services'
import { MetaData } from 'services/static'
import {
  DefaultLocalesParams,
  getProductLocalesParams,
} from 'common/utils/locales-params'
import { GetStaticPaths, GetStaticProps } from 'next'
import ProductPage from 'containers/ProductPage'
import { getAllProductsPath } from 'common/utils/path'
import { ProductDetail } from 'services/static/types'

interface ProductProps {
  meta: MetaData
  localesParams: DefaultLocalesParams
  product: ProductDetail
}

const Product: React.FC<ProductProps> = ({ meta, localesParams, product }) => {
  return (
    <ProductPage meta={meta} localesParams={localesParams} product={product} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await pathServices.getCategorySlugWithProducts()
  const paths = getAllProductsPath(res.productCategories)

  return { paths, fallback: false } // todo add fallback page
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const lang = locale ? locale : 'ru'
  const slug = params ? (params.product as string) : ''

  const meta = await staticServices.getMeta({ lang })
  const productSlugSet = await pathServices.getProductSlug({ slug })
  const product = await staticServices.getProduct({ slug, lang })

  return {
    props: {
      ...(await serverSideTranslations(lang, ['common'], nextI18NextConfig)),
      meta,
      localesParams: getProductLocalesParams(productSlugSet),
      product: product.products[0] as ProductDetail,
    } as ProductProps,
  }
}

export default Product
