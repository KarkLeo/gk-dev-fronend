import LanguageSwitcher from 'components/LanguageSwitcher'
import React from 'react'
import s from './Header.module.css'
import { MetaData } from 'services/static'
import PhoneList from './components/PhoneList/PhoneList'
import PageList from './components/PageList/PageList'
import Logo from './components/Logo/Logo'
import classNames from 'classnames'
import IconList from './components/IconList/IconList'
import CategoryList from './components/CategoryList/CategoryList'
import { DefaultLocalesParams } from '../../common/utils/locales-params'
import Sticky from 'components/Sticky/Sticky'

interface HeaderProps {
  meta: MetaData
  localesParams?: DefaultLocalesParams
}

const Header: React.FC<HeaderProps> = ({ meta, localesParams }) => {
  return (
    <header className={s.root}>
      <div className={classNames(s.grid, s.top)}>
        <div className={s.grid__item}>
          <PhoneList list_of_numbers={meta.contactSetting.list_of_numbers} />
        </div>
        <div className={s.grid__item}>
          <PageList />
          <LanguageSwitcher localesParams={localesParams} />
        </div>
      </div>
      <Sticky fullWidth>
        <div className={classNames(s.grid, s.bottom)}>
          <div className={s.grid__item}>
            <Logo />
            <CategoryList categories={meta.productCategories} />
          </div>
          <div className={s.grid__item}>
            <IconList />
          </div>
        </div>
      </Sticky>
    </header>
  )
}

export default Header
