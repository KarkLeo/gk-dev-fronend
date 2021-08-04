import React from 'react'
import s from './Button.module.css'

interface ButtonProps {
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  )
}
