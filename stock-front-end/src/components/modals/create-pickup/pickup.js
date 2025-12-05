import React, { useState } from 'react'
import Modal from 'react-modal'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ModalContainer from '../container'
import { modalStyles } from '../styles'
import * as F from './styled'
import useGet from 'hooks/useGet'
import usePost from 'hooks/usePost'
import { get, map, find, isEmpty } from 'lodash'
import delay from 'utils/delay'
import AsyncSelect from 'react-select/async';

const CreatePickup = ({ firstItems = false, receiptNo = '', stockType}) => {
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const styles = modalStyles(528)
  const [qty, setQTY] = useState('')
  const [partNo, setPartNo] = useState('')
  const [partName, setPartName] = useState('')
  const [stockTypeInput, setStockTypeInput] = useState('')
  const [customer, setCustomer] = useState('')


  const { data: dataRMInformation, onFetchQuery } = useGet('/api/v1/raw-material/information', {
    variables: {
      stockType,
    }
  })
  const products = get(dataRMInformation, 'result.product', [])
  const productsTemp = products.map( item => ({ value: item.partName, label: item.partNo, stockType: item.type}));
  const [loading, setLoading] = useState(false)

  const { onPost } = usePost('/api/v1/raw-material/receipt-item')
  const { onPost: onPostRecipt } = usePost('/api/v1/raw-material/receipt/outbound')

  const onCreateReceiptItem = () => {
    const variables = {
      receiptNo,
      partNo,
      customer,
      quantity: Number(qty),
      stockType: stockTypeInput,
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
              title: 'Create new '+stockType+' receipt successfully',
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

  const onSubmitReceipt = () => {
    onPostRecipt({
      variables: {
        receiptNo,
        stockType,
      },
      onDone: (res) => {
        if (get(res, 'statusCode', '') === 200) {
          onCreateReceiptItem()
        } else {
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
    if (isEmpty(partNo)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please select Part No.',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (isEmpty(qty)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter Qty',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (isEmpty(stockType)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter model',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (isEmpty(customer)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please select customer to ship',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (firstItems) {
      onSubmitReceipt()
      return
    }
    onCreateReceiptItem()
  }

  const filter = (inputValue) => {
    return productsTemp.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (
    inputValue,
    callback
  ) => {
    setTimeout(() => {
      callback(filter(inputValue));
    }, 1000);
  };

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
            {`Add New ${stockType} Pickup`}
          </h1>
          <div className="select_wrap" style={{paddingBottom: '15px', 'borderRadius': '12px'}}>
            <p>Part No.</p>
            <AsyncSelect
              required
              // value={partNo}
              onChange={(e) => {
                console.log(e)
                setPartNo(e.label)
                setPartName(e.value)
                setStockTypeInput(e.stockType)
                onFetchQuery('/api/v1/raw-material/information', {
                  variables: {
                      stockType,
                  }
                })
              }}
              cacheOptions
              loadOptions={loadOptions}
              defaultOptions={productsTemp}
              styles={{'color':'white'}}
            />
          </div>
          <h3>{partName}</h3>
          <div className="input_wrap">
            <input
              type="number"
              required
              value={qty}
              onChange={(e) => { setQTY(e.target.value) }}
            />
            <label>{'Qty*'}</label>
          </div>
          <div className="select_wrap">
            <select
              required
              value={customer}
              onChange={(e) => { setCustomer(e.target.value) }}
            >
              <option className="placeholder" default disabled value="">{''}</option>
              <option disabled>{'-- เลือก --'}</option>
              {map(get(dataRMInformation, 'result.customers', []), (item) => {
                return (
                  <option key={item.key} value={get(item, 'id', '')}>{get(item, 'customerName', '')}</option>
                )
              })}
            </select>
            <label>{'Ship to'}</label>
          </div>
          <div className="btn-wrapper">
            <div className="btn no-bg" onClick={closeModal}>
              Cancel
            </div>
            <div className="btn" onClick={() => {
              onSubmit()
            }}
            >
              Add
            </div>
          </div>
        </F.Container>
      </ModalContainer>
    </Modal>
  )
}

export default CreatePickup
