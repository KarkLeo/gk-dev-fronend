import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import Layout from 'components/Layout'
import { GetStaticProps } from 'next'
import { staticData } from 'services'
import { ContactsSettingsData } from 'services/static'

interface HomePageProps {
  contact: ContactsSettingsData
}

const Contacts: React.FC<HomePageProps> = ({ contact }: HomePageProps) => {
  return (
    <Layout contact={contact}>
      <h1>Contact page</h1>
    </Layout>
  )
}

//===== fetching data =====

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const contact = await staticData.getContactSettings({
    lang: locale ? locale : 'ru',
  })

  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale : 'ru',
        ['common'],
        nextI18NextConfig
      )),
      contact,
    },
  }
}

export default Contacts
