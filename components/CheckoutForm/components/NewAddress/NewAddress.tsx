import React, { useCallback } from 'react'
import { AddressForm } from 'components/Forms/AddressForm/AddressForm'
import { useDispatch, useSelector } from 'react-redux'
import { getInitOrderAddressSelector } from 'store/cart/selectors'
import { UserAddress } from 'services/public'
import { setNewOrderAddressAction } from 'store/cart'
import { useTranslation } from 'next-i18next'
import s from './NewAddress.module.css'
import classNames from 'classnames/bind'

interface NewAddressProps {
  addressID: string | null
  changeAddressID: (value: string | null) => void
  setNewAddressError: (value: boolean) => void
}

const NewAddress: React.FC<NewAddressProps> = ({
  addressID,
  changeAddressID,
  setNewAddressError,
}) => {
  const initAddress = useSelector(getInitOrderAddressSelector)
  const dispatch = useDispatch()
  const { t } = useTranslation('common')

  const setNewAddressHandler = useCallback(
    (address: UserAddress) => dispatch(setNewOrderAddressAction(address)),
    [dispatch]
  )
  return (
    <div
      className={classNames(s.root, { [s.root_active]: addressID === null })}
    >
      <label className={s.button}>
        <input
          className={s.input}
          type='radio'
          name={'AddressSelectItem'}
          checked={addressID === null}
          onChange={() => changeAddressID(null)}
        />
        {t('checkout.new_address')}
      </label>
      {addressID === null && (
        <AddressForm
          initAddress={initAddress}
          onSubmit={setNewAddressHandler}
          autoForm
          onError={setNewAddressError}
        />
      )}
    </div>
  )
}

export default NewAddress
