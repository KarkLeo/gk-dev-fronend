import React, { useState } from 'react'
import Logo from './components/Logo/Logo'
import IconList from './components/IconList/IconList'
import s from './Header.module.css'
import MenuButton from './components/MenuButton/MenuButton'
import MenuBar from './components/MenuBar/MenuBar'
import { HeaderProps } from './types'

const MobileHeader: React.FC<HeaderProps> = () => {
  const [state, setState] = useState(false)

  return (
    <header className={s.root}>
      <div className={s.top}>
        <div className={s.grid}>
          <div className={s.grid__item}>
            <MenuButton open={state} onClick={() => setState(!state)} />
            <MenuBar open={state}>
              <h1>sdfsdfsdfsdff</h1>
            </MenuBar>
            <Logo />
          </div>
          <div className={s.grid__item}>
            <IconList />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader
