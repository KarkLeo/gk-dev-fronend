import React, { useRef } from 'react'
import useOutsideClick from 'common/hooks/useOutsideClick'
import ProductItem from '../ProductItem/ProductItem'
import s from './CartBar.module.css'

const a = [1, 23, 3, 4, 54, 7]

interface CartBarProps {
  outCLick: () => void
}

const CartBar: React.FC<CartBarProps> = ({ outCLick }) => {
  const rootBarRef = useRef(null)

  useOutsideClick(rootBarRef, outCLick)
  return (
    <div ref={rootBarRef} className={s.root}>
      {a.map((i) => (
        <ProductItem key={i} />
      ))}
      <div className={s.total}>2443 грн</div>
    </div>
  )
}

export default CartBar
