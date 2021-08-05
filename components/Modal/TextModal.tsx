import { Button, TextField } from 'components/Controllers'
import React, { useCallback, useState } from 'react'
import Modal from './Modal'
import { UserRegister } from 'services/public'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../store/auth/thunks'

const TextModal: React.FC = () => {
  const dispatch = useDispatch()

  const [status, setStatus] = useState(false)

  const [data, setData] = useState<UserRegister>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  })

  const changeFirstNameHandler = useCallback(
    (first_name: string) => {
      setData({ ...data, first_name })
    },
    [data, setData]
  )
  const changeLastNameHandler = useCallback(
    (last_name: string) => {
      setData({ ...data, last_name })
    },
    [data, setData]
  )
  const changeEmailNameHandler = useCallback(
    (email: string) => {
      setData({ ...data, email })
    },
    [data, setData]
  )
  const changePasswordNameHandler = useCallback(
    (password: string) => {
      setData({ ...data, password })
    },
    [data, setData]
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
            onChange={changeEmailNameHandler}
            type='email'
            label={'Login'}
          />
          <TextField
            value={data.first_name}
            onChange={changeFirstNameHandler}
            label={'First name'}
          />
          <TextField
            value={data.last_name}
            onChange={changeLastNameHandler}
            label={'First name'}
          />
          <TextField
            value={data.password}
            onChange={changePasswordNameHandler}
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
