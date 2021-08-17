import React from 'react'
import { Button, TextField } from '../../Controllers'
import useEditPasswordForm from './useEditPasswordForm'
import s from '../FormStyle.module.css'

export const EditPasswordForm = () => {
  const { data, error, isError, errorForm, handlers } = useEditPasswordForm()

  return (
    <div className={s.root}>
      <div className={s.grid}>
        <TextField
          value={data.oldPassword}
          onChange={handlers.change('oldPassword')}
          type='password'
          label={'Old Password'}
          onFocus={handlers.focus('oldPassword')}
          onBlur={handlers.blur('oldPassword')}
          error={Boolean(error.oldPassword)}
          errorMessage={error.oldPassword || ''}
        />
        <TextField
          value={data.password}
          onChange={handlers.change('password')}
          type='password'
          label={'New Password'}
          onFocus={handlers.focus('password')}
          onBlur={handlers.blur('password')}
          error={Boolean(error.password)}
          errorMessage={error.password || ''}
        />
        <TextField
          value={data.confirmPassword}
          onChange={handlers.change('confirmPassword')}
          type='password'
          label={'Confirm New Password'}
          onFocus={handlers.focus('confirmPassword')}
          onBlur={handlers.blur('confirmPassword')}
          error={Boolean(error.confirmPassword)}
          errorMessage={error.confirmPassword || ''}
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
