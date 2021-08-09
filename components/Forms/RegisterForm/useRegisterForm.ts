import { useDispatch } from 'react-redux'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  checkRegisterForm,
  createRegisterValidateObject,
  initRegisterData,
  initRegisterError,
  RegisterValidateObject,
} from 'common/validators/register'
import { UserRegister } from 'services/public'
import { registerThunk } from 'store/auth/'
import { openLoginModalAction } from 'store/modal'

const useRegisterForm = () => {
  const dispatch = useDispatch()

  //===== create local state =====

  const [data, setData] = useState(initRegisterData)
  const [error, setError] = useState(initRegisterError)

  useEffect(
    () => () => {
      setData(initRegisterData)
      setError(initRegisterError)
    },
    [setData, setError]
  )

  //===== form checking =====

  const validateData = useMemo<RegisterValidateObject>(
    () => createRegisterValidateObject(data),
    [data]
  )

  const checkForm = useMemo<boolean>(() => checkRegisterForm(data), [data])

  //===== handlers =====

  const change = useCallback(
    (key: keyof UserRegister) => (value: string) =>
      setData({ ...data, [key]: value }),
    [data, setData]
  )

  const focus = useCallback(
    (key: keyof UserRegister) => () => setError({ ...error, [key]: false }),
    [error, setError]
  )

  const blur = useCallback(
    (key: keyof UserRegister) => () =>
      setError({ ...error, [key]: validateData[key]() }),
    [validateData, error, setError]
  )

  const reCaptcha = useCallback(
    (token: string) => {
      setData({ ...data, reCapture: token })
    },
    [data, setData]
  )

  const send = useCallback(() => {
    dispatch(registerThunk(data))
  }, [data, dispatch])

  const toLogin = useCallback(() => {
    dispatch(openLoginModalAction())
  }, [dispatch])

  return {
    data,
    error,
    isError: !checkForm,
    handlers: {
      change,
      focus,
      blur,
      reCaptcha,
      send,
      toLogin,
    },
  }
}

export default useRegisterForm
