import React from 'react'
import Logo from './components/Logo/Logo'
import s from './The404Page.module.css'

const The404Page: React.FC = () => {
  return (
    <div className={s.root}>
      <Logo />
      <h1 className={s.title}>404 - Page Not Found</h1>
    </div>
  )
}

export default The404Page
