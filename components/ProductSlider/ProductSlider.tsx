import React from 'react'
import s from './ProductSlider.module.css'
import ProductCard from '../ProductCard/ProductCard'
import useMediaQuery from 'common/hooks/useMediaQuery'
import { mobileOnly, tabOnly } from 'styles/mediaQuery'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core'
import { ProductCardType } from 'services/static/'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

interface ProductSliderProps {
  products: ProductCardType[]
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const mobile = useMediaQuery(mobileOnly)
  const tab = useMediaQuery(tabOnly)

  return (
    <div className={s.root}>
      <Swiper
        speed={1000}
        spaceBetween={tab && mobile ? 24 : 64}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={mobile ? 1 : tab ? 2 : 4}
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
