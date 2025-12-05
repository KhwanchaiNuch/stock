import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'

const ReceiptNumber = ({ receiptNo, stockType, receiptType }) => {
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const { openModal } = useStoreActions(actions => actions.modal)
  const styles = modalStyles(528)
  const [recNo, setRecNo ] = useState(receiptNo)

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
            {receiptType === 'INBOUND'? 'Receipt Number' : 'Pickup Number'}
          </h1>
          <div className="input_wrap focus">
            <input
              type="text"
              required
              disabled
              value={recNo}
              onChange={(e) => { setRecNo(e.target.value) }}
            />
            {receiptType === 'INBOUND' ?  <label>{'Receipt no.'}</label> :<label>{'Pickup no.'}</label> }
          </div>
          <div className="btn-wrapper">
            <div className="btn no-bg" onClick={closeModal}>
              Cancel
            </div>
            <div
              className="btn"
              onClick={() => {
                if (receiptType === 'INBOUND') {
                  openModal({
                    type: 'CREATE_RECEIPT',
                    data: {
                      receiptNo: recNo,
                      firstItems: true,
                      stockType,
                    }
                  })
                } else {
                  openModal({
                    type: 'CREATE_PICKUP',
                    data: {
                      receiptNo: recNo,
                      firstItems: true,
                      stockType,
                    }
                  })
                }
                
                // if (type === 'rm') {
                //   openModal({
                //     type: 'CREATE_RM_RECEIPT',
                //     data: {
                //       receiptNo: recNo,
                //       firstItems: true,
                //       stockType,
                //       receiptType,
                //     }
                //   })
                // } else {
                //   openModal({
                //     type: 'CREATE_FG_RECEIPT',
                //     data: {
                //       receiptNo: recNo,
                //       firstItems: true
                //     }
                //   })
                // }
              }}
            >
              Next
            </div>
          </div>
        </F.Container>
      </ModalContainer>
    </Modal>
  )
}

export default ReceiptNumber
