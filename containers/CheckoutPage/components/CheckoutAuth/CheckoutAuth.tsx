import React, { useCallback, useState } from 'react'
import { LoginForm } from 'components/Forms/LoginForm/LoginForm'
import { RegisterForm } from 'components/Forms/RegisterForm/RegisterForm'

const CheckoutAuth: React.FC = () => {
  const [status, setStatus] = useState<'LOGIN' | 'REGISTER'>('LOGIN')

  const toLogin = useCallback(() => setStatus('LOGIN'), [setStatus])
  const toRegister = useCallback(() => setStatus('REGISTER'), [setStatus])

  switch (status) {
    case 'LOGIN':
      return <LoginForm toRegister={toRegister} />
    case 'REGISTER':
      return <RegisterForm toLogin={toLogin} />
    default:
      return null
  }
}

export default CheckoutAuth
