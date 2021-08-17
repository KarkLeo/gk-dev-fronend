import Layout from 'components/Layout'
import React from 'react'
import { MetaData } from 'services/static'
import ProfileLayout from './components/ProfileLayout/ProfileLayout'
import { EditPasswordForm } from 'components/Forms/EditProfileForm/EditPasswordForm'

interface PasswordPageProps {
  meta: MetaData
}

const PasswordPage: React.FC<PasswordPageProps> = ({ meta }) => {
  return (
    <Layout meta={meta}>
      <ProfileLayout>
        <h1>Edit Password</h1>
        <EditPasswordForm />
      </ProfileLayout>
    </Layout>
  )
}

export default PasswordPage
