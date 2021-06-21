import Header from 'components/Header'
import React from 'react'
import style from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={style.root}>
      <Header />
      <div className={style.body}>
        <div className={style.content}>{children}</div>
      </div>
      <div>Footer</div>
    </div>
  )
}

export default Layout
