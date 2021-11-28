import React, { useCallback, useState } from 'react'
import CartIcon from './components/CartIcon/CartIcon'
import CartBar from './components/CartBar/CartBar'
import s from './Cart.module.css'
import { debounce } from 'lodash'

interface CartProps {
  iconClassName?: string
}

const Cart: React.FC<CartProps> = ({ iconClassName }) => {
  const [isOpen, setOpen] = useState(false)

  const toggleHandler = useCallback(
    debounce(() => setOpen((pre) => !pre), 300, {
      leading: true,
      trailing: false,
    }),
    [setOpen]
  )

  return (
    <div className={s.root}>
      <CartIcon className={iconClassName} onClick={toggleHandler} />
      {isOpen && <CartBar outCLick={toggleHandler} />}
    </div>
  )
}
export default Cart
