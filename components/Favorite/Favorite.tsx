import React, { useCallback, useState } from 'react'
import FavoriteIcon from './components/FavoriteIcon/FavoriteIcon'
import FavoriteBar from './components/FavoriteBar/FavoriteBar'
import s from './Favorite.module.css'
import { debounce } from 'lodash'

interface FavoriteProps {
  iconClassName?: string
}

const Favorite: React.FC<FavoriteProps> = ({ iconClassName }) => {
  const [isOpen, setOpen] = useState(false)

  const toggleHandler = useCallback(
    debounce(() => setOpen((pre) => !pre), 300, {
      leading: true,
      trailing: false,
    }),
    [setOpen]
  )

  return (
    <div className={s.root}>
      <FavoriteIcon className={iconClassName} onClick={toggleHandler} />
      {isOpen && <FavoriteBar clickOutside={toggleHandler} />}
    </div>
  )
}

export default Favorite
