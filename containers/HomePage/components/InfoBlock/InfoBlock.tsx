import React from 'react'
import s from './InfoBlock.module.css'

interface InfoBlockProps {}

const InfoBlock: React.FC<InfoBlockProps> = () => {
  return (
    <div className={s.root}>
      <div className={s.left}>
        <img
          src='https://picsum.photos/1000/1000'
          alt='title'
          className={s.image}
        />
      </div>
      <div className={s.right}>
        <h2 className={s.title}>
          Современный дизайн и высокотехнологичные материалы
        </h2>
        <h3 className={s.subtitle}>
          Самым удобным видом сумок, по нашему мнению - сумка через плечо. С
          такой сумкой можно отправляться куда угодно – от работы, до
          путешествия или простой прогулки. Самый важные вещи всегда под рукой:
          документы, смартфоны, наушников и прочего.
        </h3>
        <p className={s.text}>
          Логотип бренда Aeronautica Militare - орел, а вокруг него надписи с
          названием бренда и девизом ВВС Италии "VIRTUTE SIDERUM TENUS", который
          в переводе означает "С отвагой к звездам".
        </p>
        <a className={s.button} href={'#'}>
          Ссылка
        </a>
      </div>
    </div>
  )
}

export default InfoBlock
