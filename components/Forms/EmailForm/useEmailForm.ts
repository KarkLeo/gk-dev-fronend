import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { UserEmail, UserLogin } from 'services/public'
import { loginThunk } from 'store/auth'
import {
  checkLoginForm,
  createLoginValidateObject,
  initLoginData,
  initLoginError,
  LoginValidateObject,
} from 'common/validators/login'
import { getModalErrorSelector, setErrorModalAction } from 'store/modal'
import {
  checkEmailForm,
  createEmailValidateObject,
  EmailValidateObject,
  initEmailData,
  initEmailError,
} from 'common/validators/email'

const useEmailForm = (
  onChangeEmail: (email: string) => void,
  onValidate: (isError: boolean) => void
) => {
  const dispatch = useDispatch()

  //===== create local state =====

  const [data, setData] = useState(initEmailData)
  const [error, setError] = useState(initEmailError)

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

  const validateData = useMemo<EmailValidateObject>(
    () => createEmailValidateObject(data),
    [data]
  )

  const checkForm = useMemo<boolean>(() => checkEmailForm(data), [data])

  //===== handlers =====

  const change = useCallback(
    (key: keyof UserEmail) => (value: string) =>
      setData((prevData) => ({ ...prevData, [key]: value })),
    [setData]
  )

  const focus = useCallback(
    (key: keyof UserEmail) => () => {
      onValidate(false)
      setError((prevError) => ({ ...prevError, [key]: false }))
    },
    [setError, onValidate]
  )

  const blur = useCallback(
    (key: keyof UserEmail) => () =>
      setError((prevError) => ({ ...prevError, [key]: validateData[key]() })),
    [validateData, setError]
  )

  const reCaptcha = useCallback(
    (token: string) => {
      setData((prevData) => ({ ...prevData, reCapture: token }))
    },
    [setData]
  )

  useEffect(() => {
    onValidate(!checkForm)
  }, [onValidate, checkForm])

  useEffect(() => {
    onChangeEmail(data.email)
  }, [onChangeEmail, data])

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
    },
  }
}

export default useEmailForm
