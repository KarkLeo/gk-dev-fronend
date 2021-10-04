import React from 'react'
import s from './Price.module.css'
import { useSelector } from 'react-redux'
import { getCurrencySelector } from 'store/currency'
import { useTranslation } from 'next-i18next'

interface PriceProps {
  price: number
  old_price: number | null
  wholesale_price: number | null
}

const Price: React.FC<PriceProps> = ({ price, old_price, wholesale_price }) => {
  const { t } = useTranslation('common')
  const currency = useSelector(getCurrencySelector)

  return (
    <div className={s.root}>
      <span className={s.price}>
        {price} {t('units.hrn')}
      </span>
      {old_price && old_price > price ? (
        <span className={s.price_old}>
          {old_price} {t('units.hrn')}
        </span>
      ) : null}
      <div className={s.price__list}>
        {currency.USD && (
          <span className={s.price_other}>
            {(price / currency.USD).toFixed(2)} $
          </span>
        )}
        {currency.EUR && (
          <span className={s.price_other}>
            {(price / currency.EUR).toFixed(2)} €
          </span>
        )}
        {currency.RUR && (
          <span className={s.price_other}>
            {(price / currency.RUR).toFixed(2)} ₽
          </span>
        )}
      </div>
    </div>
  )
}

export default Price
