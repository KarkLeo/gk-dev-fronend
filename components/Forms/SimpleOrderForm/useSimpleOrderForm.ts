import { useCallback, useEffect, useMemo, useState } from 'react'
import { SimpleOrderFormProps } from './SimpleOrderForm'
import {
  checkSimpleOrderForm,
  createSimpleOrderValidateObject,
  initSimpleOrder,
  initSimpleOrderError,
  SimpleOrderValidateObject,
} from 'common/validators/simple-order'
import { SimpleOrderFormType } from 'services/public'

const useSimpleOrderForm = (props: SimpleOrderFormProps) => {
  const { initData, onSubmit, onCancel } = props
  //===== create local state =====

  const [data, setData] = useState(initSimpleOrder || initData)
  const [error, setError] = useState(initSimpleOrderError)

  useEffect(() => {
    setData(initSimpleOrder || initData)
    setError(initSimpleOrderError)
  }, [setData, setError, initData])

  //===== form checking =====

  const validateData = useMemo<SimpleOrderValidateObject>(
    () => createSimpleOrderValidateObject(data),
    [data]
  )

  const checkForm = useMemo<boolean>(() => checkSimpleOrderForm(data), [data])

  //===== handlers =====

  const change = useCallback(
    (key: keyof SimpleOrderFormType) => (value: string) =>
      setData((prevData) => ({ ...prevData, [key]: value })),
    [setData]
  )

  const focus = useCallback(
    (key: keyof SimpleOrderFormType) => () =>
      setError((prevError) => ({ ...prevError, [key]: false })),
    [setError]
  )

  const blur = useCallback(
    (key: keyof SimpleOrderFormType) => () =>
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

  const reCaptcha = useCallback(
    (token: string) => {
      setData((prevData) => ({ ...prevData, reCapture: token }))
    },
    [setData]
  )

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
      reCaptcha,
    },
  }
}

export default useSimpleOrderForm
