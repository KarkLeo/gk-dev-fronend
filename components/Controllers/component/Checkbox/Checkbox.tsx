import React from 'react'
import s from './Checkbox.module.css'

interface CheckboxProps {
  checked: boolean
  onChange: () => void
  label: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  label,
  onChange,
}) => {
  return (
    <label className={s.root}>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className={s.checkbox}
      />
      <span className={s.switcher} />
      <span className={s.label}>{label}</span>
    </label>
  )
}
