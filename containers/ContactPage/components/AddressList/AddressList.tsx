import React from 'react'
import s from './AddressList.module.css'
import { AddressListItem } from 'services/static'

interface AddressListProps {
  data: AddressListItem[]
}

const AddressList: React.FC<AddressListProps> = ({ data }) => {
  return (
    <div className={s.root}>
      <ul className={s.addressList}>
        {data.map((i) => (
          <li key={i.id} className={s.addressList__item}>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${i.coordinates.replace(
                ', ',
                '%2C'
              )}`}
              className={s.address}
              title={i.address}
              target='_blank'
            >
              {i.address}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AddressList
