import React from 'react'
import Icon from '../../../Icon'
import s from './FavoriteIcon.module.css'

interface FavoriteIconProps {
  className?: string
  onClick?: () => void
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ className, onClick }) => {
  return (
    <button onClick={onClick} className={s.button}>
      <Icon iconId='favorite' className={className} />
      <div className={s.badge}>6</div>
    </button>
  )
}

export default FavoriteIcon
