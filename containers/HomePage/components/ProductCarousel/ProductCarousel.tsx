import React from 'react'
import s from './ProductCarousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper/core'
import ProductCard from '../../../../components/ProductCard/ProductCard'

// install Swiper modules
SwiperCore.use([Autoplay, Navigation])

interface ProductCarouselProps {}

const ProductCarousel: React.FC<ProductCarouselProps> = () => {
  return (
    <div className={s.root}>
      <Swiper
        speed={1000}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title={'Сумка  MARTINI GO87 T407 ALVIERO MARTINI GO87 T407'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProductCarousel
