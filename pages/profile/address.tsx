import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { GetStaticProps } from 'next'
import usePrivateRoute from 'common/hooks/usePrivateRoute'
import { staticServices } from 'services'
import { MetaData } from 'services/static'
import AddressPage from 'containers/ProfilePage/AddressPage'
import Loading from '../../components/Loading/Loading'

interface ProfileAddressProps {
  meta: MetaData
}

const ProfileAddress: React.FC<ProfileAddressProps> = ({ meta }) => {
  const loading = usePrivateRoute()

  return loading ? <Loading /> : <AddressPage meta={meta} />
}

//===== fetching data =====

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const meta = await staticServices.getMeta({
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

export default ProfileAddress
