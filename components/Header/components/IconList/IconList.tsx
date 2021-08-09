import React from 'react'
import s from './IconList.module.css'
import Favorite from 'components/Favorite/Favorite'
import Cart from 'components/Cart/Cart'
import ProfileButton from 'components/ProfileButton/ProfileButton'

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
        <ProfileButton iconClassName={s.icon} />
      </li>
    </ul>
  )
}

export default IconList
