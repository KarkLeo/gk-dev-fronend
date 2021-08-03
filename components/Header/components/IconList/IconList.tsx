import Icon from 'components/Icon'
import React from 'react'
import s from './IconList.module.css'
import Favorite from '../../../Favorite/Favorite'
import Cart from 'components/Cart/Cart'

const IconList: React.FC = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Favorite iconClassName={s.icon} />
      </li>
      <li className={s.item}>
        <Cart iconClassName={s.icon} />
      </li>
      <li className={s.item}>
        <Icon iconId='user' className={s.icon} />
      </li>
    </ul>
  )
}

export default IconList
