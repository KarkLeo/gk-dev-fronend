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
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  meta,
  localesParams,
  totalProduct,
  products,
}) => {
  return (
    <Layout meta={meta} localesParams={localesParams}>
      <h1>Имя категории</h1>
      <ProductGrid data={products} />
      <PagePagination total={totalProduct} />
    </Layout>
  )
}

export default CategoryPage
