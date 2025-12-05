import React from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../../container'
import { modalStyles } from '../../styles'
import * as F from './styled'
import { useWindowWidth } from '@react-hook/window-size'
import IconWarning from 'assets/images/ico-warning.png'

const ErrorScan = ({ title = '', error = '' }) => {
  const windowWidth = useWindowWidth()
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const styles = modalStyles(400, {
    styles: windowWidth <= 400 ? {
      overlay: { padding: 0 },
      content: { height: '100%', borderRadius: '0px' }
    } : {
      overlay: { alignItems: 'center', paddingTop: 0 },
      content: { borderRadius: '10px' }
    }
  })

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
          <div className="header-mobile">
            <h1>
              {title}
            </h1>
          </div>
          <div className="container-wrapper-section-form">
            <div className="error-box-message">
              <img src={IconWarning} />
              {error && (
                <p>
                  {error}
                </p>
              )}
            </div>
            <div className="button-wrapper">
              <div
                className="btn-submit"
                onClick={() => {
                  closeModal()
                }}
              >
                <p>{'Back to scan'}</p>
              </div>
            </div>
          </div>
        </F.Container>
      </ModalContainer>
    </Modal>
  )
}

export default ErrorScan
