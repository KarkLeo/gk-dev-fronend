import React, { useRef } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import useOutsideClick from 'common/hooks/useOutsideClick'
import s from './FavoriteBar.module.css'

const a = [1, 23, 3, 4, 54, 7]

interface FavoriteBar {
  outCLick: () => void
}

const FavoriteBar: React.FC<FavoriteBar> = ({ outCLick }) => {
  const rootBarRef = useRef(null)

  useOutsideClick(rootBarRef, outCLick)
  return (
    <div ref={rootBarRef} className={s.root}>
      {a.map((i) => (
        <ProductItem key={i} />
      ))}
    </div>
  )
}

export default FavoriteBar
