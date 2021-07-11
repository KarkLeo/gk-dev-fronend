import React from 'react'
import { EmailListItem } from 'services/static'
import s from './EmailList.module.css'

interface EmailListProps {
  list_of_emails: EmailListItem[]
}

const a: EmailListItem[] = [
  {
    id: '123',
    label: 'По вопросам ....',
    email: 'test@gamail.com',
  },
  {
    id: '12321131',
    label: 'По вопросам ....',
    email: 'test@gamail.com',
  },
]

const EmailList: React.FC = () => {
  return (
    <div className={s.root}>
      <ul className={s.emailList}>
        {a.map((i) => (
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
