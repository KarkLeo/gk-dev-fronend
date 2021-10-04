import React, { useState } from 'react'
import Logo from './components/Logo/Logo'
import IconList from './components/IconList/IconList'
import s from './Header.module.css'
import MenuButton from './components/MenuButton/MenuButton'
import MenuBar from './components/MenuBar/MenuBar'
import { HeaderProps } from './types'
import LanguageSwitcher from '../LanguageSwitcher'
import CategoryList from './components/CategoryList/CategoryList'
import PageList from './components/PageList/PageList'
import PhoneList from './components/PhoneList/PhoneList'

const MobileHeader: React.FC<HeaderProps> = ({ meta, localesParams }) => {
  const [state, setState] = useState(false)

  return (
    <header className={s.root}>
      <div className={s.top}>
        <div className={s.grid}>
          <div className={s.grid__item}>
            <MenuButton open={state} onClick={() => setState(!state)} />
            <MenuBar open={state} onClose={() => setState(false)}>
              <PhoneList
                list_of_numbers={meta.contactSetting.list_of_numbers}
              />
              <CategoryList categories={meta.productCategories} />
              <PageList />
              <LanguageSwitcher localesParams={localesParams} />
            </MenuBar>
            <Logo />
          </div>
          <div className={s.grid__item}>
            <IconList />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader
