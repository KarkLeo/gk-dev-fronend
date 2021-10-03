import Icon from 'components/Icon'
import React from 'react'
import { UserAddressResponse } from 'services/public'
import s from './AddressSelectItem.module.css'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'

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
    <label
      className={classNames(s.root, { [s.root_active]: select === data.id })}
    >
      <input
        className={s.input}
        type='radio'
        name='AddressSelectItem'
        checked={select === data.id}
        onChange={() => onChange(data.id)}
      />
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
              {t('forms.fields.novaposhta_number')}: {data.novaposhta_number}
            </p>
          </>
        )}
        {!data.is_novaposhta && <p className={s.text}>{data.address}</p>}
      </div>
    </label>
  )
}

export default AddressSelectItem
