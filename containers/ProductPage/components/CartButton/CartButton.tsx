import React from 'react'
import s from './CartButton.module.css'
import { useTranslation } from 'next-i18next'

interface CartButtonProps {}

const CartButton: React.FC<CartButtonProps> = () => {
  const { t } = useTranslation('common')
  return (
    <div className={s.root}>
      <button className={s.button}>{t('cart.add')}</button>
    </div>
  )
}

export default CartButton
