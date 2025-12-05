import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import { isEmpty, get, size } from 'lodash'
import usePost from 'hooks/usePost'
import delay from 'utils/delay'

const AddMasterProduct = () => {
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const styles = modalStyles(528)

  const [type, setType] = useState('')
  const [partNo, setPartNo] = useState('')
  const [partName, setPatName] = useState('')
  const [minimumStock, setMinimumStock] = useState('')
  const [note, setNote] = useState('')
  const [spec, setSpec] = useState('')
  const [size, setSize] = useState('')
  const [loading, setLoading] = useState(false)

  const { onPost } = usePost('/api/v1/product')

  const onSubmit = () => {
    if (isEmpty(type)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter type',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (isEmpty(partNo)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter Part No.',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
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
      type,
      partNo,
      partName,
      minimumStock,
      note,
      size,
      spec,
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
              title: 'Create product successfully',
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
            {'Add New Product'}
          </h1>
          <div className="select_wrap">
            <select
              required
              value={type}
              onChange={(e) => { setType(e.target.value) }}
            >
              <option className="placeholder" selected disabled value="">{''}</option>
              <option value={'RM'}>{'RM'}</option>
              <option value={'WIP'}>{'WIP'}</option>
              <option value={'FG'}>{'FG'}</option>
              <option value={'BS'}>{'BS'}</option>
            </select>
            <label>{'Type*'}</label>
          </div>
          <div className="input_wrap">
            <input
              type="text"
              required
              value={partNo}
              onChange={(e) => { setPartNo(e.target.value) }}
            />
            <label>{'Part No.*'}</label>
          </div>
          <div className="input_wrap">
            <input
              type="text"
              required
              value={partName}
              onChange={(e) => { setPatName(e.target.value) }}
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
              Add
            </div>
          </div>
        </F.Container>
      </ModalContainer>
    </Modal>
  )
}

export default AddMasterProduct
