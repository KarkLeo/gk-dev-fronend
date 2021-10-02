import Icon from 'components/Icon'
import React from 'react'
import { UserAddressResponse } from 'services/public'
import s from './OrderDeliveryInfo.module.css'
import { useTranslation } from 'next-i18next'

interface OrderDeliveryInfoProps {
  data: UserAddressResponse
}

const AddressCard: React.FC<OrderDeliveryInfoProps> = ({ data }) => {
  const { t } = useTranslation('common')

  return (
    <div className={s.root}>
      <div>
        <h3 className={s.name}>
          {data.first_name} {data.last_name}
        </h3>
        <span className={s.phone}>{data.phone_number}</span>
        <div className={s.address}>
          {data.is_novaposhta && (
            <>
              <Icon iconId='novaposhta' className={s.icon} />
              <span>{data.city}</span>
              <span>
                {t('forms.fields.novaposhta_number')}: {data.novaposhta_number}
              </span>
            </>
          )}
          {!data.is_novaposhta && <span>{data.address}</span>}
        </div>
      </div>
    </div>
  )
}

export default AddressCard
