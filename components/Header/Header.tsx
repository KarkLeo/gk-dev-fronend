import LanguageSwitcher from 'components/LanguageSwitcher'
import React from 'react'
import s from './Header.module.css'
import PhoneList from './components/PhoneList/PhoneList'
import PageList from './components/PageList/PageList'
import Logo from './components/Logo/Logo'
import IconList from './components/IconList/IconList'
import CategoryList from './components/CategoryList/CategoryList'
import Sticky from 'components/Sticky/Sticky'
import { HeaderProps } from './types'
import TextModal from 'components/Modal/TextModal'

const Header: React.FC<HeaderProps> = ({ meta, localesParams }) => {
  return (
    <header className={s.root}>
      <div className={s.top}>
        <div className={s.grid}>
          <div className={s.grid__item}>
            <PhoneList list_of_numbers={meta.contactSetting.list_of_numbers} />
          </div>
          <div className={s.grid__item}>
            <PageList />
            <LanguageSwitcher localesParams={localesParams} />
          </div>
        </div>
      </div>
      <Sticky fullWidth>
        <div className={s.bottom}>
          <div className={s.grid}>
            <div className={s.grid__item}>
              <Logo />
              <CategoryList categories={meta.productCategories} />
            </div>
            <div className={s.grid__item}>
              <TextModal />
              <IconList />
            </div>
          </div>
        </div>
      </Sticky>
    </header>
  )
}

export default Header
