import Layout from 'components/Layout'
import React from 'react'
import { MetaData } from 'services/static'
import ProfileLayout from './components/ProfileLayout/ProfileLayout'
import { EditPasswordForm } from 'components/Forms/EditProfileForm/EditPasswordForm'
import { AddressForm } from '../../components/Forms/AddressForm/AddressForm'

interface AddressPageProps {
  meta: MetaData
}

const AddressPage: React.FC<AddressPageProps> = ({ meta }) => {
  return (
    <Layout meta={meta}>
      <ProfileLayout>
        <h1>Edit Address</h1>
        <AddressForm />
      </ProfileLayout>
    </Layout>
  )
}

export default AddressPage
