import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import usePost from '../../../hooks/usePost'
import delay from 'utils/delay'
import { get } from 'lodash'

const AdjustInventory = ({ item }) => {
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const styles = modalStyles(528)
  const [partName, setPartName] = useState(item.partName)
  const [loading, setLoading] = useState(false)
  const [note, setNote] = useState(`Change from ${item.stock} to ${item.inventoryCount}`)

  const { onPost } = usePost('/api/v1/inventory/submit')

  const onSubmit = () => {
    const variables = {
      inventoryId: item.id,
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
              title: 'Adjust inventory successfully',
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
            {'Adjust'}
          </h1>
          <div className="input_wrap focus">
            <input type="text" required disabled={true} value={partName}/>
            <label>{`Part Name`}</label>
          </div>
          <div className="input_wrap focus">
            <input type="text" required disabled={true} value={note}/>
            <label>{''}</label>
          </div>
          <div className="btn-wrapper">
            <div className="btn no-bg" onClick={closeModal}>
              Cancel
            </div>
            <div className="btn" onClick={onSubmit}>
              Confirm
            </div>
          </div>
        </F.Container>
      </ModalContainer>
    </Modal>
  )
}

export default AdjustInventory
