import LanguageSwitcher from 'components/LanguageSwitcher'
import React from 'react'
import s from './Header.module.css'
import { ContactsSettingsData } from 'services/static'
import PhoneList from './components/PhoneList/PhoneList'
import PageList from './components/PageList/PageList'

interface HeaderProps {
  contact: ContactsSettingsData
}

const Header: React.FC<HeaderProps> = ({ contact }) => {
  return (
    <header className={s.root}>
      <div className={s.grid}>
        <div className={s.grid__item}>
          <PhoneList list_of_numbers={contact.contactSetting.list_of_numbers} />
        </div>
        <div className={s.grid__item}>
          <PageList />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
