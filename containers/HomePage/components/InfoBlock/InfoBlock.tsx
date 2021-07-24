import React from 'react'
import s from './InfoBlock.module.css'
import { HomePageInfoBlock } from 'services/static/types/home-page.types'

interface InfoBlockProps {
  data: HomePageInfoBlock
}

const InfoBlock: React.FC<InfoBlockProps> = ({ data }) => {
  return (
    <div className={s.root}>
      <div className={s.left}>
        <img src={data.image.url} alt={data.title} className={s.image} />
      </div>
      <div className={s.right}>
        <h2 className={s.title}>{data.title}</h2>
        <h3 className={s.subtitle}>{data.sub_title}</h3>
        <p className={s.text}>{data.description}</p>
        {data.button && (
          <a className={s.button} href={data.button.url}>
            {data.button.text}
          </a>
        )}
      </div>
    </div>
  )
}

export default InfoBlock
