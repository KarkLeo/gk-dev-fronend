import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAddressSelector } from 'store/profile'
import AddressSelectItem from './components/AddressSelectItem/AddressSelectItem'
import { getOrderAddressIDSelector } from 'store/cart/selectors'
import { changeOrderAddressIDAction } from 'store/cart'
import { checkoutThunk } from 'store/cart/thunks'
import { useTranslation } from 'next-i18next'
import NewAddress from './components/NewAddress/NewAddress'
import s from './CheckoutForm.module.css'
import { Button } from '../Controllers'
import Description from './components/Description/Description'

const CheckoutForm: React.FC = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation('common')

  const address = useSelector(getProfileAddressSelector)
  const addressID = useSelector(getOrderAddressIDSelector)

  const [newAddressError, setNewAddressError] = useState(false)

  const changeAddressIDHandler = useCallback(
    (id: string | null) => dispatch(changeOrderAddressIDAction(id)),
    [dispatch]
  )

  const sentOrderHandler = useCallback(
    () => dispatch(checkoutThunk()),
    [dispatch]
  )

  return (
    <div className={s.root}>
      <div className={s.block}>
        <h3 className={s.title}>{t('checkout.delivery')}:</h3>
        {address &&
          address.map((i) => (
            <AddressSelectItem
              key={i.id}
              data={i}
              select={addressID}
              onChange={changeAddressIDHandler}
            />
          ))}
        <NewAddress
          addressID={addressID}
          changeAddressID={changeAddressIDHandler}
          setNewAddressError={setNewAddressError}
        />
      </div>
      <div className={s.block}>
        <h3 className={s.title}>{t('checkout.comment')}:</h3>
        <Description />
      </div>
      <Button
        primary
        disabled={addressID === null && newAddressError}
        onClick={sentOrderHandler}
      >
        {t('checkout.confirm')}
      </Button>
    </div>
  )
}

export default CheckoutForm
