import React from 'react'
import Icon from '../../../Icon'
import s from './FavoriteIcon.module.css'
import { useSelector } from 'react-redux'
import { getFavoriteProductsCountSelector } from 'store/favorite/selectors'

interface FavoriteIconProps {
  className?: string
  onClick?: () => void
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ className, onClick }) => {
  const count = useSelector(getFavoriteProductsCountSelector)

  return (
    <button onClick={onClick} className={s.button}>
      <Icon iconId='favorite' className={className} />
      {count > 0 && <div className={s.badge}>{count}</div>}
    </button>
  )
}

export default FavoriteIcon
