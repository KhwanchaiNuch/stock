import React, { useState,useEffect } from 'react'
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


const CreateReceipt = ({ firstItems = false, receiptNo = '', stockType}) => {
  const closeModal = useStoreActions(dispatch => dispatch.modal.closeModal)
  const { isOpen } = useStoreState(state => state.modal)
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const styles = modalStyles(528)
  const [qty, setQTY] = useState('')
  const [palletCount, setPalletCount] = useState('')
  const [palletQty, setPalletQTY] = useState([])
  const [price, setPrice] = useState('')
  const [supplier, setSupplier] = useState('')
  const [partNo, setPartNo] = useState('')
  const [partName, setPartName] = useState('')
  const [date, setDate] = useState('')
  const [receivedBy, setReceiptBy] = useState('')
  const [lotNo, setLotNo] = useState()
  const [invoiceNo, setInvoiceNo] = useState()


  const { data: dataInformation, onFetchQuery } = useGet('/api/v1/raw-material/information',{
    variables: {
      stockType,
    }
  })
  const lotTemp = get(dataInformation, 'result.lotNo', '')
  const invoiceTemp = get(dataInformation, 'result.invoiceNo', '')
  const products = get(dataInformation, 'result.product', [])
  const productsTemp = products.map( item => ({ value: item.partName, label: item.partNo}));
  const [loading, setLoading] = useState(false)

  const { onPost } = usePost('/api/v1/raw-material/receipt-item')
  const { onPost: opPostRecipt } = usePost('/api/v1/raw-material/receipt/inbound')

  const onCreateReceiptItem = () => {
    for (let i = 0; i < palletQty.length; i++) {
      const currentValue = palletQty[i];
      // Perform your action using currentValue
      console.log(`Processing pallet ${i+1}: ${currentValue}`);
      const num = i+1
      const variables = {
        receiptNo,
        partNo,
        supplier,
        stockType,
        invoiceNo: invoiceNo? invoiceNo+'_'+num:invoiceTemp+'_'+num,
        lotNo: lotNo ? lotNo+'_'+num: lotTemp+'_'+num,
        date: new Date(date).toISOString(),
        price: Number(price),
        receivedBy,
        quantity: Number(currentValue)
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
                title: 'Create new receipt successfully',
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
  }



  const onSubmitReceipt = () => {
    opPostRecipt({
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
    if (isEmpty(supplier)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please select supplier',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (!qty || Number(qty) <= 0) {
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
    if (isEmpty(date)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter date',
          notAutoClose: false,
          hasCloseBtn: false
        }
      })
      return
    }
    if (isEmpty(receivedBy)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please select received by',
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

 
  

  const handlePalletQtyChange = (index, value) => {
    const newPalletQty = [...palletQty];
    newPalletQty[index] = value;
    setPalletQTY(newPalletQty);
  };

  const renderInputBoxes = () => {
    if (isNaN(palletCount) || palletCount <= 0) {
      return null;
    }
    return Array.from({ length: palletCount }, (_, index) => (
      <div className="input_wrap">
        <input
          key={index}
          type="number"
          required
          value={palletQty[index]}
          onChange={(e) => handlePalletQtyChange(index, +e.target.value)}
        />
        <label>{`Pallet Qty ${index+1}`}</label>
      </div>
    ))
  };


useEffect(() => {
  if (palletCount > 0 && qty) {
    const newPalletQty = Array.from(
      { length: Number(palletCount) },
      () => Number(qty) || 0
    );

    setPalletQTY(newPalletQty);
  }
}, [qty, palletCount]);

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
            {`Add New ${stockType} Receipt Order`}
          </h1>
          <div className="select_wrap" style={{paddingBottom: '15px', borderRadius: '12px'}}>
            <p>Part No.</p>
            <AsyncSelect
              required
              // value={partNo}
              onChange={(e) => {
                console.log(e)
                setPartNo(e.label)
                setPartName(e.value)
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
          <h3
            style={{
              color:
                partName.toLowerCase().includes("cancel")
                  ? "red"
                  : "black",
            }}
          >{partName}</h3>
          <div className="select_wrap">
            <select
              required
              value={supplier}
              onChange={(e) => { setSupplier(e.target.value) }}
            >
              <option className="placeholder" default disabled value="">{''}</option>
              <option disabled>{'-- เลือก --'}</option>
              {map(get(dataInformation, 'result.suppliers', []), (item) => {
                return (
                  <option key={item.id} value={item}>{item}</option>
                )
              })}
            </select>
            <label>{'Supplier'}</label>
          </div>
          <div className="input_wrap">
            <input 
              type="text" 
              required 
              value={ invoiceNo? invoiceNo:invoiceTemp} 
              onChange={(e) => { setInvoiceNo(e.target.value)}} 
            />
            <label>{'Invoice No.'}</label>
          </div>
          <div className="input_wrap">
            <input 
              type="text" 
              required 
              value={lotNo ? lotNo: lotTemp} 
              onChange={(e) => { setLotNo(e.target.value)}} 
            />
            <label>{'Lot No.'}</label>
          </div>
          <div className="input_wrap">
            <input
              type="number"
              required
              value={qty}
              onChange={(e) => { setQTY(Number(e.target.value)) }}
            />
            <label>{'QTY per Pallet*'}</label>
          </div>
          <div className="select_wrap">
            <input
              type="number"
              required
              min={1}
              max={100}
              value={palletCount}
              onChange={(e) => {
                let count = parseInt(e.target.value, 10);

                if (isNaN(count) || count <= 0) {
                  setPalletCount('');
                  setPalletQTY([]);
                  return;
                }

                if (count > 100) count = 100;

                setPalletCount(count);

              
              }}
            />
            <label>pallet count</label>
          </div>
          <div style={{
            maxHeight: '300px',
            overflowY: 'auto',
            paddingRight: '8px',
            marginBottom: '12px',
            width: '100%',
          }}>
            {renderInputBoxes()}
          </div>
          <div className="input_wrap">
            <input
              type="number"
              required
              value={price}
              min="0.00"
              step="0.01"
              onChange={(e) => { setPrice(e.target.value) }}
            />
            <label>{'Price*'}</label>
          </div>
          <div className="input_wrap">
            <input
              type="date"
              required
              value={date}
              onChange={(e) => { setDate(e.target.value) }}
            />
            <label>{'Date'}</label>
          </div>
          {/* <div className="input_wrap">
            <input
              type="text"
              required
              value={model}
              onChange={(e) => { setModel(e.target.value) }}
            />
            <label>{'Model'}</label>
          </div> */}
          <div className="select_wrap">
            <select
              required
              value={receivedBy}
              onChange={(e) => { setReceiptBy(e.target.value) }}
            >
              <option className="placeholder" default disabled value="">{''}</option>
              <option disabled>{'-- เลือก --'}</option>
              {map(get(dataInformation, 'result.users', []), (item) => {
                return (
                  <option key={item.id} value={get(item, 'id', '')}>{get(item, 'firstName', '')}</option>
                )
              })}
            </select>
            <label>{'Received by'}</label>
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

export default CreateReceipt
