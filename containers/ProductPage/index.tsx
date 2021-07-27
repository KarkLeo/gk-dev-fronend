import React from 'react'
import s from './ProductPage.module.css'
import Layout from 'components/Layout'
import { MetaData, ProductDetail } from 'services/static'
import { DefaultLocalesParams } from 'common/utils/locales-params'
import Title from './components/Title/Title'
import Price from './components/Price/Price'
import CartButton from './components/CartButton/CartButton'
import Description from './components/Description/Description'
import ImageSlider from './components/ImageSlider/ImageSlider'
import BackButton from './components/BackButton/BackButton'
import ProductCarousel from '../HomePage/components/ProductCarousel/ProductCarousel'
import EmptyPhoto from '../../components/EmptyPhoto/EmptyPhoto'

interface CategoryPageProps {
  meta: MetaData
  localesParams?: DefaultLocalesParams
  product: ProductDetail
}

const ProductPage: React.FC<CategoryPageProps> = ({
  meta,
  localesParams,
  product,
}) => {
  return (
    <Layout meta={meta} localesParams={localesParams}>
      <BackButton slug={product.category.slug} />
      <div className={s.grid}>
        <div className={s.grid__images}>
          {product.photos.length ? (
            <ImageSlider data={product.photos} />
          ) : (
            <EmptyPhoto />
          )}
        </div>
        <div className={s.grid__title}>
          <Title title={product.name} vendor_code={product.vendor_code} />
        </div>
        <div className={s.grid__content}>
          <Price
            price={product.price}
            old_price={product.old_price}
            wholesale_price={product.wholesale_price}
          />
          <CartButton />
          <Description text={product.description} />
        </div>
      </div>
      {/*<ProductCarousel />*/}
    </Layout>
  )
}

export default ProductPage
