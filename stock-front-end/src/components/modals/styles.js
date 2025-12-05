import { get } from 'lodash'
import styled from 'styled-components'
const zIndex = {
  modal: 10000
}

export const modalStyles = (maxWidth = 360, options) => {
  return {
    overlay: {
      background: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: 'visible',
      overflowX: 'hidden',
      zIndex: zIndex.modal - 1,
      padding: '1.2rem',
      ...get(options, 'styles.overlay', {})
    },
    content: {
      position: 'relative',
      background: '#ffffff',
      backgroundClip: 'padding-box',
      borderRadius: '10px',
      border: '0',
      padding: '0',
      zIndex: zIndex.modal,
      width: '100%',
      maxWidth: `${maxWidth}px`,
      top: 'auto',
      bottom: 'auto',
      left: 'auto',
      right: 'auto',
      backgroundColor: 'rgba(0,0,0,0)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.40)',
      animationDuration: '300ms',
      ...get(options, 'styles.content', {})
    }
  }
}

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: #ffffff;
  overflow: visible;
  ${({ styles }) => styles}
`

export const ModalContent = styled.div`
`
