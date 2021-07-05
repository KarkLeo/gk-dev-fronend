import ProductCard from 'components/ProductCard/ProductCard'
import React from 'react'
import s from './ProductGrid.module.css'

interface ProductGridProps {}

const ProductGrid: React.FC<ProductGridProps> = () => {
  return (
    <div className={s.grid}>
      <ProductCard />
      <ProductCard />
      <ProductCard
        title={'Сумка  MARTINI GO87 T407 ALVIERO MARTINI GO87 T407'}
      />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductGrid
