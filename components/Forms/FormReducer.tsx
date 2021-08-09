import React from 'react'
import { ModalType } from 'store/modal'
import { LoginForm } from './LoginForm/LoginForm'
import { RegisterForm } from './RegisterForm/RegisterForm'

interface FormReducerProps {
  modal: ModalType | null
}

const FormReducer: React.FC<FormReducerProps> = ({ modal }) => {
  switch (modal) {
    case 'LOGIN':
      return <LoginForm />
    case 'REGISTER':
      return <RegisterForm />
    default:
      return null
  }
}

export default FormReducer
