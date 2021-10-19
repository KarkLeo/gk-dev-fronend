import React, { useCallback, useMemo } from 'react'
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
import EmptyPhoto from 'components/EmptyPhoto/EmptyPhoto'
import { addCartProductAction } from 'store/cart'
import { useDispatch, useSelector } from 'react-redux'
import {
  addFavoriteProductThunk,
  getFavoriteRecordSelector,
} from 'store/favorite'
import Icon from 'components/Icon'
import Specifications from './components/Specifications/Specifications'

// import ProductCarousel from '../HomePage/components/ProductCarousel/ProductCarousel'

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
  const dispatch = useDispatch()

  const addToCartHandler = useCallback(
    () => dispatch(addCartProductAction(product)),
    [dispatch, product]
  )

  const addToFavoriteHandler = useCallback(
    () => dispatch(addFavoriteProductThunk(product)),
    [dispatch, product]
  )

  const record = useSelector(getFavoriteRecordSelector)

  const isFavorite = useMemo(
    () => Boolean(record[product.vendor_code]),
    [record, product]
  )

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
          <div className={s.controllers}>
            <Price
              price={product.price}
              old_price={product.old_price}
              wholesale_price={product.wholesale_price}
            />
            <div className={s.buttons}>
              <button className={s.buttonIcon} onClick={addToFavoriteHandler}>
                <Icon
                  iconId={isFavorite ? 'favorite_filled' : 'favorite'}
                  className={s.buttonIcon__icon}
                />
              </button>
              <CartButton addToCard={addToCartHandler} />
            </div>
          </div>
          <Specifications
            box_length={product.box_length}
            box_width={product.box_width}
            box_height={product.box_height}
            weights={product.weights}
          />
          <Description text={product.description} />
        </div>
      </div>
      {/*<ProductCarousel />*/}
    </Layout>
  )
}

export default ProductPage
