import React from 'react'
import { Button, TextField } from '../../Controllers'
import useEditPasswordForm from './useEditPasswordForm'
import s from '../FormStyle.module.css'
import { useTranslation } from 'next-i18next'

export const EditPasswordForm = () => {
  const { data, error, isError, errorForm, handlers } = useEditPasswordForm()
  const { t } = useTranslation('common')
  return (
    <div className={s.root}>
      <div className={s.grid}>
        <TextField
          value={data.oldPassword}
          onChange={handlers.change('oldPassword')}
          type='password'
          label={t('forms.fields.old_password')}
          onFocus={handlers.focus('oldPassword')}
          onBlur={handlers.blur('oldPassword')}
          error={Boolean(error.oldPassword)}
          errorMessage={
            error.oldPassword
              ? t(('forms.errors.' + error.oldPassword) as any)
              : ''
          }
        />
        <TextField
          value={data.password}
          onChange={handlers.change('password')}
          type='password'
          label={t('forms.fields.new_password')}
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
        <Button onClick={handlers.cancel}>{t('forms.buttons.cancel')}</Button>
      </div>
    </div>
  )
}
