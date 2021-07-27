import React from 'react'
import s from './BackButton.module.css'
import { useTranslation } from 'next-i18next'
import { CATEGORY_PAGE_URL } from 'route'
import Link from 'next/link'
import Icon from 'components/Icon'

interface BackButtonProps {
  slug: string
}

const BackButton: React.FC<BackButtonProps> = ({ slug }) => {
  const { t } = useTranslation('common')
  return (
    <div className={s.root}>
      <Link
        href={{
          pathname: CATEGORY_PAGE_URL,
          query: {
            category: slug,
          },
        }}
      >
        <a className={s.link}>
          <Icon iconId='back_arrow' className={s.link__icon} />
          <span className={s.link__text}>{t('productPage.back')}</span>
        </a>
      </Link>
    </div>
  )
}

export default BackButton
