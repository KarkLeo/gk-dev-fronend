import React from 'react'
import s from './CartButton.module.css'

interface CartButtonProps {}

const CartButton: React.FC<CartButtonProps> = () => {
  return (
    <div className={s.root}>
      <button className={s.button}>Купить</button>
    </div>
  )
}

export default CartButton
