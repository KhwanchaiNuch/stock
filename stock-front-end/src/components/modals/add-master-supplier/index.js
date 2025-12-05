import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import { isEmpty, get } from 'lodash'
import usePost from 'hooks/usePost'
import delay from 'utils/delay'

const AddMasterSupplier = () => {
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const styles = modalStyles(528)

  const [supplierNo, setSupplierNo] = useState('')
  const [supplierName, setSupplierName] = useState('')
  const [note, setNote] = useState('')
  const [loading, setLoading] = useState(false)

  const { onPost } = usePost('/api/v1/suppliers')

  const onSubmit = () => {
    if (isEmpty(supplierNo)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter Supplier No.',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (isEmpty(supplierName)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter supplier name',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    const variables = {
      supplierName,
      supplierNo,
      note
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
              title: 'Create supplier successfully',
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
            {'Add New Supplier'}
          </h1>
          <div className="input_wrap">
            <input
              type="text"
              required
              value={supplierNo}
              onChange={(e) => { setSupplierNo(e.target.value) }}
            />
            <label>{'Supplier No.*'}</label>
          </div>
          <div className="input_wrap">
            <input
              type="text"
              required
              value={supplierName}
              onChange={(e) => { setSupplierName(e.target.value) }}
            />
            <label>{'Supplier Name*'}</label>
          </div>
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
            <div className="btn" onClick={onSubmit}>
              Add
            </div>
          </div>
        </F.Container>
      </ModalContainer>
    </Modal>
  )
}

export default AddMasterSupplier
