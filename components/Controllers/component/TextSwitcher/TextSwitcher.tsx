import React from 'react'
import s from './TextSwitcher.module.css'
import classNames from 'classnames'

interface TextSwitcherProps {
  checked: boolean
  onChange: () => void
  title: string
  negative: string
  positive: string
}

export const TextSwitcher: React.FC<TextSwitcherProps> = ({
  checked,
  positive,
  negative,
  title,
  onChange,
}) => {
  return (
    <label className={s.root}>
      <span className={s.title}>{title}</span>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className={s.checkbox}
      />
      <span className={classNames(s.label, { [s.label_active]: !checked })}>
        {negative}
      </span>
      <span className={classNames(s.label, { [s.label_active]: checked })}>
        {positive}
      </span>
    </label>
  )
}
