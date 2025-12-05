import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import { get, isEmpty } from 'lodash'
import delay from 'utils/delay'
import usePost from '../../../hooks/usePost'


const HideReceipt = ({ receiptNo='' }) => {
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const styles = modalStyles(528)
  const [loading, setLoading] = useState(false)


  const { onPost } = usePost('/api/v1/raw-material/hide-receipt')


  const onSaveReceiptNote = () => {
    const variables = {
      receiptNo,
    }
    if (loading) return
    setLoading(true)
    onPost({
      variables,
      onDone: async (res) => {
        if (get(res, 'statusCode', '') === 200) {
          setLoading(false)
          closeModal()
          showNotification({
            props: {
              type: 'success',
              title: 'hide receipt successfully',
              notAutoClose: false,
              hasCloseBtn: false
            }
          })
          await delay(1500)
          location.reload()
        } else {
          setLoading(false)
          showNotification({
            props: {
              type: 'error',
              title: get(res, 'error', ''),
              notAutoClose: true,
              hasCloseBtn: true
            }
          })
        }
      },
      onError: (e) => {
        console.log('onError ==>', e)
        setLoading(false)
        showNotification({
          props: {
            type: 'error',
            title: get(e, 'response.data.message', ''),
            notAutoClose: true,
            hasCloseBtn: true
          }
        })
      }
    })

  }

  const onSubmit = () => {
    onSaveReceiptNote()
  }

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
            {'Hide Receipt'}
          </h1>
          <h3>Hidden {receiptNo} from handheld</h3>
          <div className="btn-wrapper">
            <div className="btn no-bg" onClick={closeModal}>
              Cancel
            </div>
            <div className="btn" onClick={() => {
                onSubmit()
              }}
            >
              Confirm
            </div>
          </div>
        </F.Container>  
      </ModalContainer>
    </Modal>
  )
}

export default HideReceipt;

