import React, { useCallback, useMemo } from 'react'
import Link from 'next/link'
import Icon from 'components/Icon'
import s from './ProductItem.module.css'
import { ProductCardType } from 'services/static'
import { useTranslation } from 'next-i18next'
import createProductLinkFromLocale from 'common/utils/createProductLinkFromLocale'
import { PRODUCT_PAGE_URL } from 'route'
import { useDispatch } from 'react-redux'
import { removeFavoriteProductAction } from 'store/favorite'
import EmptyPhoto from '../../../EmptyPhoto/EmptyPhoto'

interface ProductItemProps {
  product: ProductCardType
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const { i18n } = useTranslation()
  const link = useMemo(
    () => createProductLinkFromLocale(product, i18n.language),
    [product, i18n]
  )

  const removeHandler = useCallback(
    () => dispatch(removeFavoriteProductAction(product.slug)),
    [dispatch, product]
  )

  return (
    <div className={s.root}>
      <Link
        href={
          link
            ? {
                pathname: PRODUCT_PAGE_URL,
                query: link.query,
              }
            : ''
        }
      >
        <a className={s.card}>
          {product.photos.length ? (
            <img
              src={product.photos[0].formats.thumbnail.url}
              alt={link?.name || product.name}
              className={s.card__image}
            />
          ) : (
            <EmptyPhoto />
          )}
          <h3 className={s.card__title}>{link?.name || product.name}</h3>
        </a>
      </Link>
      <button className={s.button} onClick={removeHandler}>
        <Icon iconId='close' className={s.button__icon} />
      </button>
    </div>
  )
}

export default ProductItem
