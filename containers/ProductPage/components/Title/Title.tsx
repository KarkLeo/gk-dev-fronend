import React from 'react'
import s from './Title.module.css'

interface TitleProps {}

const Title: React.FC<TitleProps> = () => {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Title of product</h1>
      <span className={s.art}>art. 213543</span>
    </div>
  )
}

export default Title
