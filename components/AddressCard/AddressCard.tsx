import Icon from 'components/Icon'
import React, { useCallback, useState } from 'react'
import { UserAddress, UserAddressResponse } from 'services/public'
import s from './AddressCard.module.css'
import { AddressForm } from '../Forms/AddressForm/AddressForm'
import { useTranslation } from 'next-i18next'

interface AddressCardProps {
  data: UserAddressResponse
  onDelete?: (id: string) => void
  onEdit?: (id: string, data: UserAddress) => void
}

const AddressCard: React.FC<AddressCardProps> = ({
  data,
  onDelete,
  onEdit,
}) => {
  const [edit, setEdit] = useState(false)
  const { t } = useTranslation('common')

  const cancelHandler = useCallback(() => setEdit(false), [setEdit])
  const editHandler = useCallback(
    (address: UserAddress) => {
      onEdit && onEdit(data.id, address)
      setEdit(false)
    },
    [onEdit, data.id, setEdit]
  )

  return (
    <div className={s.root}>
      {edit ? (
        <AddressForm
          onCancel={cancelHandler}
          onSubmit={editHandler}
          initAddress={{
            first_name: data.first_name,
            last_name: data.last_name,
            phone_number: data.phone_number,
            is_novaposhta: data.is_novaposhta || false,
            city: data.city || '',
            address: data.address || '',
            novaposhta_number: data.novaposhta_number
              ? data.novaposhta_number.toString()
              : '',
          }}
        />
      ) : (
        <div>
          <div className={s.row}>
            <h3>
              {data.first_name} {data.last_name}
            </h3>
            <p>{data.phone_number}</p>
          </div>
          <div className={s.row}>
            {data.is_novaposhta && (
              <>
                <Icon iconId='novaposhta' className={s.icon} />
                <p>{data.city}</p>
                <p>
                  {t('forms.fields.novaposhta_number')}:{' '}
                  {data.novaposhta_number}
                </p>
              </>
            )}
            {!data.is_novaposhta && <p>{data.address}</p>}
          </div>
          <div className={s.row}>
            <button onClick={() => setEdit(true)}>
              {t('profile.buttons.edit')}
            </button>
            {onDelete && (
              <button onClick={() => onDelete(data.id)}>
                {t('profile.buttons.delete')}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default AddressCard
