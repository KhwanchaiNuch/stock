import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import usePut from '../../../hooks/usePut'
import usePostDownloadFile from '../../../hooks/usePostDownloadFile'
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
  const [loadingPrint, setLoadingPrint] = useState(false)

  const { onPut } = usePut('/api/v1/raw-material/note')
  const { onPost: onPostPdf } = usePostDownloadFile('/api/v1/raw-material/generate-qr-item')

  const onSaveReceiptNote = (andPrint = false) => {
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
          if (andPrint) {
            onReprintItem()
          } else {
            closeModal()
            showNotification({
              props: { type: 'success', title: 'save note successfully', notAutoClose: false, hasCloseBtn: false }
            })
            await delay(1500)
            location.reload()
          }
        } else {
          setLoading(false)
          showNotification({
            props: { type: 'error', title: get(res, 'error', ''), notAutoClose: true, hasCloseBtn: true }
          })
        }
      },
      onError: (e) => {
        console.log('onError ==>', e)
        setLoading(false)
        showNotification({
          props: { type: 'error', title: get(e, 'response.data.message', ''), notAutoClose: true, hasCloseBtn: true }
        })
      }
    })
  }

  // ข้อ 4: Reprint QR for this single item
  const onReprintItem = () => {
    if (loadingPrint) return
    setLoadingPrint(true)
    onPostPdf({
      variables: { itemId: id },
      onDone: async (res) => {
        setLoadingPrint(false)
        if (res) {
          const href = URL.createObjectURL(res)
          const link = document.createElement('a')
          link.href = href
          link.setAttribute('download', 'qr-reprint.pdf')
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(href)
          showNotification({
            props: { type: 'success', title: 'Reprint PDF ready', notAutoClose: false, hasCloseBtn: false }
          })
          await delay(1500)
          location.reload()
        } else {
          showNotification({
            props: { type: 'error', title: 'Reprint failed', notAutoClose: true, hasCloseBtn: true }
          })
        }
      },
      onError: (e) => {
        setLoadingPrint(false)
        showNotification({
          props: { type: 'error', title: get(e, 'response.data.message', 'Reprint error'), notAutoClose: true, hasCloseBtn: true }
        })
      }
    })
  }

  const onSubmit = (andPrint = false) => {
    if (isEmpty(inputNote) && isEmpty(String(inputQty))) {
      showNotification({
        props: { type: 'error', title: 'nothing to save', notAutoClose: false, hasCloseBtn: false }
      })
      return
    }
    onSaveReceiptNote(andPrint)
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => { closeModal() }}
      shouldCloseOnOverlayClick={false}
      style={styles}
      closeTimeoutMS={330}
    >
      <ModalContainer>
        <F.Container>
          <h1>{'Edit'}</h1>
          {/* ข้อ 4: QTY edit สำหรับ DRAFT หรือ INBOUND */}
          {(status === 'DRAFT' || receiptType === 'INBOUND') && (
            <div className="input_wrap">
              <input
                type="number"
                required
                value={inputQty}
                onChange={(e) => { setInputQty(e.target.value) }}
              />
              <label>{'Qty'}</label>
            </div>
          )}
          {receiptType === 'INBOUND' && (
            <div className="input_wrap">
              <input
                type="text"
                required
                value={inputNote}
                onChange={(e) => { setInputNote(e.target.value) }}
              />
              <label>{'Note (optional)'}</label>
            </div>
          )}
          <div className="btn-wrapper">
            <div className="btn no-bg" onClick={closeModal}>Cancel</div>
            <div className="btn" onClick={() => { onSubmit(false) }}>Save</div>
            {/* ข้อ 4: Save & Reprint button */}
            {receiptType === 'INBOUND' && (
              <div className="btn" style={{ backgroundColor: '#2BA6E1', marginLeft: '8px' }}
                onClick={() => { onSubmit(true) }}
              >
                {loadingPrint ? '...' : 'Save & Reprint'}
              </div>
            )}
          </div>
        </F.Container>
      </ModalContainer>
    </Modal>
  )
}

export default EditReceiptNote
