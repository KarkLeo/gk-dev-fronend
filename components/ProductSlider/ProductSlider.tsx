import React from 'react'
import s from './ProductSlider.module.css'
import ProductCard from '../ProductCard/ProductCard'
import { useMediaBreakpoints } from 'common/hooks/useMediaQuery'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core'
import { ProductCardType } from 'services/static/'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

interface ProductSliderProps {
  products: ProductCardType[]
}

//===== create style =====

const getGap = (breakpoint: string): number => {
  switch (breakpoint) {
    case 'xs':
      return 16
    case 'sm':
      return 16
    case 'md':
      return 32
    case 'lg':
      return 32
    case 'xl':
      return 32
    case 'xxl':
      return 64
    default:
      return 16
  }
}

const getPerView = (breakpoint: string): number => {
  switch (breakpoint) {
    case 'xs':
      return 1
    case 'sm':
      return 2
    case 'md':
      return 2
    case 'lg':
      return 3
    case 'xl':
      return 4
    case 'xxl':
      return 4
    default:
      return 1
  }
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const breakpoint = useMediaBreakpoints()

  return (
    <div className={s.root}>
      <Swiper
        speed={1000}
        spaceBetween={getGap(breakpoint)}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={getPerView(breakpoint)}
      >
        {products.map((i) => (
          <SwiperSlide key={i.id}>
            <ProductCard data={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductSlider
