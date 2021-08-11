import React, { useRef } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import useOutsideClick from 'common/hooks/useOutsideClick'
import s from './FavoriteBar.module.css'
import { useSelector } from 'react-redux'
import { getFavoriteProductsSelector } from 'store/favorite/selectors'

interface FavoriteBarProps {
  outCLick: () => void
}

const FavoriteBar: React.FC<FavoriteBarProps> = ({ outCLick }) => {
  const rootBarRef = useRef(null)
  useOutsideClick(rootBarRef, outCLick)

  const products = useSelector(getFavoriteProductsSelector)
  return (
    <div ref={rootBarRef} className={s.root}>
      {products.length
        ? products.map((i) => <ProductItem key={i.slug} product={i} />)
        : 'Ваш список желаний пуст'}
    </div>
  )
}

export default FavoriteBar
