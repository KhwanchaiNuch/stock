import React, { useState, useRef, useEffect } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import { withRouter } from 'react-router-dom'
import { useStoreActions } from 'easy-peasy'
import { httpCommon } from 'connectors/http-common'
import { get, isEmpty, map } from 'lodash'
import styled from 'styled-components'
import usePost from 'hooks/usePost'

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
  const [area, setArea] = useState('')
  const [areas, setAreas] = useState('')
  const [checkStatus, setCheckStatus] = useState('')   // ▼ ฟิลด์ใหม่ OK / NG

  const refInput = useRef(null)
  const refInput3 = useRef(null)

  useEffect(() => {
    if (refInput && refInput.current) {
      refInput.current.focus()
    }
  }, [refInput])

  const handleOnHandheld = (result) => {
    if (result) {
      if (loading) return
      setLoading(true)
      try {
        // 032490,test01,LOT202311160003,11/16/2023,10
        const extractData = result.split(',')
        const partNoValue = extractData[0]
        const partNameValue = extractData[1]
        const lotNoValue = extractData[2]
        const quantity = +extractData[5]

        if (partNoValue && lotNoValue) {
          const http = httpCommon()
          http
            .get('/api/v1/raw-material/pre-inbound-qc', {
              params: {
                partNo: partNoValue,
                lotNo: lotNoValue,
                // ❌ ไม่ส่ง stockType แล้ว
              },
            })
            .then((response) => {
              if (get(response, 'data.statusCode', '') === 200) {
                setLoading(false)
                setRecNo(get(response, 'data.result.receiptNo.receiptNo', ''))
                setPartNo(partNoValue)
                setLotNo(lotNoValue)
                setQty(quantity)
                setAreas(get(response, 'data.result.area', []))
                setPartName(partNameValue)
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

  const handleOnHandheldArea = (result) => {
    if (result) {
      if (loading) return
      setLoading(true)
      try {
        const http = httpCommon()
        http
          .get('/api/v1/area', {
            params: {
              areaNo: result,
            },
          })
          .then((response) => {
            if (get(response, 'data.statusCode', '') === 200) {
              const dataTemp = get(response, 'data.result.items', '')
              // ❌ ไม่เช็ค stockType แล้ว
              if (dataTemp !== '' && dataTemp.length === 1) {
                setLoading(false)
                setArea(dataTemp[0].areaNo)
              } else {
                setLoading(false)
                openModal({
                  type: 'ERROR_SCAN',
                  data: {
                    title: 'Move',
                    error: 'area not match',
                  },
                })
              }
            } else {
              setLoading(false)
              openModal({
                type: 'ERROR_SCAN',
                data: {
                  title: 'Move',
                  error: get(response, 'data.error', ''),
                },
              })
            }
          })
          .catch((e) => {
            console.log(e)
            setLoading(false)
            openModal({
              type: 'ERROR_SCAN',
              data: {
                title: 'Move',
                error: get(e, 'response.data.message', ''),
              },
            })
          })
      } catch (err) {
        console.log('err: ', err)
        setLoading(false)
        openModal({
          type: 'ERROR_SCAN',
          data: {
            title: 'Move',
            error: err.toString(),
          },
        })
      }
    }
  }

  const { onPost } = usePost('/api/v1/raw-material/update-inbound')

  const onSubmit = () => {
    // if (isEmpty(area)) {
    //   showNotification({
    //     props: {
    //       type: 'error',
    //       title: 'please enter Area',
    //       notAutoClose: false,
    //       hasCloseBtn: false,
    //     },
    //   })
    //   return
    // }

    // ตอนนี้ยังไม่ส่ง checkStatus ไป backend นะครับ
    const variables = {
      receiptNo: recNo,
      partNo,
      lotNo,
      quantity: qty,
      area,
      checkStatus,
      // stockType: ถูกตัดออกแล้ว
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

  return (
    <AppViewWrapperPure page="content">
      <main className="container-qr-scanner">
        <div className="box-scanner">
          <Container>
            <div className="header-mobile">
              <h1>{'QC Check'}</h1>
            </div>
            <div className="container-wrapper-section-form">
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

              {/* Area (scan) */}
              {/* <div className="input_wrap focus">
                <input
                  ref={refInput3}
                  type="text"
                  required
                  value={area}
                  disabled={partNo === ''}
                  onChange={(e) => {
                    handleOnHandheldArea(e.target.value)
                  }}
                />
                <label>{'Area'}</label>
              </div> */}

              {/* Check Status(OK,NG) แบบ select ตามรูป */}
              <div className="select_wrap focus">
                <select
                  required
                  value={checkStatus}
                  onChange={(e) => setCheckStatus(e.target.value)}
                >
                  <option className="placeholder" disabled value="">
                    {''}
                  </option>
                  <option disabled>{'Check Status(OK,NG)'}</option>
                  <option value="OK">OK</option>
                  <option value="NG">NG</option>
                </select>
                <label>{'Check Status(OK,NG)'}</label>
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
