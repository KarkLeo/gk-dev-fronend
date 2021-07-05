import Icon from 'components/Icon'
import React from 'react'
import s from './IconList.module.css'

const IconList: React.FC = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Icon iconId='favorite' className={s.icon} />
      </li>
      <li className={s.item}>
        <Icon iconId='cart' className={s.icon} />
      </li>
      <li className={s.item}>
        <Icon iconId='user' className={s.icon} />
      </li>
    </ul>
  )
}

export default IconList
