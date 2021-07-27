import React from 'react'
import s from './ProductCarousel.module.css'
import ProductSlider from 'components/ProductSlider/ProductSlider'
import { HomePageProductCarousel } from 'services/static'

interface ProductCarouselProps {
  data: HomePageProductCarousel
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ data }) => {
  return (
    <div className={s.root}>
      <h2 className={s.title}>{data.title}</h2>
      <ProductSlider products={data.products} />
    </div>
  )
}

export default ProductCarousel
