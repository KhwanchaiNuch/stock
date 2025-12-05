import React from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'

const StartInventory = ({ }) => {
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
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
            {'Start Inventory'}
          </h1>
          <div className="input_wrap">
            <input type="date" required />
            <label>{'Date'}</label>
          </div>
          <div className="btn-wrapper">
            <div className="btn no-bg" onClick={closeModal}>
              Cancel
            </div>
            <div className="btn" onClick={closeModal}>
              OK
            </div>
          </div>
        </F.Container>
      </ModalContainer>
    </Modal>
  )
}

export default StartInventory
