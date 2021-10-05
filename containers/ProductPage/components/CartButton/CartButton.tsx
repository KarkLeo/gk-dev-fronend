import React from 'react'
import s from './CartButton.module.css'
import { useTranslation } from 'next-i18next'

interface CartButtonProps {
  addToCard: () => void
}

const CartButton: React.FC<CartButtonProps> = ({ addToCard }) => {
  const { t } = useTranslation('common')
  return (
    <div className={s.root}>
      <button className={s.button} onClick={addToCard}>
        {t('cart.add')}
      </button>
    </div>
  )
}

export default CartButton
