import React, { useState, useRef, useEffect } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import { withRouter } from 'react-router-dom'
import { useStoreActions } from 'easy-peasy'
import { httpCommon } from 'connectors/http-common'
import { get, map } from 'lodash'
import styled from 'styled-components'
import usePost from 'hooks/usePost'
import useGet from '../../hooks/useGet'

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

const QRScanOutbound = (props) => {
    // const { stockTypeInput } = props.match.params;
    const showNotification = useStoreActions((actions) => actions.notification.showNotification)
    const { openModal } = useStoreActions(actions => actions.modal)
    const [loading, setLoading] = useState(false)
    const [recNo, setRecNo] = useState('')
    const [partNo, setPartNo] = useState('')
    const [partName, setPartName] = useState('')
    const [lotNo, setLotNo] = useState('')
    const [qty, setQty] = useState('')
    const [inLotQTY, setInLotQTY] = useState(0)
    const [inPickupQTY, setInPickupQTY] = useState(0)
    const [area, setArea] = useState('')
    const [price, setPrice] = useState('')
    const [stockType, setStockType] = useState('')
    // const [productList, setProductList] = useState('')
    // Convert to uppercase
    // const stockType = stockTypeInput.toUpperCase();
    const refInput = useRef()

    useEffect(() => {
        if (recNo) {
                refInput.current.focus()
        }
    }, [recNo])

    const { data: recList } = useGet('/api/v1/raw-material/receipt/outbound')
    const { data: temp ,onFetchQuery } = useGet('/api/v1/raw-material/receipt',{
        variables: {
            receiptNo: '',
    }})

    const handleOnHandheld = (result) => {
        if (result) {
            if (loading) return
            setLoading(true)
            try {
                const splitData = result.split(',')
                const partNo = splitData[0]
                const partName = splitData[1]
                const lotNo = splitData[2]
                if (partNo && lotNo && partName ) {
                    const http = httpCommon()
                    http.get('/api/v1/raw-material/pre-outbound', {
                        params: {
                            receiptNo: recNo,
                            partNo,
                            lotNo,
                        }
                    }).then(response => {
                        if (get(response, 'data.statusCode', '') === 200) {
                            const inLotQTY = get(response, 'data.result.quantity','');
                            const inPickupQTY = get(response, 'data.result.pickup.quantity','');
                            setInLotQTY(+inLotQTY)
                            setInPickupQTY(+inPickupQTY)
                            setLoading(false)
                            setPartNo(partNo)
                            setPartName(partName)
                            setLotNo(lotNo)
                            setArea(get(response, 'data.result.area',''))
                            setPrice(+get(response, 'data.result.price',''))
                            setStockType(get(response, 'data.result.stockType',''))
                            if (inLotQTY >= inPickupQTY) {
                                setQty(inPickupQTY)
                            } else {
                                setQty(inLotQTY)
                            }
                        } else {
                            setLoading(false)
                            openModal({
                                type: 'ERROR_SCAN',
                                data: {
                                    title: 'Outbound',
                                    error: get(response, 'data.error', '')
                                }
                            })
                        }
                    })
                        .catch((e) => {
                            console.log(e)
                            setLoading(false)
                            openModal({
                                type: 'ERROR_SCAN',
                                data: {
                                    title: 'Outbound',
                                    error: get(e, 'response.data.message', '')
                                }
                            })
                        })
                } else {
                    setLoading(false)
                    openModal({
                        type: 'ERROR_SCAN',
                        data: {
                            title: 'Outbound',
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
                        title: 'Outbound',
                        error: err.toString()
                    }
                })
            }
        }
    }

    const { onPost } = usePost('/api/v1/raw-material/create-outbound')

    const onSubmit = () => {
        const variables = {
            receiptNo: recNo,
            partNo: partNo,
            lotNo: lotNo,
            quantity: +qty,
            area: area,
            stockType,
            price,
        }
        if (loading) return
        onPost({
            variables,
            onDone: (res) => {
                if (get(res, 'statusCode', '') === 200) {
                    showNotification({
                        props: {
                          type: 'success',
                          title: 'scan data success',
                          notAutoClose: true,
                          hasCloseBtn: true
                        }
                      })
                    setPartNo(''),
                    setLotNo(''),
                    setQty(''),
                    setStockType(''),
                    setPrice(''),
                    refInput.current.focus
                    setLoading(false)
                } else {
                    setLoading(false)
                    
                    openModal({
                        type: 'ERROR_SCAN',
                        data: {
                            title: 'Outbound',
                            error: get(res, 'error', '')
                        }
                    })
                }
            },
            onError: (e) => {
                console.log('onError ==>', e)
                setLoading(false)
                openModal({
                    type: 'ERROR_SCAN',
                    data: {
                        title: 'Outbound',
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
                                {'Outbound'}
                            </h1>
                        </div>
                        <div className="container-wrapper-section-form">
                            <div className="select_wrap focus">
                                <select
                                    type="text"
                                    required
                                    value={recNo}
                                    onChange={(e) => {
                                        setRecNo(e.target.value)
                                        onFetchQuery('/api/v1/raw-material/receipt',{
                                            variables: {
                                                receiptNo: e.target.value,
                                        }})
                                    }}
                                // onKeyDown={(e) => {
                                //     if (e.key === 'Enter') {
                                //         handleOnHandheld('receiptNo=RM202310050002,invoiceNo=INV202310050002')
                                //     }
                                // }}
                                >
                                    <option className="placeholder" default disabled value="">{''}</option>
                                    <option default disabled>{'-- เลือก --'}</option>
                                    {map(get(recList, 'result.receipt', ''), (temp) => {
                                        return (
                                            <option value={temp.receiptNo}>
                                                {temp.receiptNo}
                                            </option>
                                        )
                                    })}
                                </select>
                                <label>{'Pickup No.'}</label>
                            </div>
                            {temp ? 
                                    <div className="table-receipt" style={{ marginBottom: '15px',background: '#F5F6F7'}}>
                                        <table >
                                            <tbody className='center'>
                                                { map(get(temp, 'result.receiptItem'), (item) => {
                                                    return (
                                                        <tr key={item.id}>
                                                            <td className='center'>{item.partNo}</td>
                                                            <td className='center'>{item.quantity-item.transactionItemSum}</td>
                                                            <td className='center'>{item.stockType}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table> 
                                    </div>
                                : ''
                            }

                            <div className="input_wrap focus">
                                <input
                                    ref={refInput}
                                    type="text"
                                    required
                                    value={partNo}
                                    onChange={(e) => {
                                        handleOnHandheld(e.target.value)
                                    }}
                                    disabled={recNo === ''? true: false}
                                />
                                <label>{'PART NO.'}</label>
                            </div>
                            <h3>
                                {partName}
                            </h3>
                            <div className="input_wrap focus">
                                <input
                                    type="text"
                                    required
                                    value={lotNo}
                                    disabled
                                />
                                <label>{'LOT NO.'}</label>
                            </div>
                            <div className="input_wrap focus">
                                <input
                                    type="number"
                                    required
                                    value={qty}
                                    // max={}
                                    onChange={(e) => {
                                        // Ensure the value is numeric
                                        const newValue = e.target.value.replace(/[^0-9]/g, '');

                                        // Limit the numeric value to 5
                                        const limitedValue = Math.min(Number(newValue), inLotQTY >= inPickupQTY?inPickupQTY:inLotQTY).toString();

                                        setQty(limitedValue);
                                    }}
                                />
                                <label>{'QTY'}</label>
                            </div>
                            {inLotQTY >= inPickupQTY?'':<p style={{color : 'red'}}>{'In lot have only '+inLotQTY}</p>}
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
                                        if (loading) return
                                        if (!loading) {
                                            setLoading(true)
                                            onSubmit()
                                        }
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

export default withRouter(QRScanOutbound)
