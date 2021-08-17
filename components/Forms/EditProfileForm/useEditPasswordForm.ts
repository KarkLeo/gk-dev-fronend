import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { UserPassword } from 'services/public'
import { getModalErrorSelector, setErrorModalAction } from 'store/modal'
import {
  checkPasswordForm,
  createPasswordValidateObject,
  initPasswordData,
  initPasswordError,
  PasswordValidateObject,
} from 'common/validators/password'

const useEditPasswordForm = () => {
  const dispatch = useDispatch()

  //===== create local state =====

  const [data, setData] = useState(initPasswordData)
  const [error, setError] = useState(initPasswordError)

  useEffect(
    () => () => {
      setData(initPasswordData)
      setError(initPasswordError)
    },
    [setData, setError]
  )

  //===== get error =====

  const errorForm = useSelector(getModalErrorSelector)

  //===== form checking =====

  const validateData = useMemo<PasswordValidateObject>(
    () => createPasswordValidateObject(data),
    [data]
  )

  const checkForm = useMemo<boolean>(() => checkPasswordForm(data), [data])

  //===== handlers =====

  const change = useCallback(
    (key: keyof UserPassword) => (value: string) =>
      setData((prevData) => ({ ...prevData, [key]: value })),
    [setData]
  )

  const focus = useCallback(
    (key: keyof UserPassword) => () => {
      dispatch(setErrorModalAction(null))
      setError((prevError) => ({ ...prevError, [key]: false }))
    },
    [setError, dispatch]
  )

  const blur = useCallback(
    (key: keyof UserPassword) => () =>
      setError((prevError) => ({ ...prevError, [key]: validateData[key]() })),
    [validateData, setError]
  )

  const send = useCallback(() => {
    console.log(data)
  }, [data, dispatch])

  const cancel = useCallback(() => {
    setData(initPasswordData)
  }, [setData])

  return {
    data,
    error,
    isError: !checkForm,
    errorForm,
    handlers: {
      change,
      focus,
      blur,
      send,
      cancel,
    },
  }
}

export default useEditPasswordForm
