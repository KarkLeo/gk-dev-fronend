import React from 'react'
import Logo from './components/Logo/Logo'
import s from './Footer.module.css'
import { MetaData } from 'services/static'
import CategoryList from './components/CategoryList/CategoryList'
import PageList from './components/PageList/PageList'
import PhoneList from './components/PhoneList/PhoneList'

interface FooterProps {
  meta: MetaData
}

const Footer: React.FC<FooterProps> = ({ meta }) => {
  return (
    <footer className={s.root}>
      <div className={s.grid}>
        <div className={s.grid__item}>
          <Logo />
          <CategoryList categories={meta.productCategories} />
        </div>
        <div className={s.grid__item}>
          <PageList />
        </div>
        <div className={s.grid__item}>
          <PhoneList list_of_numbers={meta.contactSetting.list_of_numbers} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
