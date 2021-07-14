import React from 'react'
import s from './SocialList.module.css'
import { SocialListItem } from '../../../../services/static'
import Icon from 'components/Icon'

interface SocialListProps {}

const a: SocialListItem[] = [
  { id: '123', name: '@golden_key', url: 'google.com', icon: 'instagram' },
  { id: '234', name: '@golden_key', url: 'google.com', icon: 'telegram' },
  { id: '345', name: '@golden_key', url: 'google.com', icon: 'facebook' },
  { id: '456', name: '@golden_key', url: 'google.com', icon: 'twitter' },
]

const SocialList: React.FC<SocialListProps> = () => {
  return (
    <div className={s.root}>
      <ul className={s.socialList}>
        {a.map((i) => (
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
