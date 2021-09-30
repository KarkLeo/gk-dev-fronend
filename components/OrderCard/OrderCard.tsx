import React from 'react'
import { OrderResponse } from '../../services/public/types/orders.types'
import OrderCartItem from './components/OrderCartItem/OrderCartItem'
import OrderDeliveryInfo from './components/OrderDeliveryInfo/OrderDeliveryInfo'
import { useTranslation } from 'next-i18next'
import s from './OrderCard.module.css'

interface OrderCardProps {
  data: OrderResponse
}

const OrderCard: React.FC<OrderCardProps> = ({ data }) => {
  const date = new Date(data.date)
  const { t, i18n } = useTranslation()
  const localDate = new Intl.DateTimeFormat(i18n.language, {
    formatMatcher: 'best fit',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date)
  return (
    <div className={s.root}>
      <div className={s.head}>
        <h2 className={s.number}>{data.number}</h2>
        <p className={s.data}>{localDate}</p>
      </div>
      <div className={s.content}>
        <div className={s.cart}>
          {data.cart_item.map((i) => (
            <OrderCartItem key={i.product.id} data={i} />
          ))}
        </div>

        <div className={s.info}>
          <div className={s.cost}>
            <p className={s.cost__item}>
              <span className={s.cost__label}>{t('cart.total_cost')}:</span>
              <span className={s.cost__value}>{data.total_cost}</span>
            </p>
            <p className={s.cost__item}>
              <span className={s.cost__label}>{t('cart.discount')}:</span>
              <span className={s.cost__value}>{data.discount}</span>
            </p>
            <p className={s.cost__item}>
              <span className={s.cost__label}>
                {t('cart.discounted_cost')}:
              </span>
              <span className={s.cost__value}>{data.discounted_cost}</span>
            </p>
          </div>
          <OrderDeliveryInfo data={data.delivery_info} />
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
