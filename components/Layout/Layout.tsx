import Header from 'components/Header'
import React from 'react'
import s from './Layout.module.css'
import { MetaData } from 'services/static'
import { DefaultLocalesParams } from 'common/utils/locales-params'
import Footer from 'components/Footer'
import useAuth from '../../common/hooks/useAuth'
import Head from 'next/head'

interface LayoutProps {
  meta: MetaData
  localesParams?: DefaultLocalesParams
}

const Layout: React.FC<LayoutProps> = ({ meta, localesParams, children }) => {
  useAuth()

  return (
    <div className={s.root}>
      <Header meta={meta} localesParams={localesParams} />
      <Head>
        <title>Golden Key</title>
        <meta name='googlebot' content='noindex' />
      </Head>
      <main className={s.body}>
        <div className={s.content}>{children}</div>
      </main>
      <Footer meta={meta} />
    </div>
  )
}

export default Layout
