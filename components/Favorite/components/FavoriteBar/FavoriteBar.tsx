import React, { useRef } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import useOutsideClick from 'common/hooks/useOutsideClick'
import s from './FavoriteBar.module.css'
import { useSelector } from 'react-redux'
import { getFavoriteProductsSelector } from 'store/favorite/selectors'
import { useTranslation } from 'next-i18next'

interface FavoriteBarProps {
  clickOutside: () => void
}

const FavoriteBar: React.FC<FavoriteBarProps> = ({ clickOutside }) => {
  const rootBarRef = useRef(null)
  useOutsideClick(rootBarRef, clickOutside)
  const { t } = useTranslation('common')

  const products = useSelector(getFavoriteProductsSelector)
  return (
    <div ref={rootBarRef} className={s.root}>
      {products.length
        ? products.map((i) => <ProductItem key={i.slug} product={i} />)
        : t('favorite.empty')}
    </div>
  )
}

export default FavoriteBar
