import React from 'react'
import s from './ProductPage.module.css'
import Layout from 'components/Layout'
import { MetaData } from 'services/static'
import { DefaultLocalesParams } from 'common/utils/locales-params'
import Title from './components/Title/Title'
import Price from './components/Price/Price'
import CartButton from './components/CartButton/CartButton'
import Description from './components/Description/Description'
import ImageSlider from './components/ImageSlider/ImageSlider'
import ProductCarousel from '../HomePage/components/ProductCarousel/ProductCarousel'

interface CategoryPageProps {
  meta: MetaData
  localesParams?: DefaultLocalesParams
}

const ProductPage: React.FC<CategoryPageProps> = ({ meta, localesParams }) => {
  return (
    <Layout meta={meta} localesParams={localesParams}>
      <div className={s.grid}>
        <div className={s.grid__images}>
          <ImageSlider />
        </div>
        <div className={s.grid__title}>
          <Title />
        </div>
        <div className={s.grid__content}>
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
