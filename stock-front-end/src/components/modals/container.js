import React from 'react'
import { ModalBody, ModalContent } from './styles'

const ModalContainer = ({ children, modalBodyStyles }) => {
  return (
    <ModalBody className="modal__body" styles={modalBodyStyles}>
      <ModalContent className="modal__content">{children}</ModalContent>
    </ModalBody>
  )
}

export default ModalContainer
