import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'next-i18next'
import s from './ProfileNavigation.module.css'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import {
  CONTACT_PAGE_URL,
  PROFILE_ADDRESS_PAGE_URL,
  PROFILE_ORDERS_PAGE_URL,
  PROFILE_PAGE_URL,
  PROFILE_PASSWORD_PAGE_URL,
} from 'route'
import { Button } from 'components/Controllers'

const ProfileNavigation: React.FC = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Link href={PROFILE_PAGE_URL}>
          <a
            className={classNames(s.link, {
              [s.link_active]: router.pathname === PROFILE_PAGE_URL,
            })}
          >
            Profile
          </a>
        </Link>
      </li>
      <li className={s.item}>
        <Link href={PROFILE_ADDRESS_PAGE_URL}>
          <a
            className={classNames(s.link, {
              [s.link_active]: router.pathname === PROFILE_ADDRESS_PAGE_URL,
            })}
          >
            Address
          </a>
        </Link>
      </li>
      <li className={s.item}>
        <Link href={PROFILE_ORDERS_PAGE_URL}>
          <a
            className={classNames(s.link, {
              [s.link_active]: router.pathname === PROFILE_ORDERS_PAGE_URL,
            })}
          >
            Orders
          </a>
        </Link>
      </li>
      <li className={s.item}>
        <Link href={PROFILE_PASSWORD_PAGE_URL}>
          <a
            className={classNames(s.link, {
              [s.link_active]: router.pathname === PROFILE_PASSWORD_PAGE_URL,
            })}
          >
            Password
          </a>
        </Link>
      </li>
      <li className={s.item}>
        <Button>Logout</Button>
      </li>
    </ul>
  )
}

export default ProfileNavigation
