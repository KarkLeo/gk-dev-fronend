import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { GetStaticProps } from 'next'
import { staticServices } from 'services'
import { HomePageData, MetaData } from 'services/static'
import HomeLayout from 'containers/HomePage/components/HomeLayout/HomeLayout'
import ContentReducer from 'containers/HomePage/components/ContentReducer/ContentReducer'
import React from 'react'

interface HomePageProps {
  meta: MetaData
  pageData: HomePageData
}

export default function Home({ meta, pageData }: HomePageProps) {
  return (
    <HomeLayout meta={meta} slides={pageData.homePage.slider}>
      <Head>
        <title>Golden Key</title>
        <meta name='googlebot' content='noindex' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {pageData.homePage.content.map((i) => (
        <ContentReducer key={i.id} data={i} />
      ))}
    </HomeLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = locale ? locale : 'ru'

  const meta = await staticServices.getMeta({ lang })
  const pageData = await staticServices.getHomePage({ lang })

  return {
    props: {
      ...(await serverSideTranslations(lang, ['common'], nextI18NextConfig)),
      meta,
      pageData,
    },
  }
}
