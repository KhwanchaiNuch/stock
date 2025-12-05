import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import { isEmpty, get } from 'lodash'
import delay from 'utils/delay'
import usePut from '../../../hooks/usePut'

const EditMasterProduct = (product) => {
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const styles = modalStyles(528)

  // console.log(product.input.type)
  // console.log(product.input.partNo)
  // const [type] = useState(product.input.type)
  // const [partNo] = useState(product.input.partNo)
  const [partName, setPartName] = useState(product.input.partName)
  const [minimumStock, setMinimumStock] = useState(product.input.minimumStock)
  const [note, setNote] = useState(product.input.note)
  const [spec, setSpec] = useState(product.input.spec)
  const [size, setSize] = useState(product.input.size)
  const [loading, setLoading] = useState(false)
  const { onPut } = usePut('/api/v1/product')

  const onSubmit = () => {
    if (isEmpty(partName)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter product name',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    //remove not require field
    if (isEmpty(minimumStock)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter minimum',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    const variables = {
      id: product.input.id,
      partName,
      minimumStock,
      note,
      size,
      spec,
    }
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
              title: 'Update product successfully',
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
            {'Edit New Product'}
          </h1>
          <div className="input_wrap focus">
          <input
              type="text"
              required
              defaultValue={product.input.type}
              disabled
            />
            <label>{'Type*'}</label>
          </div>
          <div className="input_wrap focus">
            <input
              type="text"
              required
              defaultValue={product.input.partNo}
              disabled
            />
            <label>{'Part No.*'}</label>
          </div>
          <div className="input_wrap">
            <input
              type="text"
              required
              value={partName}
              onChange={(e) => { setPartName(e.target.value) }}
            />
            <label>{'Product Name*'}</label>
          </div>
          <div className="input_wrap">
            <input
              type="text"
              required
              value={spec}
              onChange={(e) => { setSpec(e.target.value) }}
            />
            <label>{'Spec (optional)'}</label>
          </div>
          <div className="input_wrap">
            <input
              type="text"
              required
              value={size}
              onChange={(e) => { setSize(e.target.value) }}
            />
            <label>{'Size (optional)'}</label>
          </div>
          <div className="input_wrap">
            <input
              type="number"
              required
              value={minimumStock}
              onChange={(e) => { setMinimumStock(e.target.value) }}
            />
            <label>{'Minimum*'}</label>
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
              Save
            </div>
          </div>
        </F.Container>
      </ModalContainer>
    </Modal>
  )
}

export default EditMasterProduct
