import React from 'react'
import ProfileNavigation from './components/ProfileNavigation/ProfileNavigation'
import s from './ProfileLayout.module.css'

const ProfileLayout: React.FC = ({ children }) => {
  return (
    <div className={s.root}>
      <div className={s.bar}>
        <ProfileNavigation />
      </div>
      <div className={s.content}>{children}</div>
    </div>
  )
}

export default ProfileLayout
