import Icon from 'components/Icon'
import React from 'react'
import s from './EmptyPhoto.module.css'
import classNames from 'classnames'

interface EmptyPhotoProps {
  className?: string
}

const EmptyPhoto: React.FC<EmptyPhotoProps> = ({ className }) => {
  return (
    <div className={classNames(s.wrapper, className)}>
      <Icon iconId='image' className={s.icon} />
    </div>
  )
}

export default EmptyPhoto
