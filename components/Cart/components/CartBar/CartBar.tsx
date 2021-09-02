import Link from 'next/link'
import React, { useRef } from 'react'
import useOutsideClick from 'common/hooks/useOutsideClick'
import ProductItem from '../ProductItem/ProductItem'
import s from './CartBar.module.css'
import { useSelector } from 'react-redux'
import {
  getCartProductsSelector,
  getTotalCartPriceSelector,
} from 'store/cart/selectors'
import { CHECKOUT_PAGE_URL } from 'route'

interface CartBarProps {
  outCLick?: () => void
}

const CartBar: React.FC<CartBarProps> = ({ outCLick }) => {
  const rootBarRef = useRef(null)

  useOutsideClick(rootBarRef, outCLick)

  const products = useSelector(getCartProductsSelector)
  const total = useSelector(getTotalCartPriceSelector)
  return (
    <div ref={rootBarRef} className={s.root}>
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
      {products.length > 0 && (
        <Link href={CHECKOUT_PAGE_URL}>
          <a className={s.total}>Checkout</a>
        </Link>
      )}
    </div>
  )
}

export default CartBar
