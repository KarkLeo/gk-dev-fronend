import React from 'react'

interface IconProps {
  iconId:
    | 'favorite'
    | 'favorite_border'
    | 'arrow_drop_down'
    | 'location'
    | 'user'
    | 'phone'
    | 'cart'
  className?: string
}

const Icon: React.FC<IconProps> = ({ iconId, className }) => {
  return (
    <svg className={className}>
      <use href={`#${iconId}`} />
    </svg>
  )
}

export default Icon
