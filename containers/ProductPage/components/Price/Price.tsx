import React from 'react'
import s from './Price.module.css'

interface PriceProps {
  price: number
  old_price: number | null
  wholesale_price: number | null
}

const Price: React.FC<PriceProps> = ({ price, old_price, wholesale_price }) => {
  return (
    <div className={s.root}>
      <span className={s.price}>{price}</span>
      {old_price && old_price > price ? (
        <span className={s.price_old}>{old_price}</span>
      ) : null}
      <div className={s.price__list}>
        <span className={s.price_other}>3,1 $</span>
        <span className={s.price_other}>2,7 €</span>
        <span className={s.price_other}>239 ₽</span>
      </div>
    </div>
  )
}

export default Price
