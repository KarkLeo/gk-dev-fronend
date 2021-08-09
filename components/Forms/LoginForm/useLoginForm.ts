import { useDispatch } from 'react-redux'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { UserLogin } from 'services/public'
import { loginThunk } from 'store/auth'
import {
  checkLoginForm,
  createLoginValidateObject,
  initLoginData,
  initLoginError,
  LoginValidateObject,
} from 'common/validators/login'
import { openRegisterModalAction } from 'store/modal'

const useLoginForm = () => {
  const dispatch = useDispatch()

  //===== create local state =====

  const [data, setData] = useState(initLoginData)
  const [error, setError] = useState(initLoginError)

  useEffect(
    () => () => {
      setData(initLoginData)
      setError(initLoginError)
    },
    [setData, setError]
  )

  //===== form checking =====

  const validateData = useMemo<LoginValidateObject>(
    () => createLoginValidateObject(data),
    [data]
  )

  const checkForm = useMemo<boolean>(() => checkLoginForm(data), [data])

  //===== handlers =====

  const change = useCallback(
    (key: keyof UserLogin) => (value: string) =>
      setData({ ...data, [key]: value }),
    [data, setData]
  )

  const focus = useCallback(
    (key: keyof UserLogin) => () => setError({ ...error, [key]: false }),
    [error, setError]
  )

  const blur = useCallback(
    (key: keyof UserLogin) => () =>
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
    dispatch(loginThunk(data))
  }, [data, dispatch])

  const toRegister = useCallback(() => {
    dispatch(openRegisterModalAction())
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
      toRegister,
    },
  }
}

export default useLoginForm
