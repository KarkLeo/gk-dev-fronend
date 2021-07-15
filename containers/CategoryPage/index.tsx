import React from 'react'
import ProductGrid from 'components/ProductGrid/ProductGrid'
import Layout from 'components/Layout'
import { MetaData } from 'services/static'
import { CategoryLocalesParams } from 'common/utils/locales-params'
import PagePagination from 'components/PagePagination/PagePagination'

interface CategoryPageProps {
  meta: MetaData
  localesParams: CategoryLocalesParams
}

const CategoryPage: React.FC<CategoryPageProps> = ({ meta, localesParams }) => {
  return (
    <Layout meta={meta} localesParams={localesParams}>
      <h1>Имя категории</h1>
      <ProductGrid />
      <PagePagination />
    </Layout>
  )
}

export default CategoryPage
