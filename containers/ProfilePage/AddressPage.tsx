import Layout from 'components/Layout'
import React, { useCallback } from 'react'
import { MetaData } from 'services/static'
import ProfileLayout from './components/ProfileLayout/ProfileLayout'
import { AddressForm } from 'components/Forms/AddressForm/AddressForm'
import { useDispatch, useSelector } from 'react-redux'
import {
  createProfileAddressThunk,
  deleteProfileAddressThunk,
  editProfileAddressThunk,
  getProfileAddressSelector,
} from 'store/profile'
import AddressCard from 'components/AddressCard/AddressCard'
import { UserAddress } from 'services/public'
import { useTranslation } from 'next-i18next'
import ProfileTitle from './components/ProfileLayout/components/ProfileTitle/ProfileTitle'

interface AddressPageProps {
  meta: MetaData
}

const AddressPage: React.FC<AddressPageProps> = ({ meta }) => {
  const dispatch = useDispatch()
  const address = useSelector(getProfileAddressSelector)
  const { t } = useTranslation('common')

  const onDeleteHandler = useCallback(
    (id: string) => dispatch(deleteProfileAddressThunk(id)),
    [dispatch]
  )

  const onEditHandler = useCallback(
    (id: string, data: UserAddress) =>
      dispatch(editProfileAddressThunk(id, data)),
    [dispatch]
  )

  const onCreateHandler = useCallback(
    (data: UserAddress) => dispatch(createProfileAddressThunk(data)),
    [dispatch]
  )

  return (
    <Layout meta={meta}>
      <ProfileLayout>
        <ProfileTitle>{t('profile.titles.address')}</ProfileTitle>
        {address &&
          address.map((i) => (
            <AddressCard
              key={i.id}
              data={i}
              onDelete={onDeleteHandler}
              onEdit={onEditHandler}
            />
          ))}
        <AddressForm onSubmit={onCreateHandler} />
      </ProfileLayout>
    </Layout>
  )
}

export default AddressPage
