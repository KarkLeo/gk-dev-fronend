import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModalAction, getModalStatusSelector } from 'store/modal'
import FormReducer from 'components/Forms/FormReducer'
import Modal from 'components/Modal/Modal'
import { useTranslation } from 'next-i18next'

const AppModals: React.FC = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation('common')

  const modalStatus = useSelector(getModalStatusSelector)

  const closeHandler = useCallback(
    () => dispatch(closeModalAction()),
    [dispatch]
  )

  const modalTitle = useMemo(() => {
    switch (modalStatus.modal) {
      case 'LOGIN':
        return t('profile.login')
      case 'REGISTER':
        return t('profile.register')
      default:
        return ''
    }
  }, [modalStatus, t])

  return modalStatus.isOpen ? (
    <Modal title={modalTitle} close={closeHandler}>
      <FormReducer modal={modalStatus.modal} />
    </Modal>
  ) : null
}

export default AppModals
