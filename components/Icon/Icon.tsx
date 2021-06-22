import React from 'react'
import { viewBox } from './Sprite'

interface IconProps {
  iconId: keyof typeof viewBox
  className?: string
}

const Icon: React.FC<IconProps> = ({ iconId, className }) => {
  return (
    <svg className={className} viewBox={viewBox[iconId]}>
      <use href={`#${iconId}`} />
    </svg>
  )
}

export default Icon
