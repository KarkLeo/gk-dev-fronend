import React from 'react'
import s from './AddressList.module.css'
import { addressesTest } from '../../testData'

interface AddressListProps {}

const AddressList: React.FC = () => {
  return (
    <div className={s.root}>
      <ul className={s.addressList}>
        {addressesTest.map((i) => (
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
