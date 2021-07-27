import React from 'react'
import { EmailListItem } from 'services/static'
import s from './EmailList.module.css'

interface EmailListProps {
  data: EmailListItem[]
}

const EmailList: React.FC<EmailListProps> = ({ data }) => {
  return (
    <div className={s.root}>
      <ul className={s.emailList}>
        {data.map((i) => (
          <li key={i.id} className={s.emailList__item}>
            <a href={`mailto:${i.email}`} className={s.email} title={i.label}>
              {i.email}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EmailList
