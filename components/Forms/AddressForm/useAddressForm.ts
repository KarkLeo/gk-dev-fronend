import { useCallback, useEffect, useMemo, useState } from 'react'
import { UserAddress } from 'services/public'
import {
  AddressValidateObject,
  checkAddressForm,
  createAddressValidateObject,
  initAddressData,
  initAddressError,
} from 'common/validators/address'
import { AddressFormProps } from './AddressForm'

const useAddressForm = (props: AddressFormProps) => {
  const { initAddress, autoForm, onSubmit, onError, onCancel } = props
  //===== create local state =====

  const [data, setData] = useState(initAddress || initAddressData)
  const [error, setError] = useState(initAddressError)

  useEffect(() => {
    setData(initAddress || initAddressData)
    setError(initAddressError)
  }, [setData, setError, initAddress])

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

  const send = useCallback(() => {
    onSubmit && onSubmit(data)
  }, [data, onSubmit])

  const cancel = useCallback(() => {
    onCancel && onCancel()
  }, [onCancel])

  //===== Auto form =====

  useEffect(() => {
    if (autoForm && onSubmit) onSubmit(data)
  }, [autoForm, onSubmit, data])

  useEffect(() => {
    if (autoForm && onError) onError(!checkForm)
  }, [autoForm, onError, checkForm])

  return {
    data,
    error,
    isError: !checkForm,
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
