import React from 'react'
import { Button, TextField } from '../../Controllers'
import ReCaptcha from '../../ReCature/ReCature'
import useRegisterForm from './useRegisterForm'
import s from '../FormStyle.module.css'

interface RegisterFormProps {
  toLogin: () => void
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ toLogin }) => {
  const { data, error, isError, errorForm, handlers } = useRegisterForm(toLogin)

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
          value={data.phone_number}
          onChange={handlers.change('phone_number')}
          label={'Phone number'}
          onFocus={handlers.focus('phone_number')}
          onBlur={handlers.blur('phone_number')}
          error={Boolean(error.phone_number)}
          errorMessage={error.phone_number || ''}
        />
        <TextField
          value={data.first_name}
          onChange={handlers.change('first_name')}
          label={'First name'}
          onFocus={handlers.focus('first_name')}
          onBlur={handlers.blur('first_name')}
          error={Boolean(error.first_name)}
          errorMessage={error.first_name || ''}
        />
        <TextField
          value={data.last_name}
          onChange={handlers.change('last_name')}
          label={'Last name'}
          onFocus={handlers.focus('last_name')}
          onBlur={handlers.blur('last_name')}
          error={Boolean(error.last_name)}
          errorMessage={error.last_name || ''}
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
        <TextField
          value={data.confirmPassword}
          onChange={handlers.change('confirmPassword')}
          type='password'
          label={'Confirm Password'}
          onFocus={handlers.focus('confirmPassword')}
          onBlur={handlers.blur('confirmPassword')}
          error={Boolean(error.confirmPassword)}
          errorMessage={error.confirmPassword || ''}
        />
      </div>
      {errorForm && <p>{errorForm}</p>}
      <div className={s.controls}>
        <Button onClick={handlers.send} disabled={isError}>
          Send
        </Button>
        <Button onClick={handlers.toLogin}>Login</Button>
      </div>
      <ReCaptcha key={errorForm} onChange={handlers.reCaptcha} />
    </div>
  )
}
