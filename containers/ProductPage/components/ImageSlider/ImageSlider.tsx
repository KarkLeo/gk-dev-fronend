import React, { useState } from 'react'
import s from './ImageSlider.module.css'

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import useMediaQuery from 'common/hooks/useMediaQuery'
import { desktopOnly } from 'styles/mediaQuery'
import { DefaultImageType } from 'services/static'

// install Swiper modules
SwiperCore.use([Navigation, Thumbs])

interface ImageSliderProps {
  data: DefaultImageType[]
}

const ImageSlider: React.FC<ImageSliderProps> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null)
  const isDesktop = useMediaQuery(desktopOnly)

  return (
    <div className={s.root}>
      <div className={s.thumbSlide}>
        <div className={s.thumbSlide__body}>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={isDesktop ? 32 : 24}
            slidesPerView={4}
            freeMode={true}
            watchSlidesVisibility={true}
            watchSlidesProgress={true}
            direction={isDesktop ? 'vertical' : 'horizontal'}
          >
            {data.map((i) => (
              <SwiperSlide key={i.url}>
                <div className={s.image}>
                  <img src={i.formats.small.url} alt='' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={s.mainSlide}>
        <div className={s.mainSlide__body}>
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
          >
            {data.map((i) => (
              <SwiperSlide key={i.url}>
                <div className={s.image}>
                  <img
                    src={i.formats?.medium?.url || i.formats?.small?.url}
                    alt=''
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
