import React from 'react'
import { HomePageSlider } from 'services/static/'
import Image from 'next/image'
import s from './Slidec.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Parallax,
} from 'swiper/core'

// install Swiper modules
SwiperCore.use([Autoplay, Parallax, Pagination, Navigation])

interface SliderProps {
  slides: HomePageSlider[]
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <div className={s.slider}>
      <Swiper
        speed={1000}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((i) => (
          <SwiperSlide key={i.id}>
            <div className={s.slide}>
              <div className={s.slide__content} data-swiper-parallax='-600'>
                <div className={s.slide__contentBody}>
                  <h3 className={s.slide__title}>{i.title}</h3>
                  <p className={s.slide__text}>{i.description}</p>
                </div>
              </div>

              <Image
                src={i.image ? i.image.formats.large.url : ''}
                alt={i.title}
                layout='fill'
                className={s.slide__image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
