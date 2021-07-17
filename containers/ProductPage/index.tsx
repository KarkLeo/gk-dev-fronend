import React from 'react'
import s from './ProductPage.module.css'
import Layout from 'components/Layout'
import { MetaData } from 'services/static'
import { CategoryLocalesParams } from 'common/utils/locales-params'
import Title from './components/Title/Title'
import Price from './components/Price/Price'
import CartButton from './components/CartButton/CartButton'
import Description from './components/Description/Description'
import ImageSlider from './components/ImageSlider/ImageSlider'
import ProductCarousel from '../HomePage/components/ProductCarousel/ProductCarousel'

interface CategoryPageProps {
  meta: MetaData
  localesParams?: CategoryLocalesParams
}

const ProductPage: React.FC<CategoryPageProps> = ({ meta, localesParams }) => {
  return (
    <Layout meta={meta} localesParams={localesParams}>
      <div className={s.grid}>
        <ImageSlider />
        <div>
          <Title />
          <Price />
          <CartButton />
          <Description />
        </div>
      </div>
      <ProductCarousel />
    </Layout>
  )
}

export default ProductPage
