import Header from 'components/Header'
import React from 'react'
import s from './Layout.module.css'
import { ContactsSettingsData } from 'services/static'

interface LayoutProps {
  contact: ContactsSettingsData
}

const Layout: React.FC<LayoutProps> = ({ contact, children }) => {
  return (
    <div className={s.root}>
      <Header contact={contact} />
      <main className={s.body}>
        <div className={s.content}>{children}</div>
      </main>
      <div>Footer</div>
    </div>
  )
}

export default Layout
