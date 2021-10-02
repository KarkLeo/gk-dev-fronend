import React from 'react'
import { useTranslation } from 'next-i18next'
import s from './Loading.module.css'

const Loading: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <div className={s.root}>
      <div className={s.label}>{t('profile.loading')}</div>
    </div>
  )
}

export default Loading
