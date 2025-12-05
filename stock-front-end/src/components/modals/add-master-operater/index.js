import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import { isEmpty, get } from 'lodash'
import usePost from 'hooks/usePost'
import delay from 'utils/delay'

const AddMasterOperator = () => {
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const styles = modalStyles(528)

  const [operatorNo, setOperatorNo] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { onPost } = usePost('/api/v1/users')

  const onSubmit = () => {
    if (isEmpty(operatorNo)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter Operator No.',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (isEmpty(name)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter name',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (isEmpty(role)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please select role',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    const variables = {
      operatorNo,
      password,
      firstName: name,
      lastName: '',
      role
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
              title: 'Create operator successfully',
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
            {'Add New Operator'}
          </h1>
          <div className="input_wrap">
            <input
              type="text"
              required
              value={operatorNo}
              onChange={(e) => { setOperatorNo(e.target.value) }}
            />
            <label>{'Operator No.*'}</label>
          </div>
          <div className="input_wrap">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
            <label>{'Name*'}</label>
          </div>
          <div className="select_wrap">
            <select
              required
              value={role}
              onChange={(e) => { setRole(e.target.value) }}
            >
              <option className="placeholder" selected disabled value="">{''}</option>
              <option value={'ADMIN'}>{'Admin'}</option>
              <option value={'OPERATOR'}>{'Operator'}</option>
              <option value={'VIEWER'}>{'Viewer'}</option>
            </select>
            <label>{'Role*'}</label>
          </div>
          <div className="input_wrap">
            <input
              type="text"
              required
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <label>{'Passward*'}</label>
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

export default AddMasterOperator
