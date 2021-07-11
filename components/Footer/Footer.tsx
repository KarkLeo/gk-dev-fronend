import React from 'react'
import Logo from './components/Logo/Logo'
import s from './Footer.module.css'
import { MetaData } from 'services/static'
import CategoryList from './components/CategoryList/CategoryList'
import PageList from './components/PageList/PageList'
import PhoneList from './components/PhoneList/PhoneList'
import classNames from 'classnames'
import EmailList from './components/EmailList/EmailList'
import SocialList from './components/SocialList/SocialList'

interface FooterProps {
  meta: MetaData
}

const Footer: React.FC<FooterProps> = ({ meta }) => {
  return (
    <footer className={s.root}>
      <div className={s.grid}>
        <div className={classNames(s.grid__item, s.grid__item_long)}>
          <Logo />
        </div>
        <div
          className={classNames(
            s.grid__item,
            s.grid__item_long,
            s.grid__item_right,
            s.grid__item_social
          )}
        >
          <SocialList />
        </div>
        <div className={s.grid__item}>
          <CategoryList categories={meta.productCategories} />
        </div>
        <div className={s.grid__item}>
          <PageList />
        </div>
        <div className={classNames(s.grid__item, s.grid__item_right)}>
          <PhoneList list_of_numbers={meta.contactSetting.list_of_numbers} />
        </div>
        <div className={classNames(s.grid__item, s.grid__item_right)}>
          <EmailList />
        </div>
      </div>
    </footer>
  )
}

export default Footer
