import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import { isEmpty, get } from 'lodash'
import usePost from 'hooks/usePost'
import delay from 'utils/delay'

const AddMasterCustomer = () => {
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const styles = modalStyles(528)

  const [customerNo, setCustomerNo] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerType, setCustomerType] = useState('')   // NEW
  const [note, setNote] = useState('')
  const [loading, setLoading] = useState(false)

  const { onPost } = usePost('/api/v1/customer')

  const onSubmit = () => {
    if (isEmpty(customerNo)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter Customer No.',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (isEmpty(customerName)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter customer name',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (isEmpty(customerType)) {   // NEW validation
      showNotification({
        props: {
          type: 'error',
          title: 'please select customer type',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }

    const variables = {
      customerNo,
      customerName,
      customerType,  // NEW
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
              title: 'Create customer successfully',
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
          <h1>{'Add New Customer'}</h1>

          <div className="input_wrap">
            <input
              type="text"
              required
              value={customerNo}
              onChange={(e) => { setCustomerNo(e.target.value) }}
            />
            <label>{'Customer No.*'}</label>
          </div>

          <div className="input_wrap">
            <input
              type="text"
              required
              value={customerName}
              onChange={(e) => { setCustomerName(e.target.value) }}
            />
            <label>{'Customer Name*'}</label>
          </div>

          {/* NEW: customerType dropdown */}
          <div className="input_wrap">
            <select
              required
              value={customerType}
              onChange={(e) => setCustomerType(e.target.value)}
            >
                            <option className="placeholder" selected disabled value="">{''}</option>

              <option value="Internal">Internal</option>
              <option value="External">External</option>
            </select>
            <label>{'Customer Type*'}</label>
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

export default AddMasterCustomer
