import React, { useCallback } from 'react'
import SimpleOrderForm from 'components/Forms/SimpleOrderForm/SimpleOrderForm'
import { useDispatch } from 'react-redux'
import { checkoutSimpleThunk } from 'store/cart'
import { SimpleOrderFormType } from 'services/public'

const SimpleCheckoutForm = () => {
  const dispatch = useDispatch()

  const onSubmitHandler = useCallback(
    (data: SimpleOrderFormType) => {
      dispatch(checkoutSimpleThunk(data))
    },
    [dispatch]
  )

  return <SimpleOrderForm onSubmit={onSubmitHandler} />
}

export default SimpleCheckoutForm
