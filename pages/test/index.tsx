import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config.js'
import Counter from 'components/counter'
import client from 'services/apollo-client'
import { gql } from '@apollo/client'
import Layout from '../../components/Layout'

function Page(props: any) {
  const router = useRouter()
  const { t } = useTranslation('common')

  console.log(props.data)

  return (
    <Layout>
      <h1>{t('title')}</h1>
      <Link
        href={router.pathname}
        locale={router.locale === 'en' ? 'ru' : 'en'}
      >
        {t('button')}
      </Link>
      <Counter />
    </Layout>
  )
}

export const getStaticProps = async ({ locale }: any) => {
  const QUERY = gql`
    query ($language: String!) {
      homePage(locale: $language) {
        slider {
          title
        }
      }
    }
  `

  console.log(locale)

  const { data } = await client.query({
    query: QUERY,
    variables: { language: locale },
  })

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
      data,
    },
  }
}

export default Page
