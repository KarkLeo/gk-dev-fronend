import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import Layout from 'components/Layout'
import { GetStaticProps } from 'next'
import { staticData } from 'services'
import { MetaData } from 'services/static'

interface ContactsProps {
  meta: MetaData
}

const Contacts: React.FC<ContactsProps> = ({ meta }) => {
  return (
    <Layout meta={meta}>
      <h1>Contact page</h1>
    </Layout>
  )
}

//===== fetching data =====

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const meta = await staticData.getMeta({
    lang: locale ? locale : 'ru',
  })

  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale : 'ru',
        ['common'],
        nextI18NextConfig
      )),
      meta,
    },
  }
}

export default Contacts
