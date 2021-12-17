import { useCallback, useEffect, useMemo, useState } from 'react'
import { UserAddress } from 'services/public'
import {
  AddressValidateObject,
  checkOrderAddressForm,
  createOrderAddressValidateObject,
  initAddressData,
  initAddressError,
} from 'common/validators/address'
import { OrderAddressFormProps } from './OrderAddressForm'

const useOrderAddressForm = (props: OrderAddressFormProps) => {
  const { initAddress, onSubmit, onError } = props
  //===== create local state =====

  const [data, setData] = useState(initAddress || initAddressData)
  const [error, setError] = useState(initAddressError)

  useEffect(() => {
    setData(initAddress || initAddressData)
    setError(initAddressError)
  }, [setData, setError, initAddress])

  //===== form checking =====

  const validateData = useMemo<AddressValidateObject>(
    () => createOrderAddressValidateObject(data),
    [data]
  )

  const checkForm = useMemo<boolean>(() => checkOrderAddressForm(data), [data])

  //===== handlers =====

  const change = useCallback(
    (key: keyof UserAddress) => (value: string) =>
      setData((prevData) => ({ ...prevData, [key]: value })),
    [setData]
  )

  const focus = useCallback(
    (key: keyof UserAddress) => () =>
      setError((prevError) => ({ ...prevError, [key]: false })),
    [setError]
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

  //===== Auto form =====

  useEffect(() => {
    if (onSubmit) onSubmit(data)
  }, [onSubmit, data])

  useEffect(() => {
    if (onError) onError(!checkForm)
  }, [onError, checkForm])

  return {
    data,
    error,
    isError: !checkForm,
    handlers: {
      change,
      focus,
      blur,
      isNovaposhta,
    },
  }
}

export default useOrderAddressForm
