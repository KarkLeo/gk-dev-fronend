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
          <li key={i.id} className={s.socialList__item}>
            <a href={i.url} className={s.socialLink}>
              <Icon iconId={i.icon} className={s.socialLink__icon} />
              <span className={s.socialLink__name}>{i.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialList
