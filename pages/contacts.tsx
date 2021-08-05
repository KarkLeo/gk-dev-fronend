import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { GetStaticProps } from 'next'
import { staticServices } from 'services'
import { MetaData } from 'services/static'
import ContactPage from '../containers/ContactPage'

export interface MapSettings {
  style: string
  token: string
}

interface ContactsProps {
  meta: MetaData
  mapSettings: MapSettings
}

const Contacts: React.FC<ContactsProps> = ({ meta, mapSettings }) => {
  return <ContactPage meta={meta} mapSettings={mapSettings} />
}

//===== fetching data =====

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const meta = await staticServices.getMeta({
    lang: locale ? locale : 'ru',
  })

  const mapSettings: MapSettings = {
    style: process.env.MAP_STYLE as string,
    token: process.env.MAP_API_KEY as string,
  }

  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale : 'ru',
        ['common'],
        nextI18NextConfig
      )),
      meta,
      mapSettings,
    },
  }
}

export default Contacts
