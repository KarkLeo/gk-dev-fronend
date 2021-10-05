import React from 'react'
import Layout from 'components/Layout'
import { MetaData } from 'services/static'
import MapView from './components/MapView/MapView'
import { MapSettings } from 'pages/contacts'
import PhoneList from './components/PhoneList/PhoneList'
import AddressList from './components/AddressList/AddressList'
import EmailList from './components/EmailList/EmailList'
import SocialList from './components/SocialList/SocialList'
import s from './ContactPage.module.css'
import { useTranslation } from 'next-i18next'

interface ContactPageProps {
  meta: MetaData
  mapSettings: MapSettings
}

const ContactPage: React.FC<ContactPageProps> = ({ meta, mapSettings }) => {
  const { t } = useTranslation('common')
  return (
    <Layout meta={meta}>
      <h1>{t('pagesTitle.contactPage')}</h1>
      <div className={s.grid}>
        <div>
          {/*<AddressList data={meta.contactSetting.list_of_addresses} />*/}
          <PhoneList data={meta.contactSetting.list_of_numbers} />
          <EmailList data={meta.contactSetting.list_of_emails} />
          <SocialList data={meta.contactSetting.list_of_links} />
        </div>
        <div>
          {/*<MapView*/}
          {/*  mapSettings={mapSettings}*/}
          {/*  data={meta.contactSetting.list_of_addresses}*/}
          {/*/>*/}
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
