import React from 'react'
import s from './MenuButton.module.css'
import classNames from 'classnames'

interface MenuButtonProps {
  open: boolean
  onClick: () => void
}

const MenuButton: React.FC<MenuButtonProps> = ({ open, onClick }) => {
  return (
    <div className={s.root}>
      <button
        className={classNames(s.button, { [s.button_active]: open })}
        onClick={onClick}
      >
        <span className={s.dash} />
        <span className={s.dash} />
        <span className={s.dash} />
      </button>
    </div>
  )
}

export default MenuButton
