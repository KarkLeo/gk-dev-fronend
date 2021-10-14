import { useDispatch, useSelector } from 'react-redux'
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
import { getModalErrorSelector, setErrorModalAction } from 'store/modal'

const useLoginForm = (toRegister: () => void) => {
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

  //===== get error =====

  const errorForm = useSelector(getModalErrorSelector)

  //===== form checking =====

  const validateData = useMemo<LoginValidateObject>(
    () => createLoginValidateObject(data),
    [data]
  )

  const checkForm = useMemo<boolean>(() => checkLoginForm(data), [data])

  //===== handlers =====

  const change = useCallback(
    (key: keyof UserLogin) => (value: string) =>
      setData((prevData) => ({ ...prevData, [key]: value })),
    [setData]
  )

  const focus = useCallback(
    (key: keyof UserLogin) => () => {
      dispatch(setErrorModalAction(null))
      setError((prevError) => ({ ...prevError, [key]: false }))
    },
    [setError, dispatch]
  )

  const blur = useCallback(
    (key: keyof UserLogin) => () =>
      setError((prevError) => ({ ...prevError, [key]: validateData[key]() })),
    [validateData, setError]
  )

  const reCaptcha = useCallback(
    (token: string) => {
      setData((prevData) => ({ ...prevData, reCapture: token }))
    },
    [setData]
  )

  const send = useCallback(() => {
    dispatch(loginThunk(data))
  }, [data, dispatch])

  const toRegisterHandler = useCallback(() => {
    toRegister()
  }, [toRegister])

  return {
    data,
    error,
    isError: !checkForm,
    errorForm,
    handlers: {
      change,
      focus,
      blur,
      reCaptcha,
      send,
      toRegister: toRegisterHandler,
    },
  }
}

export default useLoginForm
