import React from 'react'
import { Button, TextField } from '../../Controllers'
import useAddressForm from './useAddressForm'
import s from '../FormStyle.module.css'
import { UserAddress } from 'services/public'

export interface AddressFormProps {
  initAddress?: UserAddress
  onSubmit?: (data: UserAddress) => void
  onCancel?: () => void
  autoForm?: boolean
  onError?: (isError: boolean) => void
}

export const AddressForm: React.FC<AddressFormProps> = (props) => {
  const { data, error, isError, handlers } = useAddressForm(props)

  return (
    <div className={s.root}>
      <div className={s.grid}>
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
          value={data.phone_number}
          onChange={handlers.change('phone_number')}
          label={'Phone number'}
          onFocus={handlers.focus('phone_number')}
          onBlur={handlers.blur('phone_number')}
          error={Boolean(error.phone_number)}
          errorMessage={error.phone_number || ''}
        />

        <label>
          <input
            type='checkbox'
            checked={data.is_novaposhta}
            onChange={handlers.isNovaposhta}
          />
          Отправка новой почтой
        </label>

        {data.is_novaposhta && (
          <TextField
            value={data.city}
            onChange={handlers.change('city')}
            label={'City'}
            onFocus={handlers.focus('city')}
            onBlur={handlers.blur('city')}
            error={Boolean(error.city)}
            errorMessage={error.city || ''}
          />
        )}
        {data.is_novaposhta && (
          <TextField
            value={data.novaposhta_number}
            onChange={handlers.change('novaposhta_number')}
            label={'Novaposhta Number'}
            onFocus={handlers.focus('novaposhta_number')}
            onBlur={handlers.blur('novaposhta_number')}
            error={Boolean(error.novaposhta_number)}
            errorMessage={error.novaposhta_number || ''}
          />
        )}
        {!data.is_novaposhta && (
          <TextField
            value={data.address}
            onChange={handlers.change('address')}
            label={'Address'}
            onFocus={handlers.focus('address')}
            onBlur={handlers.blur('address')}
            error={Boolean(error.address)}
            errorMessage={error.address || ''}
          />
        )}
      </div>
      {!props.autoForm && (
        <div className={s.controls}>
          <Button onClick={handlers.send} disabled={isError}>
            Send
          </Button>
          <Button onClick={handlers.cancel}>Cancel</Button>
        </div>
      )}
    </div>
  )
}
