import React from 'react'
import s from './ProductCarousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper/core'
import ProductCard from 'components/ProductCard/ProductCard'
import useMediaQuery from 'common/hooks/useMediaQuery'
import { mobileOnly, tabOnly } from 'styles/mediaQuery'

// install Swiper modules
SwiperCore.use([Autoplay, Navigation])

interface ProductCarouselProps {}

const ProductCarousel: React.FC<ProductCarouselProps> = () => {
  const mobile = useMediaQuery(mobileOnly)
  const tab = useMediaQuery(tabOnly)

  return (
    <div className={s.root}>
      <h2 className={s.title}>Карусель товаров</h2>
      <Swiper
        speed={1000}
        spaceBetween={tab && mobile ? 24 : 32}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={mobile ? 1 : tab ? 2 : 4}
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
