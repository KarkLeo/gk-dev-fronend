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

interface AddressPageProps {
  meta: MetaData
}

const AddressPage: React.FC<AddressPageProps> = ({ meta }) => {
  const dispatch = useDispatch()
  const address = useSelector(getProfileAddressSelector)

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
        <h1>Edit Address</h1>
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
