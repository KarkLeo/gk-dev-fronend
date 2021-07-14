import React from 'react'
import Layout from '../../components/Layout'
import { MetaData } from '../../services/static'
import MapView from './components/MapView/MapView'
import { MapSettings } from 'pages/contacts'
import PhoneList from './components/PhoneList/PhoneList'
import AddressList from './components/AddressList/AddressList'
import EmailList from './components/EmailList/EmailList'
import SocialList from './components/SocialList/SocialList'
import s from './ContactPage.module.css'

interface ContactPageProps {
  meta: MetaData
  mapSettings: MapSettings
}

const ContactPage: React.FC<ContactPageProps> = ({ meta, mapSettings }) => {
  return (
    <Layout meta={meta}>
      <h1>Contact page</h1>
      <div className={s.grid}>
        <div>
          <AddressList />
          <PhoneList list_of_numbers={meta.contactSetting.list_of_numbers} />
          <EmailList />
          <SocialList />
        </div>
        <div>
          <MapView mapSettings={mapSettings} />
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
