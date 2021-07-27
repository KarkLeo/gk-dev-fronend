import React from 'react'
import s from './Title.module.css'
import { useTranslation } from 'next-i18next'

interface TitleProps {
  title: string
  vendor_code: string
}

const Title: React.FC<TitleProps> = ({ title, vendor_code }) => {
  const { t } = useTranslation('common')
  return (
    <div className={s.root}>
      <h1 className={s.title}>{title}</h1>
      <span className={s.art}>
        {t('productPage.art')} {vendor_code}
      </span>
    </div>
  )
}

export default Title
