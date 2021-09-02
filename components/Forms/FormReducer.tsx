import React, { useCallback } from 'react'
import {
  ModalType,
  openLoginModalAction,
  openRegisterModalAction,
} from 'store/modal'
import { LoginForm } from './LoginForm/LoginForm'
import { RegisterForm } from './RegisterForm/RegisterForm'
import { useDispatch } from 'react-redux'

interface FormReducerProps {
  modal: ModalType | null
}

const FormReducer: React.FC<FormReducerProps> = ({ modal }) => {
  const dispatch = useDispatch()

  const toLogin = useCallback(
    () => dispatch(openLoginModalAction()),
    [dispatch]
  )
  const toRegister = useCallback(
    () => dispatch(openRegisterModalAction()),
    [dispatch]
  )

  switch (modal) {
    case 'LOGIN':
      return <LoginForm toRegister={toRegister} />
    case 'REGISTER':
      return <RegisterForm toLogin={toLogin} />
    default:
      return null
  }
}

export default FormReducer
