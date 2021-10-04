import React from 'react'
import s from './HomeLayout.module.css'
import { HomePageSlider, MetaData } from 'services/static'
import { DefaultLocalesParams } from 'common/utils/locales-params'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Slider from '../Slider/Slider'
import useAuth from 'common/hooks/useAuth'
import Head from 'next/head'
import useFetchCurrency from 'common/hooks/useFetchCurrency'

interface HomeLayoutProps {
  meta: MetaData
  localesParams?: DefaultLocalesParams
  slides: HomePageSlider[]
}

const HomeLayout: React.FC<HomeLayoutProps> = ({
  meta,
  localesParams,
  slides,
  children,
}) => {
  useAuth()
  useFetchCurrency()

  return (
    <div className={s.root}>
      <Head>
        <title>Golden Key</title>
        <meta name='googlebot' content='noindex' />
      </Head>
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
