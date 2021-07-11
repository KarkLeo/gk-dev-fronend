import React, { useEffect } from 'react'
import s from './MenuBar.module.css'
import animate from './MBTransition.module.css'
import { CSSTransition } from 'react-transition-group'
import { lockScroll, unlockScroll } from '../../../../common/utils/scroll-lock'

interface MenuBarProps {
  open: boolean
}

const MenuBar: React.FC<MenuBarProps> = ({ open, children }) => {
  useEffect(() => {
    if (open) lockScroll()
    else unlockScroll()
  }, [open])

  return (
    <CSSTransition
      in={open}
      timeout={200}
      classNames={{ ...animate }}
      unmountOnExit
    >
      <div className={s.root}>{children}</div>
    </CSSTransition>
  )
}

export default MenuBar
