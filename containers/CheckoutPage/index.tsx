import React from 'react'
import Layout from 'components/Layout'
import { MetaData } from 'services/static'
import s from './CheckoutPage.module.css'
import { useTranslation } from 'next-i18next'
import ProductItem from '../../components/Cart/components/ProductItem/ProductItem'
import { useSelector } from 'react-redux'
import {
  getCartProductsSelector,
  getTotalCartPriceSelector,
} from '../../store/cart/selectors'
import AddressSelect from '../../components/AddressSelect'
import { getIsAuthSelector } from '../../store/auth'
import CheckoutAuth from './components/CheckoutAuth/CheckoutAuth'

interface CheckoutPageProps {
  meta: MetaData
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ meta }) => {
  const { t } = useTranslation('common')

  const products = useSelector(getCartProductsSelector)

  const total = useSelector(getTotalCartPriceSelector)

  const isAuth = useSelector(getIsAuthSelector)
  return (
    <Layout meta={meta}>
      <h1>Checkout page</h1>
      <div className={s.grid}>
        <div>
          {products.length
            ? products.map((i) => (
                <ProductItem
                  key={i.product.slug}
                  product={i.product}
                  count={i.count}
                />
              ))
            : 'Ваша корзина пуста'}
          {total > 0 && <div className={s.total}>{total}</div>}
        </div>
        <div>{isAuth ? <AddressSelect /> : <CheckoutAuth />}</div>
      </div>
    </Layout>
  )
}

export default CheckoutPage
