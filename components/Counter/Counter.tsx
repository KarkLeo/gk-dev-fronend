import React, { useCallback, useEffect } from 'react'
import s from './Counter.module.css'

interface CounterProps {
  value: number
  onChange: (newValue: number) => void
  min?: number
  max?: number
}

const Counter: React.FC<CounterProps> = ({ value, onChange, max, min }) => {
  useEffect(() => {
    if (min !== undefined && min > value) onChange(min)
  }, [value, min, onChange])
  useEffect(() => {
    if (max !== undefined && max < value) onChange(max)
  }, [value, max, onChange])

  const minusHandler = useCallback(() => {
    const newValue = value - 1
    if (min !== undefined) return onChange(min > newValue ? min : newValue)
    else return onChange(newValue)
  }, [min, value, onChange])

  const plusHandler = useCallback(() => {
    const newValue = value + 1
    if (max !== undefined) return onChange(max < newValue ? max : newValue)
    else return onChange(newValue)
  }, [max, value, onChange])

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value) || 0

      if (max !== undefined && min !== undefined)
        return onChange(max < newValue ? max : min > newValue ? min : newValue)

      if (min !== undefined) return onChange(min > newValue ? min : newValue)

      if (max !== undefined) return onChange(max < newValue ? max : newValue)

      return onChange(newValue)
    },
    [min, max, onChange]
  )

  return (
    <div className={s.root}>
      <button
        className={s.button}
        disabled={min !== undefined && min >= value}
        onClick={minusHandler}
      >
        &minus;
      </button>
      <input
        className={s.field}
        type='text'
        value={value}
        onChange={changeHandler}
      />
      <button
        className={s.button}
        disabled={max !== undefined && max <= value}
        onClick={plusHandler}
      >
        &#43;
      </button>
    </div>
  )
}

export default Counter
