import React from 'react'
import Link from 'next/link'
import s from './Logo.module.css'

const Logo: React.FC = () => {
  return (
    <Link href={'/'}>
      <a className={s.logo}>Golden Key</a>
    </Link>
  )
}

export default Logo
