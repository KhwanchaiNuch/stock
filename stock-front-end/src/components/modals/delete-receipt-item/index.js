import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'

const DeleteReceiptItem = ({ title = '', onSubmit = null }) => {
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const [note, setNote] = useState('')

  const styles = modalStyles(528)
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => {
        closeModal()
      }}
      shouldCloseOnOverlayClick={false}
      style={styles}
      closeTimeoutMS={330}
    >
      <ModalContainer>
        <F.Container>
          <h1>
            {title}
          </h1>
          <div className="input_wrap">
            <input
              type="text"
              required
              value={note}
              onChange={(e) => { setNote(e.target.value) }}
            />
            <label>{'Note (optional)'}</label>
          </div>
          <div className="btn-wrapper">
            <div className="btn no-bg" onClick={closeModal}>
              Cancel
            </div>
            <div
              className="btn"
              onClick={() => {
                if (onSubmit) {
                  onSubmit(note)
                }
                closeModal()
              }}
            >
              Delete
            </div>
          </div>
        </F.Container>
      </ModalContainer>
    </Modal>
  )
}

export default DeleteReceiptItem
