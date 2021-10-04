import React from 'react'
import ProductGrid from 'components/ProductGrid/ProductGrid'
import Layout from 'components/Layout'
import { MetaData, ProductCardType } from 'services/static'
import { DefaultLocalesParams } from 'common/utils/locales-params'
import PagePagination from 'components/PagePagination/PagePagination'

interface CategoryPageProps {
  meta: MetaData
  localesParams: DefaultLocalesParams
  totalProduct: number
  products: ProductCardType[]
  title: string | null
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  meta,
  localesParams,
  totalProduct,
  products,
  title,
}) => {
  return (
    <Layout meta={meta} localesParams={localesParams}>
      {title && <h1>{title}</h1>}
      <ProductGrid data={products} />
      <PagePagination total={totalProduct} />
    </Layout>
  )
}

export default CategoryPage
