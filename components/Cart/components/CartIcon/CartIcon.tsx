import React from 'react'
import Icon from '../../../Icon'
import s from './CartIcon.module.css'
import { useSelector } from 'react-redux'
import { getCartProductsCountSelector } from 'store/cart/selectors'

interface CartIconProps {
  className?: string
  onClick?: () => void
}

const CartIcon: React.FC<CartIconProps> = ({ className, onClick }) => {
  const count = useSelector(getCartProductsCountSelector)

  return (
    <button onClick={onClick} className={s.button}>
      <Icon iconId='cart' className={className} />
      {count > 0 && <div className={s.badge}>{count}</div>}
    </button>
  )
}

export default CartIcon
