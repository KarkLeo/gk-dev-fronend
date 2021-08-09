import React from 'react'
import s from './Button.module.css'

interface ButtonProps {
  onClick?: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <button className={s.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
