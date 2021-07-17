import React from 'react'
import s from './Price.module.css'

interface PriceProps {}

const Price: React.FC<PriceProps> = () => {
  return (
    <div className={s.root}>
      <span className={s.price}>1234</span>
      <span className={s.price_old}>1900</span>
      <div className={s.price__list}>
        <span className={s.price_other}>3,1 $</span>
        <span className={s.price_other}>2,7 €</span>
        <span className={s.price_other}>239 ₽</span>
      </div>
    </div>
  )
}

export default Price
