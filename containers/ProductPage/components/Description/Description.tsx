import React from 'react'
import s from './Description.module.css'

interface DescriptionProps {
  text: string
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <div className={s.root}>
      <p className={s.text}>{text}</p>
    </div>
  )
}

export default Description
