import React from 'react'
import s from './SocialList.module.css'
import { SocialListItem } from 'services/static'
import Icon from 'components/Icon'

interface SocialListProps {
  data: SocialListItem[]
}

const SocialList: React.FC<SocialListProps> = ({ data }) => {
  return (
    <div className={s.root}>
      <ul className={s.socialList}>
        {data.map((i) => (
          <li key={i.id} className={s.socialLink}>
            <a href={i.url}>
              <Icon iconId={i.icon} className={s.socialLink__icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialList
