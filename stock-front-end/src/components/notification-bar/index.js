import React from 'react'
import styled from 'styled-components'
import { useStoreState, useStoreActions } from 'easy-peasy'
import IcoError from 'assets/images/ico-error-notification.png'
import IcoSuccess from 'assets/images/ico-success-notification.png'
import IcoClose from 'assets/images/ico-close-notification.png'

const NotiBar = styled.div`
  z-index: 15000;
  position: fixed;
  top: ${({ open }) => (open ? '72px' : '-72px')};
  left: 0;
  right: 0;
  margin: 0 auto;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: 0.3s all ease-in-out;
  .container{
    background-color: ${({ type }) => (type === 'success' ? '#0050F0' : type === 'error' ? '#DA2110' : '#ffffff')};
    padding: 22px 24px;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  p {
    color: #FFFFFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.4px;
    padding-left: 16px;
    padding-right: ${({ hasCloseBtn }) => (hasCloseBtn ? '16px' : '0px')};
    word-break: break-all;
    width: ${({ hasCloseBtn }) => (hasCloseBtn ? 'calc(100% - 72px)' : 'calc(100% - 36px)')};
  }
  img {
    width: 36px;
    height: 36px;
  }
  .close-ico{
    margin-left: auto;
    cursor: pointer;
  }
`

const iconProperty = {
  error: IcoError,
  success: IcoSuccess
}

const NotificationBar = () => {
  const { isOpen, props } = useStoreState((state) => state.notification)
  const hideNotification = useStoreActions((actions) => actions.notification.hideNotification)
  return (
    <NotiBar open={isOpen} type={props.type} hasCloseBtn={props.hasCloseBtn}>
      <div className='container'>
        <img src={iconProperty[props.type]} />
        <p>{props.title}</p>
        {props.hasCloseBtn && (
          <img src={IcoClose} className="close-ico" onClick={hideNotification} />
        )}
      </div>
    </NotiBar>
  )
}
export default NotificationBar
