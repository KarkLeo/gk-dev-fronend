import React from 'react'
import Layout from '../../components/Layout'
import { MetaData } from '../../services/static'
import MapView from './components/MapView/MapView'
import { MapSettings } from 'pages/contacts'

interface ContactPageProps {
  meta: MetaData
  mapSettings: MapSettings
}

const ContactPage: React.FC<ContactPageProps> = ({ meta, mapSettings }) => {
  return (
    <Layout meta={meta}>
      <h1>Contact page</h1>
      <MapView mapSettings={mapSettings} />
    </Layout>
  )
}

export default ContactPage
