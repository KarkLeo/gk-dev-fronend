import React from 'react'
import { Button, TextField } from '../../Controllers'
import ReCaptcha from '../../ReCature/ReCature'
import useLoginForm from './useLoginForm'
import s from '../FormStyle.module.css'

interface LoginFormProps {
  toRegister: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ toRegister }) => {
  const { data, error, isError, errorForm, handlers } = useLoginForm(toRegister)

  return (
    <div className={s.root}>
      <div className={s.grid}>
        <TextField
          value={data.email}
          onChange={handlers.change('email')}
          type='email'
          label={'Email'}
          onFocus={handlers.focus('email')}
          onBlur={handlers.blur('email')}
          error={Boolean(error.email)}
          errorMessage={error.email || ''}
        />
        <TextField
          value={data.password}
          onChange={handlers.change('password')}
          type='password'
          label={'Password'}
          onFocus={handlers.focus('password')}
          onBlur={handlers.blur('password')}
          error={Boolean(error.password)}
          errorMessage={error.password || ''}
        />
      </div>
      {errorForm && <p>{errorForm}</p>}
      <div className={s.controls}>
        <Button onClick={handlers.send} disabled={isError}>
          Send
        </Button>
        <Button onClick={handlers.toRegister}>Register</Button>
      </div>
      <ReCaptcha key={errorForm} onChange={handlers.reCaptcha} />
    </div>
  )
}
