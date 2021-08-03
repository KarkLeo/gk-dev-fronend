import React from 'react'
import Link from 'next/link'
import Icon from '../../../Icon'
import s from './ProductItem.module.css'

const ProductItem: React.FC = () => {
  return (
    <div className={s.root}>
      <Link href='http://localhost:3000/organajzery/product/karobochka'>
        <a className={s.card}>
          <img
            src='https://picsum.photos/200'
            alt='Test'
            className={s.card__image}
          />
          <h3 className={s.card__title}>Сумка Furla Metropolis Mini Crossbo</h3>
        </a>
      </Link>
      <button className={s.button}>
        <Icon iconId='close' className={s.button__icon} />
      </button>
    </div>
  )
}

export default ProductItem
