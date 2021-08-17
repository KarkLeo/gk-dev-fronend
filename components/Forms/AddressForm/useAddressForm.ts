import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { UserAddress } from 'services/public'
import { getModalErrorSelector, setErrorModalAction } from 'store/modal'
import {
  AddressValidateObject,
  checkAddressForm,
  createAddressValidateObject,
  initAddressData,
  initAddressError,
} from 'common/validators/address'

const useAddressForm = () => {
  const dispatch = useDispatch()

  //===== create local state =====

  const [data, setData] = useState(initAddressData)
  const [error, setError] = useState(initAddressError)

  //===== get error =====
  const errorForm = useSelector(getModalErrorSelector)

  useEffect(
    () => () => {
      setData(initAddressData)
      setError(initAddressError)
    },
    [setData, setError]
  )

  //===== form checking =====

  const validateData = useMemo<AddressValidateObject>(
    () => createAddressValidateObject(data),
    [data]
  )

  const checkForm = useMemo<boolean>(() => checkAddressForm(data), [data])

  //===== handlers =====

  const change = useCallback(
    (key: keyof UserAddress) => (value: string) =>
      setData((prevData) => ({ ...prevData, [key]: value })),
    [setData]
  )

  const focus = useCallback(
    (key: keyof UserAddress) => () => {
      dispatch(setErrorModalAction(null))
      setError((prevError) => ({ ...prevError, [key]: false }))
    },
    [setError, dispatch]
  )

  const blur = useCallback(
    (key: keyof UserAddress) => () =>
      setError((prevError) => ({ ...prevError, [key]: validateData[key]() })),
    [validateData, setError]
  )

  const isNovaposhta = useCallback(() => {
    setData((prevData) => ({
      ...prevData,
      is_novaposhta: !prevData.is_novaposhta,
    }))
  }, [setData])

  const send = useCallback(() => {
    console.log(data)
  }, [data, dispatch])

  const cancel = useCallback(() => {
    console.log('cancel')
  }, [dispatch])

  return {
    data,
    error,
    isError: !checkForm,
    errorForm,
    handlers: {
      change,
      focus,
      blur,
      isNovaposhta,
      send,
      cancel,
    },
  }
}

export default useAddressForm
