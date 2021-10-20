import React from 'react'
import { Button, TextField } from '../../Controllers'
import ReCaptcha from '../../ReCature/ReCature'
import useEmailForm from './useEmailForm'
import s from '../FormStyle.module.css'
import { useTranslation } from 'next-i18next'

interface LoginFormProps {
  onChangeEmail: (email: string) => void
  onValidate: (isError: boolean) => void
}

export const EmailForm: React.FC<LoginFormProps> = ({
  onChangeEmail,
  onValidate,
}) => {
  const { data, error, isError, errorForm, handlers } = useEmailForm(
    onChangeEmail,
    onValidate
  )
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
      </div>
      {errorForm && <p>{errorForm}</p>}
      <ReCaptcha key={errorForm} onChange={handlers.reCaptcha} />
    </div>
  )
}
