import React from 'react'
import { PhoneListItem } from 'services/static'
import s from './PhoneList.module.css'

interface PhoneListProps {
  list_of_numbers: PhoneListItem[]
}

const PhoneList: React.FC<PhoneListProps> = ({ list_of_numbers }) => {
  return (
    <div className={s.root}>
      <ul className={s.phoneList}>
        {list_of_numbers.map((i) => (
          <li key={i.id} className={s.phoneList__item}>
            <a
              href={`tel:${i.phone_number}`}
              className={s.phone}
              title={i.label}
            >
              {i.phone_number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PhoneList
