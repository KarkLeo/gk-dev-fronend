import React, { useState } from 'react'
import Link from 'next/link'
import Icon from '../../../Icon'
import s from './ProductItem.module.css'
import Counter from 'components/Counter/Counter'

const ProductItem: React.FC = () => {
  const price = 1234
  const [count, setCount] = useState(1)

  return (
    <div className={s.root}>
      <Link href='http://localhost:3000/organajzery/product/karobochka'>
        <a className={s.card}>
          <img
            src='https://picsum.photos/200'
            alt='Test'
            className={s.card__image}
          />
          <div className={s.cart__content}>
            <h3 className={s.card__title}>
              Сумка Furla Metropolis Mini Crossbo
            </h3>
            <div className={s.priceGroup}>
              <Counter value={count} onChange={setCount} min={1} />
              <div className={s.price}>
                {count > 1 && (
                  <span className={s.price__init}>{price} грн</span>
                )}
                <span className={s.price__total}>{price * count} грн</span>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <button className={s.button}>
        <Icon iconId='close' className={s.button__icon} />
      </button>
    </div>
  )
}

export default ProductItem
