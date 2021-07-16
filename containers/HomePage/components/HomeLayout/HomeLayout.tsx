import React from 'react'
import s from './HomeLayout.module.css'
import { HomePageSlider, MetaData } from 'services/static'
import { CategoryLocalesParams } from 'common/utils/locales-params'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Slider from '../Slider/Slider'

interface HomeLayoutProps {
  meta: MetaData
  localesParams?: CategoryLocalesParams
  slides: HomePageSlider[]
}

const HomeLayout: React.FC<HomeLayoutProps> = ({
  meta,
  localesParams,
  slides,
  children,
}) => {
  return (
    <div className={s.root}>
      <div className={s.head}>
        <Header meta={meta} localesParams={localesParams} />
        <Slider slides={slides} />
      </div>
      <main className={s.body}>
        <div className={s.content}>{children}</div>
      </main>
      <Footer meta={meta} />
    </div>
  )
}

export default HomeLayout
