import ProductCard from 'components/ProductCard/ProductCard'
import React from 'react'
import s from './ProductGrid.module.css'
import { ProductCardType } from '../../services/static'

interface ProductGridProps {
  data: ProductCardType[]
}

const ProductGrid: React.FC<ProductGridProps> = ({ data }) => {
  return (
    <div className={s.grid}>
      {data.map((i) => (
        <ProductCard key={i.id} data={i} />
      ))}
    </div>
  )
}

export default ProductGrid
