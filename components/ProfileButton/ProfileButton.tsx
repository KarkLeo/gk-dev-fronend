import React, { useCallback } from 'react'
import Icon from '../Icon'
import s from './ProfileButton.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { openLoginModalAction } from '../../store/modal'
import { getProfileInitialsSelector } from '../../store/profile'
import Link from 'next/link'
import { PROFILE_PAGE_URL } from '../../route'
import { getIsAuthSelector } from '../../store/auth'

interface ProfileButtonProps {
  iconClassName: string
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ iconClassName }) => {
  const dispatch = useDispatch()

  const initials = useSelector(getProfileInitialsSelector)
  const isAuth = useSelector(getIsAuthSelector)

  const loginHandler = useCallback(
    () => dispatch(openLoginModalAction()),
    [dispatch]
  )

  return isAuth ? (
    initials ? (
      <Link href={PROFILE_PAGE_URL}>
        <a className={s.profile}>{initials}</a>
      </Link>
    ) : (
      <Link href={PROFILE_PAGE_URL}>
        <a className={iconClassName}>
          <Icon iconId='user' className={s.profile__icon} />
        </a>
      </Link>
    )
  ) : (
    <button className={s.button} onClick={loginHandler}>
      <Icon iconId='user' className={iconClassName} />
    </button>
  )
}

export default ProfileButton
