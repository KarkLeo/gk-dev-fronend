import React, { useMemo } from 'react'
import { OrderCartItemResponse } from 'services/public/types/orders.types'
import { useTranslation } from 'next-i18next'
import createProductLinkFromLocale from 'common/utils/createProductLinkFromLocale'
import Link from 'next/link'
import { PRODUCT_PAGE_URL } from 'route'
import s from './OrderCartItem.module.css'
import EmptyPhoto from '../../../EmptyPhoto/EmptyPhoto'

interface OrderCartItemProps {
  data: OrderCartItemResponse
}

const OrderCartItem: React.FC<OrderCartItemProps> = ({ data }) => {
  const { i18n } = useTranslation()
  const link = useMemo(
    () => createProductLinkFromLocale(data.product, i18n.language),
    [data.product, i18n]
  )

  return (
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
      <a className={s.root}>
        {data.product.photos.length ? (
          <img
            src={data.product.photos[0].formats.thumbnail.url}
            alt={link?.name || data.product.name}
            className={s.image}
          />
        ) : (
          <EmptyPhoto className={s.image} />
        )}
        <div className={s.content}>
          <h3 className={s.title}>{link?.name || data.product.name}</h3>
          <div className={s.options}>
            <p className={s.count}>{data.count}</p>
            <div className={s.price}>
              {data.count > 1 && (
                <span className={s.price__init}>{data.current_price} грн</span>
              )}
              <span className={s.price__total}>
                {data.count * data.current_price} грн
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default OrderCartItem
