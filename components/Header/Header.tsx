import LanguageSwitcher from 'components/LanguageSwitcher'
import React from 'react'
import style from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={style.root}>
      <LanguageSwitcher />
    </header>
  )
}

export default Header
