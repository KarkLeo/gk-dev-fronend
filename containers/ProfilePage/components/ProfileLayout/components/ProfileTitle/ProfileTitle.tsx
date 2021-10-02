import React from 'react'
import s from './ProfileTitle.module.css'

const ProfileTitle: React.FC = ({ children }) => {
  return <h1 className={s.profileTitle}>{children}</h1>
}

export default ProfileTitle
