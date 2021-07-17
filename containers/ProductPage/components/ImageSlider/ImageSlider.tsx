import React, { useState } from 'react'
import s from './ImageSlider.module.css'

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'

// install Swiper modules
SwiperCore.use([Navigation, Thumbs])

const imageArray = [
  'https://picsum.photos/',
  'https://picsum.photos/',
  'https://picsum.photos/',
  'https://picsum.photos/',
  'https://picsum.photos/',
  'https://picsum.photos/',
  'https://picsum.photos/',
]

interface ImageSliderProps {}

const ImageSlider: React.FC<ImageSliderProps> = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null)
  return (
    <div className={s.root}>
      <div className={s.thumbSlide}>
        <div className={s.thumbSlide__body}>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={32}
            slidesPerView={4}
            freeMode={true}
            watchSlidesVisibility={true}
            watchSlidesProgress={true}
            direction={'vertical'}
          >
            {imageArray.map((i, index) => (
              <SwiperSlide key={index}>
                <div className={s.image}>
                  <img src={i + 50 + index + '/' + 50 + index} />
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
            {imageArray.map((i, index) => (
              <SwiperSlide key={index}>
                <div className={s.image}>
                  <img src={i + 50 + index + '/' + 50 + index} />
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
