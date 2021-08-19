import React from 'react'
import { Button, TextField } from '../../Controllers'
import useEditProfileForm from './useEditProfileForm'
import s from '../FormStyle.module.css'

export const EditProfileForm = () => {
  const { data, error, isError, errorForm, handlers } = useEditProfileForm()

  return (
    <div className={s.root}>
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
      </div>
      {errorForm && <p>{errorForm}</p>}
      <div className={s.controls}>
        <Button onClick={handlers.send} disabled={isError}>
          Save
        </Button>
        <Button onClick={handlers.cancel}>Cancel</Button>
      </div>
    </div>
  )
}
