import Icon from 'components/Icon'
import React from 'react'
import { PhoneListItem } from 'services/static'
import s from './PhoneList.module.css'

interface PhoneListProps {
  list_of_numbers: PhoneListItem[]
}

const PhoneList: React.FC<PhoneListProps> = ({ list_of_numbers }) => {
  return (
    <div className={s.root}>
      <Icon iconId='phone' className={s.icon} />
      <ul className={s.phoneList}>
        {list_of_numbers.map((i) => (
          <li key={i.id} className={s.phoneList__item}>
            <a href={`tel:${i.phone_number}`} className={s.phone}>
              <span className={s.phone__number}>{i.phone_number}</span>
              <span className={s.phone__label}>{i.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PhoneList
