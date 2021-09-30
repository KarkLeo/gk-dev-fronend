import Icon from 'components/Icon'
import React from 'react'
import { UserAddressResponse } from 'services/public'
import s from './AddressSelectItem.module.css'
import { useTranslation } from 'next-i18next'

interface AddressSelectItemProps {
  data: UserAddressResponse
  select: string | null
  onChange: (value: string) => void
}

const AddressSelectItem: React.FC<AddressSelectItemProps> = ({
  data,
  select,
  onChange,
}) => {
  const { t } = useTranslation('common')

  return (
    <label className={s.root}>
      <input
        type='radio'
        name='AddressSelectItem'
        checked={select === data.id}
        onChange={() => onChange(data.id)}
      />
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
                {t('forms.fields.novaposhta_number')}: {data.novaposhta_number}
              </p>
            </>
          )}
          {!data.is_novaposhta && <p>{data.address}</p>}
        </div>
      </div>
    </label>
  )
}

export default AddressSelectItem
