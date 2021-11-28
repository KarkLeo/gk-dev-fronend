import React from 'react'
import ProductItem from 'components/Cart/components/ProductItem/ProductItem'
import CartTotal from 'components/Cart/components/CartTotal/CartTotal'
import { useSelector } from 'react-redux'
import { getCartProductsSelector } from 'store/cart/selectors'
import { useTranslation } from 'next-i18next'
import s from './CheckoutCart.module.css'

const CheckoutCart = () => {
  const { t } = useTranslation('common')

  const products = useSelector(getCartProductsSelector)

  return (
    <div className={s.root}>
      <div className={s.products}>
        {products.length
          ? products.map((i) => (
              <ProductItem
                key={i.product.slug}
                product={i.product}
                count={i.count}
              />
            ))
          : t('cart.empty')}
      </div>
      <CartTotal />
    </div>
  )
}

export default CheckoutCart
