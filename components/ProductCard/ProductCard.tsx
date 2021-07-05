import React from 'react'
import s from './ProductCard.module.css'

interface ProductCardProps {
  title?: string
}

const ProductCard: React.FC<ProductCardProps> = ({ title }) => {
  return (
    <div className={s.wrap}>
      <div className={s.card}>
        <a
          className={s.link}
          href='https://www.google.com/search?q=dfs&oq=dfs&aqs=chrome..69i57j0l5j0i10j0l3.384j0j7&sourceid=chrome&ie=UTF-8'
        >
          <div className={s.image}>
            <img
              className={s.image__source}
              src='https://picsum.photos/400/400'
              alt='title'
            />
          </div>
          <h3 className={s.title}>
            {title ? title : 'Сумка Furla Share L Tote'}
          </h3>
        </a>
        <div className={s.grid}>
          <div className={s.price__list}>
            <span className={s.price_other}>3,1 $</span>
            <span className={s.price_other}>2,7 €</span>
            <span className={s.price_other}>239 ₽</span>
          </div>
          <span className={s.code}>213869</span>
          <div className={s.price__wrap}>
            <span className={s.price}>210 грн</span>
            <span className={s.price_old}>190 грн</span>
          </div>
          <button className={s.button}>Купить</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
