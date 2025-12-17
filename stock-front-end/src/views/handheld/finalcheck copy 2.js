import React, { useState, useRef, useEffect } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import { withRouter } from 'react-router-dom'
import { useStoreActions } from 'easy-peasy'
import { httpCommon } from 'connectors/http-common'
import { get, isEmpty, map } from 'lodash'
import styled from 'styled-components'
import usePost from 'hooks/usePost'
import useGet from 'hooks/useGet'   // ⭐ เพิ่ม

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .header-mobile{
    display: flex;
  }
  .container-wrapper-section-form{
    width: 100%;
    padding: 16px;
    overflow: scroll;
    @media (min-width: 400px) {
      height: 568px;
    }
  }
  h3{
    color: #2B3D8F;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; 
    letter-spacing: 0.4px;
    margin-top: 15px;
    margin-bottom: 31px;
  }
  .button-wrapper{
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: #2BA6E1;
    height: 72px;
    width: 100%;
    padding: 16px 28px;
    z-index: 10;
    .btn-submit{
      width: calc(100% - 12px);
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      p{
        color: #FFFFFF;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.4px;
      }
      &.confirm{
        border-radius: 100px;
        background-color: #FFFFFF;
        p{
          color: #2B3D8F;
        }
      }
    }
  }
  input {
    border-radius: 12px;
    border: 1px solid #B0BCCB;
    width: 100%;
    height: 60px;
    color: transparent;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-indent: 12px;
    padding: 0px 0px 0px 0px;
    margin-bottom: 16px;
    &:focus{
      padding: 4px 0px 0px 0px;
      border: 1px solid #0050F0;
      outline: none;
      color: #002D63;
    }
    &:valid{
      padding: 4px 0px 0px 0px;
      color: #002D63;
    }
  }
  input[type=date]{
    text-indent: 5px;
  }
  select{
    border-radius: 12px;
    border: 1px solid #B0BCCB;
    width: 100%;
    height: 60px;
    color: #002D63;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-indent: 7px;
    padding: 0px 0px 0px 0px;
    margin-bottom: 16px;
    background: #FFFFFF;
    &:focus{
      padding: 4px 0px 0px 0px;
      border: 1px solid #0050F0;
      outline:none;
    }
    &:valid{
      padding: 4px 0px 0px 0px;
    }
    .placeholder {
      display: none;
    }
  }

  /* floating label */
  input:focus + label, input:valid + label{
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #5B6A83;
    top: 8px;
  }
  select:focus + label, select:valid + label{
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #5B6A83;
    top: 8px;
    z-index: 10px;
  }
  .input_wrap,
  .select_wrap {
    width: 100%;
    height: auto; 
    position: relative;
    &.focus{
      input{
        color: #002D63;
      }
      label{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: #5B6A83;
        top: 8px;
      }
    }
  }
  .input_wrap label,
  .select_wrap label{
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #B0BCCB;
    position: absolute;
    top: 18px;
    left: 12px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
    pointer-events: none;
  }
  .btn-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    .btn{
      width: calc(50% - 12px);
      height: 48px;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #2B3D8F;
      color: #FFF;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0.4px;
      cursor: pointer;
      &.no-bg{
        color: #2B3D8F;
        border: 1px solid #2B3D8F;
        background: transparent;
      }
    }
  }
