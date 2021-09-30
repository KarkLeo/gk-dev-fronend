import React from 'react'
import { Button, TextField } from '../../Controllers'
import ReCaptcha from '../../ReCature/ReCature'
import useLoginForm from './useLoginForm'
import s from '../FormStyle.module.css'
import { useTranslation } from 'next-i18next'

interface LoginFormProps {
  toRegister: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ toRegister }) => {
  const { data, error, isError, errorForm, handlers } = useLoginForm(toRegister)
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
      </div>
      {errorForm && <p>{errorForm}</p>}
      <div className={s.controls}>
        <Button onClick={handlers.send} disabled={isError}>
          {t('forms.buttons.send')}
        </Button>
        <Button onClick={handlers.toRegister}>
          {t('forms.buttons.register')}
        </Button>
      </div>
      <ReCaptcha key={errorForm} onChange={handlers.reCaptcha} />
    </div>
  )
}
