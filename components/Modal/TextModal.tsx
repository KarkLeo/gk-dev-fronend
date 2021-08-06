import { Button, TextField } from 'components/Controllers'
import React, { useCallback, useEffect, useState } from 'react'
import Modal from './Modal'
import { UserRegister } from 'services/public'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../store/auth/thunks'
import { nameValidate } from '../../common/validators/register'

const initData: UserRegister = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  phone_number: '',
}

const initError: Record<keyof UserRegister, false | string> = {
  first_name: false,
  last_name: false,
  email: false,
  password: false,
  phone_number: false,
}

const TextModal: React.FC = () => {
  const dispatch = useDispatch()

  const [status, setStatus] = useState(false)

  const [data, setData] = useState(initData)
  const [error, setError] = useState(initError)

  useEffect(() => {
    if (!status) {
      setData(initData)
      setError(initError)
    }
  }, [status, setData, setError])

  const changeHandler = useCallback(
    (key: keyof UserRegister) => (value: string) =>
      setData({ ...data, [key]: value }),
    [data, setData]
  )

  const focusHandler = useCallback(
    (key: keyof UserRegister) => () => setError({ ...error, [key]: false }),
    [error, setError]
  )

  const blurHandler = useCallback(
    (key: keyof UserRegister) => () =>
      setError({ ...error, [key]: nameValidate(data[key]) }),
    [data, error, setError]
  )

  const sendHandler = useCallback(() => {
    dispatch(registerThunk(data))
  }, [data, dispatch])

  return (
    <>
      <button onClick={() => setStatus(true)}>Test</button>
      {status && (
        <Modal title={'Head of my modal'} close={() => setStatus(false)}>
          <TextField
            value={data.email}
            onChange={changeHandler('email')}
            type='email'
            label={'Email'}
          />
          <TextField
            value={data.phone_number}
            onChange={changeHandler('phone_number')}
            type='email'
            label={'Phone number'}
          />
          <TextField
            value={data.first_name}
            onChange={changeHandler('first_name')}
            label={'First name'}
            onFocus={focusHandler('first_name')}
            onBlur={blurHandler('first_name')}
            error={Boolean(error.first_name)}
            errorMessage={error.first_name || ''}
          />
          <TextField
            value={data.last_name}
            onChange={changeHandler('last_name')}
            label={'Last name'}
            onFocus={focusHandler('last_name')}
            onBlur={blurHandler('last_name')}
            error={Boolean(error.last_name)}
            errorMessage={error.last_name || ''}
          />
          <TextField
            value={data.password}
            onChange={changeHandler('password')}
            type='password'
            label={'Password'}
          />

          <Button onClick={sendHandler}>Login</Button>
        </Modal>
      )}
    </>
  )
}

export default TextModal
