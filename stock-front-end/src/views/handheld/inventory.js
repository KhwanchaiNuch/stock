import React, { useState, useRef, useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import AppViewWrapperPure from 'components/app-view-wrapper'
import { withRouter } from 'react-router-dom'
import { get, map, isEmpty } from 'lodash'
import styled from 'styled-components'
import { httpCommon } from '../../connectors/http-common'
import usePost from '../../hooks/usePost'
import delay from '../../utils/delay'

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
  .container {
    display: flex;
    // align-items: center;
    // justify-content: center;
  }
  .item{
    width: 20%;
    color: #5B6A83;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.4px;
    text-align: left;
    padding: 8px;
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
  .scrollable-list {
    max-height: 100px; /* Set the maximum height for the scrollable area */
    overflow: auto; /* Enable scrolling when the content exceeds the max height */
    border: 1px solid #B0BCCB; /* Optional: Add a border for styling */
    padding: 10px; /* Optional: Add padding for spacing */
    border-radius: 12px;
    margin-bottom: 16px;
  }
  
  .scrollable-list p {
    margin: 0; /* Remove default margin for <p> elements */
    padding: 5px 5px 5px 5px;
    border-bottom: 1px solid #eee; /* Optional: Add a border between <p> elements */
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

  /* Label style after Input feild is in focus. Can also use input:focus ~ label to select sibling. */
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

const QRScanInventory = (props) => {
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const { openModal } = useStoreActions(actions => actions.modal)
  const [partNo, setPartNo] = useState('')
  const [receiptItemNo, setReceiptItemNo] = useState('')
  const [lotNo, setLotNo] = useState('')
  const [qty, setQty] = useState('')
  const [qtyStock, setQtyStock] = useState('')
  const [area, setArea] = useState('')
  const [partName, setPartName] = useState('')
  const [loading, setLoading] = useState('')
  const [stockType, setStockType] = useState('')
  const [listInArea, setListInArea] = useState('')


  const refInput = useRef(null)
  const refInput2 = useRef(null)
  const refInput3 = useRef(null)

  useEffect(() => {
    if (refInput && refInput.current) {
      refInput.current.focus()
    }
  }, [refInput])

  const handleOnHandheldArea = (result) => {
    if (result) {
      if (loading) return
      setLoading(true)
      try {
          const http = httpCommon()
          http.get('/api/v1/raw-material/items-area', {
              params: {
                  areaNo: result,
              }
          }).then(response => {
              if (get(response, 'data.statusCode', '') === 200) {
                const dataTemp = get(response, 'data.result.receiptItem', []);
                if (!isEmpty(dataTemp)) {
                  setLoading(false)
                  setArea(dataTemp[0].area.areaNo)
                  setStockType(dataTemp[0].stockType)
                  setListInArea(dataTemp)
                  refInput2.current.focus()
                } else {
                  setLoading(false)
                  openModal({
                      type: 'ERROR_SCAN',
                      data: {
                          title: 'Inventory',
                          error: 'Not found product under this area'
                      }
                  })
                }
              } else {
                  setLoading(false)
                  openModal({
                      type: 'ERROR_SCAN',
                      data: {
                          title: 'Inventory',
                          error: get(response, 'data.error', '')
                      }
                  })
              }
          }).catch((e) => {
              console.log(e)
              setLoading(false)
              openModal({
                  type: 'ERROR_SCAN',
                  data: {
                      title: 'Inventory',
                      error: get(e, 'response.data.message', 'Error unknow')
                  }
              })
          })
      } catch (err) {
          console.log('err: ', err)
          setLoading(false)
          openModal({
              type: 'ERROR_SCAN',
              data: {
                  title: 'Inventory',
                  error: err.toString()
              }
          })
      }
    }
  }

  const handleOnHandheldPartNo = (result) => {
    if (result) {
        if (loading) return
        setLoading(true)
        try {
            const extractData = result.split(',');
            const partNo = extractData[0]
            const partName = extractData[1]
            const lotNo = extractData[2]
            // const partNo = extractData[0]
            if (partNo && lotNo) {
                const http = httpCommon()
                http.get('/api/v1/raw-material/pre-inventory', {
                    params: {
                        partNo,
                        lotNo,
                        stockType,
                    }
                }).then(response => {
                    if (get(response, 'data.statusCode', '') === 200) {
                       const dataTemp= get(response, 'data.result','');
                        if (dataTemp !== '' && 
                            dataTemp.area.areaNo === area
                        ) {
                            setLoading(false)
                            setPartNo(partNo)
                            setPartName(partName)
                            setLotNo(lotNo)
                            setQtyStock(dataTemp.stock)
                            setReceiptItemNo(dataTemp.id)
                            refInput3.current.focus()
                        } else {
                            setLoading(false)
                            openModal({
                                type: 'ERROR_SCAN',
                                data: {
                                    title: 'Inventory',
                                    error: 'Scan fail this part not in this area'
                                }
                            })
                        }
                    } else {
                        setLoading(false)
                        openModal({
                          type: "ERROR_SCAN",
                          data: {
                            title: "Inventory",
                            error: get(response, "data.error", ""),
                          },
                        });
                    }
                })
                    .catch((e) => {
                        setLoading(false)
                        openModal({
                          type: "ERROR_SCAN",
                          data: {
                            title: "Inventory",
                            error: e.response.data.message,
                          },
                        });
                    })
            } else {
                setLoading(false)
                openModal({
                    type: 'ERROR_SCAN',
                    data: {
                        title: 'Inventory',
                        error: 'qr code is not valid'
                    }
                })
            }
        } catch (err) {
            console.log('err: ', err)
            setLoading(false)
            openModal({
                type: 'ERROR_SCAN',
                data: {
                    title: 'Inventory',
                    error: err.toString()
                }
            })
        }
    }
  }

  // const onSubmit = () => {
  //   if (isEmpty(area)) {
  //     showNotification({
  //       props: {
  //         type: 'error',
  //         title: 'please enter Area',
  //         notAutoClose: false,
  //         hasCloseBtn: false
  //       }
  //     })
  //     return
  //   }
  //   openModal({
  //     type: 'ERROR_SCAN',
  //     data: {
  //       title: 'Inventory',
  //       error: 'Receipt Oder No. is incorrect'
  //     }
  //   })
  // }
  const { onPost } = usePost('/api/v1/inventory')

  const onSubmit = () => {
      const variables = {
        receiptItemId: receiptItemNo,
        inventoryCount: +qty,
      }
      if (loading) return
      setLoading(true)
      onPost({
          variables,
          onDone: (res) => {
              if (get(res, 'statusCode', '') === 200) {
                  setLoading(false)
                  setQty('')
                  setPartNo('')
                  setPartName(undefined)
                  setLotNo(undefined)
                  setQtyStock(undefined)
                  setReceiptItemNo(undefined)
                  delay(3000)
                  // location.reload()
              } else {
                  setLoading(false)
                  openModal({
                      type: 'ERROR_SCAN',
                      data: {
                          title: stockType+' Outbound',
                          error: get(res, 'error', '')
                      }
                  })
              }
              refInput2.current.focus()
          },
          onError: (e) => {
              console.log('onError ==>', e)
              setLoading(false)
              openModal({
                  type: 'ERROR_SCAN',
                  data: {
                      title: stockType+' Outbound',
                      error: get(e, 'response.data.message', '')
                  }
              })
          }
      })
  }

  return (
    <AppViewWrapperPure page="content">
      <main className="container-qr-scanner">
        <div className="box-scanner">
          <Container>
            <div className="header-mobile">
              <h1>
                {'Inventory'}
              </h1>
            </div>
            <div className="container-wrapper-section-form">
              <div className="input_wrap focus">
                <input
                  ref={refInput}
                  type="text"
                  required
                  value={area}
                  disabled={area!==''}
                  onChange={(e) => {
                    handleOnHandheldArea(e.target.value)
                  }}
                />
                <label>{'Area No.'}</label>
              </div>
              {listInArea? 
                <div className="scrollable-list">
                  {map(listInArea, (item) => {
                      return <p key={item.id}>{item.productId.partNo+'-> '+get(item,"lotNo",'-')}</p>
                    }
                  )}
                </div> : ''
                }
              <div className={`input_wrap focus`}>
                <input
                  ref={refInput2}
                  type="text"
                  required
                  value={partNo}
                  // disabled={area === '' | partNo !== ''}
                  onChange={(e) => {
                    handleOnHandheldPartNo(e.target.value)
                  }}
                />
                <label>{'PART NO.'}</label>
              </div>
              <div className="container">
                <table>
                  <tbody>
                    <tr>
                      <td className='item'>
                        Part Name
                      </td>
                      <td className='item'>
                        Lot No.
                      </td>
                      <td className='item'>
                        QTY(stock)
                      </td>
                    </tr>
                    <tr>
                      <td className='item'>
                        {partName}
                      </td>
                      <td className='item'>
                        {lotNo}
                      </td>
                      <td className='item'>
                        {qtyStock}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <p>
                  {partName}
                </p>
                <p>
                  {lotNo}
                </p> */}
              </div>
              <div className="input_wrap focus">
                <input
                  ref={refInput3}
                  type="number"
                  required
                  value={qty}
                  max={qtyStock}
                  onChange={(e) => {
                    setQty(e.target.value)
                  }}
                />
                <label>{'QTY'}</label>
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

export default withRouter(QRScanInventory)
