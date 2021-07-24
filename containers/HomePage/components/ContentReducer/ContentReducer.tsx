import React from 'react'
import { HomePageContent } from 'services/static/types/home-page.types'
import InfoBlock from '../InfoBlock/InfoBlock'
import ProductCarousel from '../ProductCarousel/ProductCarousel'

interface ContentReducerProps {
  data: HomePageContent[number]
}

const ContentReducer: React.FC<ContentReducerProps> = ({ data }) => {
  switch (data.__typename) {
    case 'ComponentHomePageInfoBlock':
      return <InfoBlock data={data} />
    case 'ComponentHomePageProductCarousel':
      return <ProductCarousel />
    default:
      return null
  }
}

export default ContentReducer
