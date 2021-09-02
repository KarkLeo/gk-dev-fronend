import React, { useCallback, useMemo } from 'react'
import s from './ProductCard.module.css'
import { ProductCardType } from 'services/static/'
import EmptyPhoto from 'components/EmptyPhoto/EmptyPhoto'
import Link from 'next/link'
import { PRODUCT_PAGE_URL } from 'route'
import Icon from 'components/Icon'
import { useDispatch, useSelector } from 'react-redux'
import {
  addFavoriteProductThunk,
  getFavoriteRecordSelector,
} from 'store/favorite'
import { addCartProductAction } from 'store/cart'

interface ProductCardProps {
  data: ProductCardType
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const dispatch = useDispatch()

  const addToFavoriteHandler = useCallback(
    () => dispatch(addFavoriteProductThunk(data)),
    [dispatch]
  )

  const addToCartHandler = useCallback(
    () => dispatch(addCartProductAction(data)),
    [dispatch, data]
  )

  const record = useSelector(getFavoriteRecordSelector)

  const isFavorite = useMemo(
    () => Boolean(record[data.vendor_code]),
    [record, data]
  )

  return (
    <div className={s.wrap}>
      <div className={s.card}>
        <Link
          href={{
            pathname: PRODUCT_PAGE_URL,
            query: {
              category: data.category.slug,
              product: data.slug,
            },
          }}
        >
          <a className={s.link}>
            <div className={s.image}>
              {data.photos[0] ? (
                <img
                  className={s.image__source}
                  src={data.photos[0].formats.small.url}
                  alt={data.name}
                />
              ) : (
                <EmptyPhoto className={s.image__source} />
              )}
            </div>
            <h3 className={s.title}>{data.name}</h3>
          </a>
        </Link>
        <div className={s.grid}>
          <div className={s.price__list}>
            <span className={s.price_other}>3,1 $</span>
            <span className={s.price_other}>2,7 €</span>
            <span className={s.price_other}>239 ₽</span>
          </div>
          <span className={s.code}>{data.vendor_code}</span>
          <div className={s.price__wrap}>
            <span className={s.price}>{data.price}</span>
            {data.old_price && data.old_price > data.price ? (
              <span className={s.price_old}>{data.old_price}</span>
            ) : null}
          </div>
          <div className={s.buttonsWrap}>
            <button className={s.buttonIcon} onClick={addToFavoriteHandler}>
              <Icon
                iconId={isFavorite ? 'favorite_filled' : 'favorite'}
                className={s.buttonIcon__icon}
              />
            </button>
            <button className={s.button} onClick={addToCartHandler}>
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
