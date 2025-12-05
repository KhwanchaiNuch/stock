import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import usePost from '../../../hooks/usePost'
import { get, isEmpty } from 'lodash'
import delay from 'utils/delay'

/**
 * mode: 'single' | 'all'
 * id: ใช้ตอน mode === 'single'
 */
const EditQcStatus = ({ mode = 'single', id = '' }) => {
  const closeModal = useStoreActions((dispatch) => dispatch.modal.closeModal)
  const { isOpen } = useStoreState((state) => state.modal)
  const showNotification = useStoreActions(
    (actions) => actions.notification.showNotification
  )

  const styles = modalStyles(528)
  const [checkStatus, setCheckStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const { onPost: onPostUpdate } = usePost('/api/v1/transactions/update')
  const { onPost: onPostUpdateAll } = usePost(
    '/api/v1/transactions/update-all'
  )

  const onSaveQcStatus = () => {
    if (isEmpty(checkStatus)) {
      showNotification({
        props: {
          type: 'error',
          title: 'กรุณาเลือก Check Status (OK หรือ NG)',
          notAutoClose: false,
          hasCloseBtn: false,
        },
      })
      return
    }

    if (loading) return
    setLoading(true)

    // 🔹 อัปเดตรายการเดียว
    if (mode === 'single') {
      onPostUpdate({
        variables: {
          id,
          checkStatus,
        },
        onDone: async (res) => {
          if (get(res, 'statusCode', 200) === 200) {
            setLoading(false)
            closeModal()
            showNotification({
              props: {
                type: 'success',
                title: 'อัปเดตสถานะเป็น INBOUND สำเร็จ',
                notAutoClose: false,
                hasCloseBtn: false,
              },
            })
            await delay(1000)
            // ถ้าอยากให้ refresh list แบบไม่ reload หน้า
            // ให้ยิง action แทนได้
            location.reload()
          } else {
            setLoading(false)
            showNotification({
              props: {
                type: 'error',
                title: get(res, 'error', 'อัปเดตสถานะไม่สำเร็จ'),
                notAutoClose: true,
                hasCloseBtn: true,
              },
            })
          }
        },
        onError: (e) => {
          console.log('update status error =>', e)
          setLoading(false)
          showNotification({
            props: {
              type: 'error',
              title: get(e, 'response.data.message', 'อัปเดตสถานะไม่สำเร็จ'),
              notAutoClose: true,
              hasCloseBtn: true,
            },
          })
        },
      })
    }

    // 🔹 อัปเดตทั้งหมด (ที่เป็น HOLD)
    if (mode === 'all') {
      onPostUpdateAll({
        variables: {
          checkStatus,
        },
        onDone: async (res) => {
          const totalUpdated = get(res, 'result.updated', 0)
          setLoading(false)
          closeModal()
          showNotification({
            props: {
              type: 'success',
              title: `อัปเดตทั้งหมดสำเร็จ (${totalUpdated} รายการ)`,
              notAutoClose: false,
              hasCloseBtn: false,
            },
          })
          await delay(1000)
          location.reload()
        },
        onError: (e) => {
          console.log('update-all error =>', e)
          setLoading(false)
          showNotification({
            props: {
              type: 'error',
              title: get(
                e,
                'response.data.message',
                'อัปเดตทั้งหมดไม่สำเร็จ'
              ),
              notAutoClose: true,
              hasCloseBtn: true,
            },
          })
        },
      })
    }
  }

  const onSubmit = () => {
    onSaveQcStatus()
  }

  const titleText =
    mode === 'single'
      ? 'เลือก Check Status'
      : 'เลือก Check Status'

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
          <h1>{titleText}</h1>

          {/* ✅ ตามที่ขอ: select_wrap focus + Check Status(OK,NG) */}
          <div className="select_wrap focus" style={{ width: '260px' }}>
            <select
              required
              value={checkStatus}
              onChange={(e) => setCheckStatus(e.target.value)}
            >
              <option className="placeholder" disabled value="">
                {''}
              </option>
              <option disabled>{'Check Status(OK,NG)'}</option>
              <option value="OK">OK</option>
              <option value="NG">NG</option>
            </select>
            <label>{'Check Status(OK,NG)'}</label>
          </div>

          <div className="btn-wrapper">
            <div className="btn no-bg" onClick={closeModal}>
              Cancel
            </div>
            <div
              className="btn"
              onClick={() => {
                onSubmit()
              }}
            >
              {loading ? 'Saving...' : 'Save'}
            </div>
          </div>
        </F.Container>
      </ModalContainer>
    </Modal>
  )
}

export default EditQcStatus
