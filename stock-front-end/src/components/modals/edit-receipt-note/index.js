import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import usePut from '../../../hooks/usePut'
import { get, isEmpty } from 'lodash'
import delay from 'utils/delay'


const EditReceiptNote = ({id = '', note = '', qty= '', status = '', receiptType = '' }) => {
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const styles = modalStyles(528)
  const [ inputNote, setInputNote] = useState(note)
  const [ inputQty, setInputQty] = useState(qty)
  const [loading, setLoading] = useState(false)


  const { onPut } = usePut('/api/v1/raw-material/note')


  const onSaveReceiptNote = () => {
    const variables = {
      id,
      note: inputNote,
      qty: +inputQty,
    };
    if (loading) return
    setLoading(true)
    onPut({
      variables,
      onDone: async (res) => {
        if (get(res, 'statusCode', '') === 200) {
          setLoading(false)
          closeModal()
          showNotification({
            props: {
              type: 'success',
              title: 'save note successfully',
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
    if (isEmpty(inputNote) && isEmpty(inputQty)) {
      showNotification({
        props: {
          type: 'error',
          title: 'noting to save',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
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
            {'Edit'}
          </h1>
          { status === 'DRAFT' && <div className="input_wrap">
            <input 
              type="text" 
              required 
              value={inputQty} 
              onChange={(e) => {setInputQty(e.target.value)}} 
            />
            <label>{'Qty'}</label>
          </div>}
         {receiptType === 'INBOUND' && <div className="input_wrap">
            <input 
              type="text" 
              required 
              value={inputNote} 
              onChange={(e) => {setInputNote(e.target.value)}} 
            />
            <label>{'Note (optional)'}</label>
          </div>}
          <div className="btn-wrapper">
            <div className="btn no-bg" onClick={closeModal}>
              Cancel
            </div>
            <div className="btn" onClick={() => {
                onSubmit()
              }}
            >
              Save
            </div>
          </div>
        </F.Container>
      </ModalContainer>
    </Modal>
  )
}

export default EditReceiptNote
