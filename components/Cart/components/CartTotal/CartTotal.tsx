import React from 'react'
import { useSelector } from 'react-redux'
import { getCartFullInfoSelector } from 'store/cart'
import useCartMessage from 'common/hooks/useCartMessage'
import s from './CartTotal.module.css'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'

const CartTotal: React.FC = () => {
  const [cartInfo, messageInfo] = useSelector(getCartFullInfoSelector)
  const message = useCartMessage(messageInfo)
  const { t } = useTranslation('common')

  return cartInfo.totalCost > 0 ? (
    <div className={s.root}>
      <div
        className={classNames(s.item, {
          [s.item_cost]: cartInfo.discount <= 0,
        })}
      >
        <span>{t('cart.total_cost')}: </span>
        {cartInfo.totalCost} {t('units.hrn')}
      </div>
      {cartInfo.discount > 0 && (
        <div className={s.item}>
          <span>{t('cart.discount')}: </span>
          {cartInfo.discount} {t('units.hrn')}
        </div>
      )}
      {cartInfo.discount > 0 && (
        <div className={classNames(s.item, s.item_cost)}>
          <span>{t('cart.discounted_cost')}: </span>
          {cartInfo.discountedCost} {t('units.hrn')}
        </div>
      )}
      {message && cartInfo.totalCost > 0 && (
        <p className={s.message}>{message}</p>
      )}
    </div>
  ) : null
}

export default CartTotal
