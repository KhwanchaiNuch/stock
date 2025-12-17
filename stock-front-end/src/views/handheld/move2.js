import React, { useState, useRef, useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import AppViewWrapperPure from 'components/app-view-wrapper'
import { withRouter } from 'react-router-dom'
import { get, map } from 'lodash'
import styled from 'styled-components'
import { httpCommon } from '../../connectors/http-common'
import usePost from '../../hooks/usePost'
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

const QRScanMove = (props) => {
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const { openModal } = useStoreActions(actions => actions.modal)

  const [partNo, setPartNo] = useState('')
  const [lotNo, setLotNo] = useState('')
  const [areaNo, setAreaNo] = useState('')
  const [areaTo, setAreaTo] = useState('')
  const [areaFromName, setAreaFromName] = useState('')
  const [areaToNo, setAreaToNo] = useState('')
  const [loading, setLoading] = useState('')
  const [stockType, setStockType] = useState('')

  const refInput = useRef(null)
  const refInput2 = useRef(null)
  const refInput3 = useRef(null)

  // 🔹 ดึงรายการ NG จาก /api/v1/transactions/listNg
  const { data: listNg } = useGet('/api/v1/transactions/listNg')

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
        http.get('/api/v1/area', {
          params: {
            areaNo: result,
          }
        }).then(response => {
          if (get(response, 'data.statusCode', '') === 200) {
            const dataTemp = get(response, 'data.result.items', '')
            if (dataTemp !== '' && dataTemp.length === 1) {
              setLoading(false)
              setAreaNo(dataTemp[0].areaNo)
              setAreaFromName(dataTemp[0].areaName)
              setStockType(dataTemp[0].typeOfStock)
              refInput2.current.focus()
            } else {
              setLoading(false)
              openModal({
                type: 'ERROR_SCAN',
                data: {
                  title: 'Move',
                  error: 'area not match'
                }
              })
            }
          } else {
            setLoading(false)
            openModal({
              type: 'ERROR_SCAN',
              data: {
                title: 'Move',
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
              title: 'Move',
              error: get(e, 'response.data.message', '')
            }
          })
        })
      } catch (err) {
        console.log('err: ', err)
        setLoading(false)
        openModal({
          type: 'ERROR_SCAN',
          data: {
            title: 'Move',
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
        const extractData = result.split(',')
        const partNo = extractData[0]
        const lotNo = extractData[2]
        if (partNo && lotNo) {
          const http = httpCommon()
          http.get('/api/v1/raw-material/pre-move-2', {
            params: {
              partNo,
              lotNo,
              stockType,
            }
          }).then(response => {
            if (get(response, 'data.statusCode', '') === 200) {
              const dataTemp= get(response, 'data.result.area','')
              console.log(dataTemp.areaName)
              console.log(areaFromName)
              console.log(dataTemp.areaNo)
              console.log(areaNo)
              console.log(dataTemp.areaName === areaFromName)
              console.log(dataTemp.areaNo === areaNo)
              if (
                dataTemp !== "" &&
                dataTemp.areaName === areaFromName &&
                dataTemp.areaNo === areaNo
              ) {
                setLoading(false)
                setPartNo(partNo)
                setLotNo(lotNo)
                refInput3.current.focus()
              } else {
                setLoading(false)
                openModal({
                  type: "ERROR_SCAN",
                  data: {
                    title: "Move",
                    error: "Scan fail this part not in this area",
                  },
                })
              }
            } else {
              setLoading(false)
              openModal({
                type: 'ERROR_SCAN',
                data: {
                  title: 'Move',
                  error: get(response, 'data.error', '')
                }
              })
            }
          })
          .catch((e) => {
            setLoading(false)
            openModal({
              type: 'ERROR_SCAN',
              data: {
                title: 'Move',
                error: e.toString()
              }
            })
          })
        } else {
          setLoading(false)
          openModal({
            type: 'ERROR_SCAN',
            data: {
              title: 'Move',
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
            title: 'Move',
            error: err.toString()
          }
        })
      }
    }
  }

  const handleOnHandheldAreaTo = (result) => {
    if (result) {
      if (loading) return
      setLoading(true)
      try {
        const http = httpCommon()
        http.get('/api/v1/area', {
          params: {
            areaNo: result,
          }
        }).then(response => {
          if (get(response, 'data.statusCode', '') === 200) {
            const dataTemp = get(response, 'data.result.items', '')
            if (dataTemp !== '' && dataTemp.length === 1 && stockType === dataTemp[0].typeOfStock) {
              setLoading(false)
              setAreaTo(dataTemp[0].areaNo)
              setAreaToNo(dataTemp[0].areaNo)
            } else {
              setLoading(false)
              openModal({
                type: 'ERROR_SCAN',
                data: {
                  title: 'Move',
                  error: 'area not match'
                }
              })
            }
          } else {
            setLoading(false)
            openModal({
              type: 'ERROR_SCAN',
              data: {
                title: 'Move',
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
              title: 'Move',
              error: get(e, 'response.data.message', '')
            }
          })
        })
      } catch (err) {
        console.log('err: ', err)
        setLoading(false)
        openModal({
          type: 'ERROR_SCAN',
          data: {
            title: 'Move',
            error: err.toString()
          }
        })
      }
    }
  }

  const { onPost } = usePost('/api/v1/raw-material/move')

  const onSubmit = () => {
    const variables = {
      partNo: partNo,
      lotNo: lotNo,
      area: areaToNo,
      stockType,
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
              title: stockType+' Outbound',
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
              <h1>{'Move NG'}</h1>
            </div>

           

            <div className="container-wrapper-section-form">
 {/* 🔹 ตาราง listNg แสดงก่อนฟิลด์แรก */}
            {listNg && (
              <div
                className="table-receipt"
                style={{ marginBottom: '15px', background: '#F5F6F7' }}
              >
                <table>
                  <tbody className="center">
                    {map(get(listNg, 'result.items', []), (item) => (
                      <tr key={item.id}>
                        <td className="center" style={{ whiteSpace: 'nowrap' }}>{item.partNo}</td>
                        <td className="center">{item.lotNo}</td>
                        <td className="center">{item.quantity}</td>
                        <td className="center">{item.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}


              <h3>{'From Location'}</h3>
              <div className="input_wrap focus">
                <input
                  ref={refInput}
                  type="text"
                  required
                  value={areaNo}
                  disabled={areaNo !== ''}
                  onChange={(e) => {
                    handleOnHandheldArea(e.target.value)
                  }}
                />
                <label>{'Scan Area No.'}</label>
              </div>
              <div className="input_wrap focus">
                <input
                  ref={refInput2}
                  type="text"
                  required
                  value={partNo}
                  disabled={areaNo === '' | partNo !== ''}
                  onChange={(e) => {
                    handleOnHandheldPartNo(e.target.value)
                  }}
                />
                <label>{'Scan Part'}</label>
              </div>
              <h3>{'To Location'}</h3>
              <div className="input_wrap focus">
                <input
                  ref={refInput3}
                  type="text"
                  required
                  value={areaTo}
                  disabled={areaNo === '' | partNo === '' | areaTo !== ''}
                  onChange={(e) => {
                    handleOnHandheldAreaTo(e.target.value)
                  }}
                />
                <label>{'Scan destination Area No.'}</label>
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

export default withRouter(QRScanMove)
