import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import { isEmpty, get } from 'lodash'
import usePost from 'hooks/usePost'
import delay from 'utils/delay'

const AddMasterProduct = () => {
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const styles = modalStyles(528)
  const [loading, setLoading] = useState(false)
  const [areaNo, setAreaNo] = useState('')
  const [areaName, setAreaName] = useState('')
  const [typeOfStock, setTypeOfStock] = useState('')
  // const [supportType, setSupportType] = useState('')
  const [note, setNote] = useState('')

  const { onPost } = usePost('/api/v1/area')

  const onSubmit = () => {
    if (isEmpty(areaNo)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter Area No.',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (isEmpty(areaName)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter area name',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (isEmpty(typeOfStock)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter area stock type',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    // if (isEmpty(supportType)) {
    //   showNotification({
    //     props: {
    //       type: 'error',
    //       title: 'please enter area support type',
    //       notAutoClose: false,
    //       hasCloseBtn: false
    //     }
    //   })
    //   return
    // }
    const variables = {
      areaNo,
      areaName,
      typeOfStock,
      // supportType,
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
              title: 'Create area successfully',
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
            {'Add New Area'}
          </h1>
          <div className="input_wrap">
            <input
              type="text"
              required
              value={areaNo}
              onChange={(e) => { setAreaNo(e.target.value) }}
            />
            <label>{'Area No.*'}</label>
          </div>
          <div className="input_wrap">
            <input
              type="text"
              required
              value={areaName}
              onChange={(e) => { setAreaName(e.target.value) }}
            />
            <label>{'Area Name*'}</label>
          </div>
          <div className="select_wrap">
            <select
              required
              value={typeOfStock}
              onChange={(e) => { setTypeOfStock(e.target.value)}}
            >
              <option className="placeholder" selected disabled value="">{''}</option>
              <option value="RM">RM</option>
              <option value="WIP">WIP</option>
              <option value="FG">FG</option>
              <option value="BS">BS</option>
            </select>
            <label>{'Area stock type*'}</label>
          </div>
          {/* <div className="select_wrap">
          <select
              required
              value={supportType}
              onChange={(e) => { setSupportType(e.target.value)}}
            >
              <option className="placeholder" selected disabled value="">{''}</option>
              <option value="INBOUND">INBOUND</option>
              <option value="OUTBOUND">OUTBOUND</option>
            </select>
            <label>{'Area support type*'}</label>
          </div> */}
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
