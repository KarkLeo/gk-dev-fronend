import React from 'react'
import { Button, TextField } from '../../Controllers'
import ReCaptcha from '../../ReCature/ReCature'
import useRegisterForm from './useRegisterForm'
import s from '../FormStyle.module.css'
import { useTranslation } from 'next-i18next'

interface RegisterFormProps {
  toLogin: () => void
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ toLogin }) => {
  const { data, error, isError, errorForm, handlers } = useRegisterForm(toLogin)
  const { t } = useTranslation('common')

  return (
    <div className={s.root}>
      <div className={s.grid}>
        <TextField
          value={data.email}
          onChange={handlers.change('email')}
          type='email'
          label={t('forms.fields.email')}
          onFocus={handlers.focus('email')}
          onBlur={handlers.blur('email')}
          error={Boolean(error.email)}
          errorMessage={
            error.email ? t(('forms.errors.' + error.email) as any) : ''
          }
        />
        <TextField
          value={data.phone_number}
          onChange={handlers.change('phone_number')}
          label={t('forms.fields.phone_number')}
          onFocus={handlers.focus('phone_number')}
          onBlur={handlers.blur('phone_number')}
          error={Boolean(error.phone_number)}
          errorMessage={
            error.phone_number
              ? t(('forms.errors.' + error.phone_number) as any)
              : ''
          }
        />
        <TextField
          value={data.first_name}
          onChange={handlers.change('first_name')}
          label={t('forms.fields.first_name')}
          onFocus={handlers.focus('first_name')}
          onBlur={handlers.blur('first_name')}
          error={Boolean(error.first_name)}
          errorMessage={
            error.first_name
              ? t(('forms.errors.' + error.first_name) as any)
              : ''
          }
        />
        <TextField
          value={data.last_name}
          onChange={handlers.change('last_name')}
          label={t('forms.fields.last_name')}
          onFocus={handlers.focus('last_name')}
          onBlur={handlers.blur('last_name')}
          error={Boolean(error.last_name)}
          errorMessage={
            error.last_name ? t(('forms.errors.' + error.last_name) as any) : ''
          }
        />
        <TextField
          value={data.password}
          onChange={handlers.change('password')}
          type='password'
          label={t('forms.fields.password')}
          onFocus={handlers.focus('password')}
          onBlur={handlers.blur('password')}
          error={Boolean(error.password)}
          errorMessage={
            error.password ? t(('forms.errors.' + error.password) as any) : ''
          }
        />
        <TextField
          value={data.confirmPassword}
          onChange={handlers.change('confirmPassword')}
          type='password'
          label={t('forms.fields.confirm_password')}
          onFocus={handlers.focus('confirmPassword')}
          onBlur={handlers.blur('confirmPassword')}
          error={Boolean(error.confirmPassword)}
          errorMessage={
            error.confirmPassword
              ? t(('forms.errors.' + error.confirmPassword) as any)
              : ''
          }
        />
      </div>
      {errorForm && <p>{errorForm}</p>}
      <div className={s.controls}>
        <Button onClick={handlers.send} disabled={isError}>
          {t('forms.buttons.send')}
        </Button>
        <Button onClick={handlers.toLogin}> {t('forms.buttons.login')}</Button>
      </div>
      <ReCaptcha key={errorForm} onChange={handlers.reCaptcha} />
    </div>
  )
}
