import { useDispatch, useSelector } from 'react-redux'
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
import {
  getModalErrorSelector,
  openLoginModalAction,
  setErrorModalAction,
} from 'store/modal'

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

  //===== get error =====

  const errorForm = useSelector(getModalErrorSelector)

  //===== form checking =====

  const validateData = useMemo<RegisterValidateObject>(
    () => createRegisterValidateObject(data),
    [data]
  )

  const checkForm = useMemo<boolean>(() => checkRegisterForm(data), [data])

  //===== handlers =====

  const change = useCallback(
    (key: keyof UserRegister) => (value: string) =>
      setData((prevData) => ({ ...prevData, [key]: value })),
    [setData]
  )

  const focus = useCallback(
    (key: keyof UserRegister) => () => {
      dispatch(setErrorModalAction(null))
      setError((prevError) => ({ ...prevError, [key]: false }))
    },
    [setError, dispatch]
  )

  const blur = useCallback(
    (key: keyof UserRegister) => () =>
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
    dispatch(registerThunk(data))
  }, [data, dispatch])

  const toLogin = useCallback(() => {
    dispatch(openLoginModalAction())
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
      reCaptcha,
      send,
      toLogin,
    },
  }
}

export default useRegisterForm
