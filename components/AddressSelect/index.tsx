import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAddressSelector } from 'store/profile'
import AddressSelectItem from './components/AddressSelectItem/AddressSelectItem'
import { AddressForm } from '../Forms/AddressForm/AddressForm'
import {
  getInitOrderAddressSelector,
  getOrderAddressIDSelector,
  getOrderDescriptionSelector,
} from 'store/cart/selectors'
import {
  changeOrderAddressIDAction,
  setNewOrderAddressAction,
  setOrderDescriptionAction,
} from '../../store/cart'
import { UserAddress } from 'services/public'
import { checkoutThunk } from '../../store/cart/thunks'

const AddressSelect: React.FC = () => {
  const dispatch = useDispatch()

  const address = useSelector(getProfileAddressSelector)
  const addressID = useSelector(getOrderAddressIDSelector)
  const initAddress = useSelector(getInitOrderAddressSelector)
  const description = useSelector(getOrderDescriptionSelector)

  console.log(initAddress)

  const [newAddressError, setNewAddressError] = useState(false)

  const changeAddressIDHandler = useCallback(
    (id: string | null) => dispatch(changeOrderAddressIDAction(id)),
    [dispatch]
  )

  const changeDescriptionHandler = useCallback(
    (value: string) => dispatch(setOrderDescriptionAction(value)),
    [dispatch]
  )

  const setNewAddressHandler = useCallback(
    (address: UserAddress) => dispatch(setNewOrderAddressAction(address)),
    [dispatch]
  )

  const sentOrderHandler = useCallback(
    () => dispatch(checkoutThunk()),
    [dispatch]
  )

  return (
    <div>
      {address &&
        address.map((i) => (
          <AddressSelectItem
            key={i.id}
            data={i}
            select={addressID}
            onChange={changeAddressIDHandler}
          />
        ))}
      <label>
        <input
          type='radio'
          name={'AddressSelectItem'}
          checked={addressID === null}
          onChange={() => changeAddressIDHandler(null)}
        />
        New address
      </label>
      {addressID === null && (
        <AddressForm
          initAddress={initAddress}
          onSubmit={setNewAddressHandler}
          autoForm
          onError={setNewAddressError}
        />
      )}
      <div>
        <textarea
          value={description}
          onChange={(e) => {
            changeDescriptionHandler(e.target.value)
          }}
        />
      </div>
      <button
        disabled={addressID === null && newAddressError}
        onClick={sentOrderHandler}
      >
        Подтвердить
      </button>
    </div>
  )
}

export default AddressSelect
