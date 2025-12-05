import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import usePostDownloadFile from 'hooks/usePostDownloadFile'
import { get, map, find, isEmpty } from 'lodash'
import delay from 'utils/delay'
import LoadingSpinner from '../../loading'

const CreateReceiptPDF = ({idInput = '', totalQuantity = '', stockType}) => {
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const styles = modalStyles(528)
  const [qty, setQTY] = useState([
    0 , 0, 0
  ])
  const [palletCount, setPalletCount] = useState('')
  const [loading, setLoading] = useState(false)

  const { onPost } = usePostDownloadFile('/api/v1/raw-material/pdf')

  const onCreateReceiptPDF = () => {
    const variables = {
      id: idInput,
      palletCount,
      pallet1: qty[0],
      pallet2: qty[1],
      pallet3: qty[2],
    }
    if (loading) return
    setLoading(true)
    onPost({
      variables,
      onDone: async (res) => {
        if (res) { 
          closeModal()
          // create file link in browser's memory
          const href = URL.createObjectURL(res);
          // create "a" HTML element with href to file & click
          const link = document.createElement('a');
          link.href = href;
          link.setAttribute('download', idInput+'.pdf'); //or any other extension
          document.body.appendChild(link);
          link.click();
      
          // clean up "a" element & remove ObjectURL
          document.body.removeChild(link);
          URL.revokeObjectURL(href);
          setLoading(false)
          showNotification({
            props: {
              type: 'success',
              title: 'Create new PDF successfully',
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

  const onSubmit = () => {
    if ((Math.round(totalQuantity* 100) / 100).toFixed(2) != (Math.round(sum * 100) / 100).toFixed(2) ) {
      showNotification({
        props: {
          type: 'error',
          title: 'please check your quantity',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    onCreateReceiptPDF()
  }

  let sum = qty.reduce(function(a, b){
            return a + b;
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
          {loading? <LoadingSpinner/> :
            <F.Container>
              <h1>
                {'Print Receipt Order'}
              </h1>

              <div className="select_wrap">
                <select
                  required
                  value={palletCount}
                  onChange={(e) => {
                    setPalletCount(e.target.value)
                    setQTY([0,0,0])
                  }}
                >
                  <option className="placeholder" default disabled value="">{''}</option>
                  <option disabled>{'-- เลือก --'}</option>
                  <option value='1'>{'1'}</option>
                  <option value='2'>{'2'}</option>
                  <option value='3'>{'3'}</option>
                </select>
                <label>{'pallet count'}</label>
              </div>
              {palletCount ? 
                <div className="input_wrap focus">
                    {qty.map((quantity, i) => (
                      <div key={i} className="input_wrap focus">
                        <input 
                          type="number" 
                          required 
                          value={parseFloat(quantity).toString()} 
                          min='0'
                          disabled={i >= palletCount}
                          onChange={(e) => {
                            const next = qty.map((quantity, index) => {
                              if(index === i){
                                return +e.target.value.replace(/^0+/, '')
                              } else{
                                return quantity
                              }
                              
                            });
                            setQTY(next)
                          }}
                        />
                        <label>{'Pallet' + (i+1)}</label>
                      </div>
                    ))}
                    
                </div>
                : ''}
              <p>
                {/* {totalQuantity} + {(Math.round(sum * 100) / 100).toFixed(2)} */}
              </p>
              <p style={{color: totalQuantity == (Math.round(sum * 100) / 100).toFixed(2) ? "green" : "red"}}>need to be {totalQuantity} total add {(Math.round(sum * 100) / 100).toFixed(2)}</p>
              <div className="btn-wrapper">
                <div className="btn no-bg" onClick={closeModal}>
                  Cancel
                </div>
                <div className={`btn ${totalQuantity != (Math.round(sum * 100) / 100).toFixed(2)? 'disabled': ''}`} onClick={() => {
                  onSubmit()
                }}
                >
                  Confirm
                </div>
              </div>
            </F.Container>
          }
        </ModalContainer>
      </Modal>
  )
}

export default CreateReceiptPDF
