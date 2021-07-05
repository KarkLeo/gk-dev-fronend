import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'next-i18next'
import s from './PageList.module.css'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { CONTACT_PAGE_URL } from 'route'

const PageList: React.FC = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Link href={CONTACT_PAGE_URL}>
          <a
            className={classNames(s.link, {
              [s.link_active]: router.pathname === CONTACT_PAGE_URL,
            })}
          >
            {t('contactPage.name')}
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default PageList
