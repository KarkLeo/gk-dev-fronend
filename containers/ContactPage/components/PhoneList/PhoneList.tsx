import React from 'react'
import { PhoneListItem } from 'services/static'
import s from './PhoneList.module.css'

interface PhoneListProps {
  data: PhoneListItem[]
}

const PhoneList: React.FC<PhoneListProps> = ({ data }) => {
  return (
    <div className={s.root}>
      <ul className={s.phoneList}>
        {data.map((i) => (
          <li key={i.id} className={s.phoneList__item}>
            <a
              href={`tel:${i.phone_number}`}
              className={s.phone}
              title={i.label}
            >
              <span className={s.phone__label}>{i.label}</span>
              <span>{i.phone_number}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PhoneList
