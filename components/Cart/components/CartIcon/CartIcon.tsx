import React from 'react'
import Icon from '../../../Icon'
import s from './CartIcon.module.css'

interface CartIconProps {
  className?: string
  onClick?: () => void
}

const CartIcon: React.FC<CartIconProps> = ({ className, onClick }) => {
  return (
    <button onClick={onClick} className={s.button}>
      <Icon iconId='cart' className={className} />
      <div className={s.badge}>8</div>
    </button>
  )
}

export default CartIcon
