import Icon from 'components/Icon'
import React, { useEffect, useRef } from 'react'
import s from './Modal.module.css'
import useOutsideClick from 'common/hooks/useOutsideClick'
import { lockScroll, unlockScroll } from 'common/utils/scroll-lock'

interface ModalProps {
  title: string
  close: () => void
}

const Modal: React.FC<ModalProps> = ({ title, close, children }) => {
  useEffect(() => {
    lockScroll()
    return () => unlockScroll()
  }, [])

  const bodyRef = useRef(null)
  useOutsideClick(bodyRef, close)

  return (
    <div className={s.root}>
      <div className={s.body} ref={bodyRef}>
        <div className={s.head}>
          <h2 className={s.title}>{title}</h2>
          <button className={s.button} onClick={close}>
            <Icon iconId='close' className={s.button__icon} />
          </button>
        </div>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  )
}

export default Modal
