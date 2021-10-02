import React from 'react'
import s from './Button.module.css'
import classNames from 'classnames'

interface ButtonProps {
  onClick?: () => void
  disabled?: boolean
  primary?: boolean
  small?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  primary,
  small,
}) => {
  return (
    <button
      className={classNames(s.button, {
        [s.button_primary]: primary,
        [s.button_small]: small,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
