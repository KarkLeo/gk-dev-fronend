import React, { useCallback } from 'react'
import s from './TextArea.module.css'
import classNames from 'classnames'

interface TextAreaProps {
  id?: string
  name?: string
  type?: 'text' | 'email' | 'number' | 'tel' | 'password'
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  label?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  isMain?: boolean
}

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  disabled = false,
  error = false,
  errorMessage,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  isMain,
}) => {
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value),
    [onChange]
  )
  return (
    <div className={classNames(s.root, { [s.root_isMain]: isMain })}>
      <label className={s.root_label}>
        {label && (
          <span className={s.label}>
            {label}
            {isMain && ' *'}
          </span>
        )}
        <textarea
          className={classNames(s.field, { [s.field_error]: error })}
          value={value}
          onChange={changeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          name={name}
          id={id}
          placeholder={placeholder}
        />
        <div className={s.error}>
          {error && <span className={s.errorMessage}>{errorMessage}</span>}
        </div>
      </label>
    </div>
  )
}
