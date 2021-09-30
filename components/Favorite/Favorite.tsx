import React, { useCallback, useState } from 'react'
import FavoriteIcon from './components/FavoriteIcon/FavoriteIcon'
import FavoriteBar from './components/FavoriteBar/FavoriteBar'
import s from './Favorite.module.css'

interface FavoriteProps {
  iconClassName?: string
}

const Favorite: React.FC<FavoriteProps> = ({ iconClassName }) => {
  const [isOpen, setOpen] = useState(false)

  const openHandler = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  const closeHandler = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <div className={s.root}>
      <FavoriteIcon className={iconClassName} onClick={openHandler} />
      {isOpen && <FavoriteBar clickOutside={closeHandler} />}
    </div>
  )
}

export default Favorite
