import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModalAction, getModalStatusSelector } from 'store/modal'
import FormReducer from 'components/Forms/FormReducer'
import Modal from 'components/Modal/Modal'

const AppModals: React.FC = () => {
  const dispatch = useDispatch()
  const modalStatus = useSelector(getModalStatusSelector)

  const closeHandler = useCallback(
    () => dispatch(closeModalAction()),
    [dispatch]
  )

  return modalStatus.isOpen ? (
    <Modal title={modalStatus.modal || ''} close={closeHandler}>
      <FormReducer modal={modalStatus.modal} />
    </Modal>
  ) : null
}

export default AppModals
