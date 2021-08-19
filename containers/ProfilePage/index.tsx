import { EditProfileForm } from 'components/Forms/EditProfileForm/EditProfileForm'
import Layout from 'components/Layout'
import React from 'react'
import { MetaData } from 'services/static'
import ProfileLayout from './components/ProfileLayout/ProfileLayout'

interface ProfilePageProps {
  meta: MetaData
}

const ProfilePage: React.FC<ProfilePageProps> = ({ meta }) => {
  return (
    <Layout meta={meta}>
      <ProfileLayout>
        <h1>Edit Profile</h1>
        <EditProfileForm />
      </ProfileLayout>
    </Layout>
  )
}

export default ProfilePage
