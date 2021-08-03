import React, { useCallback, useState } from 'react'
import CartIcon from './components/CartIcon/CartIcon'
import CartBar from './components/CartBar/CartBar'
import s from './Cart.module.css'

interface CartProps {
  iconClassName?: string
}

const Cart: React.FC<CartProps> = ({ iconClassName }) => {
  const [isOpen, setOpen] = useState(false)

  const openHandler = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  const closeHandler = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <div className={s.root}>
      <CartIcon className={iconClassName} onClick={openHandler} />
      {isOpen && <CartBar outCLick={closeHandler} />}
    </div>
  )
}
export default Cart
