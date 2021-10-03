import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDescriptionSelector } from 'store/cart/selectors'
import { setOrderDescriptionAction } from 'store/cart'
import s from './Description.module.css'

const Description: React.FC = () => {
  const dispatch = useDispatch()
  const description = useSelector(getOrderDescriptionSelector)

  const changeDescriptionHandler = useCallback(
    (value: string) => dispatch(setOrderDescriptionAction(value)),
    [dispatch]
  )

  return (
    <textarea
      className={s.field}
      value={description}
      onChange={(e) => {
        changeDescriptionHandler(e.target.value)
      }}
    />
  )
}

export default Description
