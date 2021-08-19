import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { UserProfile } from 'services/public'
import { getModalErrorSelector, setErrorModalAction } from 'store/modal'
import { getInitProfileFormSelector, updateProfileThunk } from 'store/profile'
import {
  checkProfileForm,
  createProfileValidateObject,
  initProfileError,
  ProfileValidateObject,
} from 'common/validators/profile'

const useEditProfileForm = () => {
  const dispatch = useDispatch()

  const initProfile = useSelector(getInitProfileFormSelector)

  //===== create local state =====

  const [data, setData] = useState(initProfile)
  const [error, setError] = useState(initProfileError)

  //===== get error =====
  const errorForm = useSelector(getModalErrorSelector)

  useEffect(
    () => () => {
      setData(initProfile)
      setError(initProfileError)
    },
    [setData, setError, initProfile]
  )

  //===== form checking =====

  const validateData = useMemo<ProfileValidateObject>(
    () => createProfileValidateObject(data),
    [data]
  )

  const checkForm = useMemo<boolean>(() => checkProfileForm(data), [data])

  //===== handlers =====

  const change = useCallback(
    (key: keyof UserProfile) => (value: string) =>
      setData((prevData) => ({ ...prevData, [key]: value })),
    [setData]
  )

  const focus = useCallback(
    (key: keyof UserProfile) => () => {
      dispatch(setErrorModalAction(null))
      setError((prevError) => ({ ...prevError, [key]: false }))
    },
    [setError, dispatch]
  )

  const blur = useCallback(
    (key: keyof UserProfile) => () =>
      setError((prevError) => ({ ...prevError, [key]: validateData[key]() })),
    [validateData, setError]
  )

  const send = useCallback(() => {
    dispatch(updateProfileThunk(data))
  }, [data, dispatch])

  const cancel = useCallback(() => {
    setData(initProfile)
  }, [setData, initProfile])

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

export default useEditProfileForm