`

const QRScan = (props) => {
  const showNotification = useStoreActions(
    (actions) => actions.notification.showNotification
  )
  const { openModal } = useStoreActions(actions => actions.modal)
  const [loading, setLoading] = useState(false)

  const [recNo, setRecNo] = useState('')
  const [partNo, setPartNo] = useState('')
  const [partName, setPartName] = useState('')
  const [lotNo, setLotNo] = useState('')
  const [qty, setQty] = useState('')

  // ⭐ ฟิลด์ใหม่
  const [okQty, setOkQty] = useState('')        // ok (number)
  const [moveQty, setMoveQty] = useState('')    // move (number)
  const [locationText, setLocationText] = useState('') // location (text)
  const [stockType, setStockType] = useState('')

  const refInput = useRef(null)
  const refInput3 = useRef(null)

  // ⭐ ดึงรายการ Pickup No. (ใช้ endpoint เดียวกับ Outbound)
  const { data: recList } = useGet('/api/v1/raw-material/receipt/outbound')

  useEffect(() => {
    if (refInput && refInput.current) {
      refInput.current.focus()
    }
  }, [refInput])

  const handleOnHandheld = (result) => {
    if (result) {
      if (!recNo) {
        // ถ้ายังไม่เลือก Pickup No. ไม่ให้สแกน
        showNotification({
          props: {
            type: 'error',
            title: 'Please select Pickup No. first',
            notAutoClose: false,
            hasCloseBtn: false,
          },
        })
        return
      }

      if (loading) return
      setLoading(true)
      try {
        // 032490,test01,LOT202311160003,11/16/2023,10
        const extractData = result.split(',')
        const partNoValue = extractData[0]
        const partNameValue = extractData[1]
        const lotNoValue = extractData[2]
        const quantity = +extractData[5]

        console.log("extractData = ",extractData);

        if (partNoValue && lotNoValue) {
          const http = httpCommon()
          http
            .get('/api/v1/raw-material/pre-outbound-final', {
              params: {
                receiptNo: recNo,
                partNo: partNoValue,
                lotNo: lotNoValue,
                // ถ้า backend รองรับจะส่ง recNo ไปด้วยก็ได้ เช่น
                // receiptNo: recNo,
              },
            })
            .then((response) => {
              if (get(response, 'data.statusCode', '') === 200) {
                setLoading(false)
                setRecNo(get(response, 'data.result.receiptNo.receiptNo', recNo))
                setPartNo(partNoValue)
                setLotNo(lotNoValue)
                setQty(quantity)
                setPartName(partNameValue)
                setStockType(get(response, 'data.result.stockType',''))
                
                if (refInput3.current) {
                  refInput3.current.focus()
                }
              } else {
                setLoading(false)
                openModal({
                  type: 'ERROR_SCAN',
                  data: {
                    title: 'QC Check',
                    error: get(response, 'data.error', ''),
                  },
                })
              }
            })
            .catch((e) => {
              setLoading(false)
              console.log(e)
              openModal({
                type: 'ERROR_SCAN',
                data: {
                  title: 'QC Check',
                  error: e.toString(),
                },
              })
            })
        } else {
          setLoading(false)
          openModal({
            type: 'ERROR_SCAN',
            data: {
              title: 'QC Check',
              error: 'qr code is not valid',
            },
          })
        }
      } catch (err) {
        console.log('err: ', err)
        setLoading(false)
        openModal({
          type: 'ERROR_SCAN',
          data: {
            title: 'QC Check',
            error: err.toString(),
          },
        })
      }
    }
  }

  const { onPost } = usePost('/api/v1/raw-material/create-outbound-final')

  const onSubmit = () => {
    const trimmedLocation = locationText.trim()

    if (isEmpty(okQty)) {
      showNotification({
        props: {
          type: 'error',
          title: 'Please enter OK quantity',
          notAutoClose: false,
          hasCloseBtn: false,
        },
      })
      return
    }
    const okNumber = Number(okQty) || 0
    const moveNumber = Number(moveQty) || 0

    if (okNumber < 0 || moveNumber < 0) {
      showNotification({
        props: {
          type: 'error',
          title: 'Quantity must not be negative',
          notAutoClose: false,
          hasCloseBtn: false,
        },
      })
      return
    }

    if (!isEmpty(moveQty) && isEmpty(trimmedLocation)) {
      showNotification({
        props: {
          type: 'error',
          title: 'Please select Location when Move is entered',
          notAutoClose: false,
          hasCloseBtn: false,
        },
      })
      return
    }

    if (okNumber + moveNumber !== qty) {
      showNotification({
        props: {
          type: 'error',
          title: 'OK and Move must equal total quantity',
          notAutoClose: false,
          hasCloseBtn: false,
        },
      })
      return
    }

    const variables = {
      receiptNo: recNo,
      partNo,
      lotNo,
      quantity: qty,
      quantityOk: okNumber,
      move: moveNumber,
      location: trimmedLocation,
      stockType
    }

    if (loading) return
    setLoading(true)
    onPost({
      variables,
      onDone: (res) => {
        if (get(res, 'statusCode', '') === 200) {
          setLoading(false)
          location.reload()
        } else {
          setLoading(false)
          openModal({
            type: 'ERROR_SCAN',
            data: {
              title: 'QC Check',
              error: get(res, 'error', ''),
            },
          })
        }
      },
      onError: (e) => {
        console.log('onError ==>', e)
        setLoading(false)
        openModal({
          type: 'ERROR_SCAN',
          data: {
            title: 'QC Check',
            error: get(e, 'response.data.message', ''),
          },
        })
      },
    })
  }

  // ⭐ helper เคลียร์ค่าฟอร์มเมื่อเปลี่ยน Pickup No.
  const clearForm = () => {
    setPartNo('')
    setPartName('')
    setLotNo('')
    setQty('')
    setOkQty('')
    setMoveQty('')
    setLocationText('')
    setStockType('')

  }

  return (
    <AppViewWrapperPure page="content">
      <main className="container-qr-scanner">
        <div className="box-scanner">
          <Container>
            <div className="header-mobile">
              <h1>{'Warehouse FinalCheck'}</h1>
            </div>
            <div className="container-wrapper-section-form">

              {/* ⭐ Pickup No. (เหมือนหน้า Outbound) */}
              <div className="select_wrap focus">
                <select
                  required
                  value={recNo}
                  onChange={(e) => {
                    const value = e.target.value
                    setRecNo(value)
                    clearForm()
                  }}
                >
                  <option className="placeholder" default disabled value="">
                    {''}
                  </option>
                  <option default disabled>{'-- เลือก --'}</option>
                  {map(get(recList, 'result.receipt', []), (temp) => (
                    <option key={temp.receiptNo} value={temp.receiptNo}>
                      {temp.receiptNo}
                    </option>
                  ))}
                </select>
                <label>{'Pickup No.'}</label>
              </div>

              {/* PART NO (scan) */}
              <div className="input_wrap focus">
                <input
                  ref={refInput}
                  type="text"
                  required
                  value={partNo}
                  onChange={(e) => {
                    handleOnHandheld(e.target.value)
                  }}
                  disabled={recNo === ''}   // ⭐ บังคับให้เลือก Pickup ก่อน
                />
                <label>{'PART NO.'}</label>
              </div>

              {/* ชื่อชิ้นส่วน */}
              <h3>{partName}</h3>

              {/* LOT NO (read only) */}
              <div className="input_wrap focus">
                <input type="text" required value={lotNo} disabled />
                <label>{'LOT NO.'}</label>
              </div>

              {/* QTY (read only) */}
              <div className="input_wrap focus">
                <input type="text" required value={qty} disabled />
                <label>{'QTY'}</label>
              </div>

              {/* OK (number) */}
              <div className="input_wrap focus">
                <input
                  type="number"
                  required
                  value={okQty}
                  onChange={(e) => setOkQty(e.target.value)}
                  min="0"
                  ref={refInput3}
                />
                <label>{'OK'} </label>
              </div>

              {/* Move (number) */}
              <div className="input_wrap focus">
                <input
                  type="number"
                  required
                  value={moveQty}
                  onChange={(e) => setMoveQty(e.target.value)}
                  min="0"
                />
                <label>{'Move'}</label>
              </div>

              {/* Location (text / select) */}
              <div className="select_wrap focus">
                <select
                  required
                  value={locationText}
                  onChange={(e) => setLocationText(e.target.value)}
                >
                  <option className="placeholder" disabled value="">
                    {''}
                  </option>
                  <option disabled>{'Location (MS1, MS2)'}</option>
                  <option value="MS1">MS1</option>
                  <option value="MS2">MS2</option>
                </select>
                <label>{'Location (MS1, MS2)'}</label>
              </div>

              <div className="button-wrapper">
                <div
                  className="btn-submit"
                  onClick={() => {
                    props.history.goBack()
                  }}
                >
                  <p>{'Cancel'}</p>
                </div>
                <div
                  className="btn-submit confirm"
                  onClick={() => {
                    onSubmit()
                  }}
                >
                  <p>{'Confirm'}</p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </AppViewWrapperPure>
  )
}

export default withRouter(QRScan)
