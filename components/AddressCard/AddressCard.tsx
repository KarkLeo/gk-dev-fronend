import Icon from 'components/Icon'
import React, { useCallback, useState } from 'react'
import { UserAddress, UserAddressResponse } from 'services/public'
import s from './AddressCard.module.css'
import { AddressForm } from '../Forms/AddressForm/AddressForm'
import { useTranslation } from 'next-i18next'
import { Button } from '../Controllers'

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
            post_code: data.post_code || '',
          }}
        />
      ) : (
        <div className={s.body}>
          <div className={s.content}>
            <h3 className={s.name}>
              {data.first_name} {data.last_name}
            </h3>
            <p className={s.phone}>{data.phone_number}</p>
            <div className={s.address}>
              {data.is_novaposhta && (
                <>
                  <Icon iconId='novaposhta' className={s.icon} />
                  <p className={s.text}>{data.city}</p>
                  <p className={s.text}>
                    {t('forms.fields.novaposhta_number')}:{' '}
                    {data.novaposhta_number}
                  </p>
                </>
              )}
              {!data.is_novaposhta && (
                <p className={s.text}>
                  {data.post_code} {data.address}
                </p>
              )}
            </div>
          </div>
          <div className={s.buttons}>
            <Button onClick={() => setEdit(true)} small>
              {t('profile.buttons.edit')}
            </Button>
            {onDelete && (
              <Button onClick={() => onDelete(data.id)} small>
                {t('profile.buttons.delete')}
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default AddressCard
