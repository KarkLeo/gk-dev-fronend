import React, { useCallback, useMemo } from 'react'
import Link from 'next/link'
import Icon from '../../../Icon'
import s from './ProductItem.module.css'
import Counter from 'components/Counter/Counter'
import { ProductCardType } from 'services/static'
import { useDispatch } from 'react-redux'
import { removeCartProductAction, setCartProductCountAction } from 'store/cart'
import { useTranslation } from 'next-i18next'
import createProductLinkFromLocale from 'common/utils/createProductLinkFromLocale'
import { PRODUCT_PAGE_URL } from 'route'
import EmptyPhoto from '../../../EmptyPhoto/EmptyPhoto'

interface ProductItemProps {
  product: ProductCardType
  count: number
}

const ProductItem: React.FC<ProductItemProps> = ({ product, count }) => {
  const dispatch = useDispatch()

  const setCountHandler = useCallback(
    (value: number) =>
      dispatch(setCartProductCountAction(product.vendor_code, value)),
    [dispatch, product]
  )

  const removeHandler = useCallback(
    () => dispatch(removeCartProductAction(product.vendor_code)),
    [dispatch, product]
  )

  const { t, i18n } = useTranslation()
  const link = useMemo(
    () => createProductLinkFromLocale(product, i18n.language),
    [product, i18n]
  )

  return (
    <div className={s.root}>
      <div className={s.card}>
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
          <a className={s.card__imageLink}>
            {product.photos.length ? (
              <img
                src={product.photos[0].formats.thumbnail.url}
                alt={link?.name || product.name}
                className={s.card__image}
              />
            ) : (
              <EmptyPhoto className={s.card__image} />
            )}
          </a>
        </Link>
        <div className={s.cart__content}>
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
            <a className={s.card__titleLink}>
              <h3 className={s.card__title}>{link?.name || product.name}</h3>
            </a>
          </Link>
          <div className={s.priceGroup}>
            <Counter value={count} onChange={setCountHandler} min={1} />
            <div className={s.price}>
              {count > 1 && (
                <span className={s.price__init}>
                  {product.price} {t('units.hrn')}
                </span>
              )}
              <span className={s.price__total}>
                {product.price * count} {t('units.hrn')}
              </span>
            </div>
          </div>
        </div>
      </div>
      <button className={s.button} onClick={removeHandler}>
        <Icon iconId='close' className={s.button__icon} />
      </button>
    </div>
  )
}

export default ProductItem
