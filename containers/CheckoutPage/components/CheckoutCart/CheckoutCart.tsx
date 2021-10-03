import React from 'react'
import ProductItem from 'components/Cart/components/ProductItem/ProductItem'
import { useSelector } from 'react-redux'
import {
  getCartProductsSelector,
  getTotalCartPriceSelector,
} from 'store/cart/selectors'
import { useTranslation } from 'next-i18next'
import s from './CheckoutCart.module.css'

const CheckoutCart = () => {
  const { t } = useTranslation('common')

  const products = useSelector(getCartProductsSelector)
  const total = useSelector(getTotalCartPriceSelector)

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

      {total > 0 && (
        <div className={s.total}>
          {t('cart.total_cost')}: {total} {t('units.hrn')}
        </div>
      )}
    </div>
  )
}

export default CheckoutCart
