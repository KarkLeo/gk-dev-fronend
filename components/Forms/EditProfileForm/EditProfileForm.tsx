import React from 'react'
import { Button, TextField } from '../../Controllers'
import useEditProfileForm from './useEditProfileForm'
import s from '../FormStyle.module.css'
import { useTranslation } from 'next-i18next'

export const EditProfileForm = () => {
  const { data, error, isError, errorForm, handlers } = useEditProfileForm()
  const { t } = useTranslation('common')
  return (
    <div className={s.root}>
      <TextField
        value={data.first_name}
        onChange={handlers.change('first_name')}
        label={t('forms.fields.first_name')}
        onFocus={handlers.focus('first_name')}
        onBlur={handlers.blur('first_name')}
        error={Boolean(error.first_name)}
        errorMessage={
          error.first_name ? t(('forms.errors.' + error.first_name) as any) : ''
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
