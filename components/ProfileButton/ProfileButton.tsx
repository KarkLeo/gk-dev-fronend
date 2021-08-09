import React, { useCallback } from 'react'
import Icon from '../Icon'
import s from './ProfileButton.module.css'
import { useDispatch } from 'react-redux'
import { openLoginModalAction } from '../../store/modal'

interface ProfileButtonProps {
  iconClassName: string
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ iconClassName }) => {
  const dispatch = useDispatch()

  const loginHandler = useCallback(
    () => dispatch(openLoginModalAction()),
    [dispatch]
  )

  return (
    <button className={s.button} onClick={loginHandler}>
      <Icon iconId='user' className={iconClassName} />
    </button>
  )
}

export default ProfileButton
