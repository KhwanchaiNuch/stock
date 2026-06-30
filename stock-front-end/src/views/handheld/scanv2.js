import React, { useState, useRef, useEffect } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import { withRouter } from 'react-router-dom'
import { useStoreActions } from 'easy-peasy'
import { httpCommon } from 'connectors/http-common'
import { get, isEmpty, map } from 'lodash'
import styled from 'styled-components'
import usePost from 'hooks/usePost'
import useGet from '../../hooks/useGet'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .header-mobile {
    display: flex;
  }

  .container-wrapper-section-form {
    width: 100%;
    padding: 16px;
    overflow: scroll;
    @media (min-width: 400px) {
      height: 568px;
    }
  }

  h3 {
    color: #2b3d8f;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0.4px;
    margin-top: 15px;
    margin-bottom: 31px;
  }

  .button-wrapper {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: #2ba6e1;
    height: 72px;
    width: 100%;
    padding: 16px 28px;
    z-index: 10;

    .btn-submit {
      width: calc(100% - 12px);
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      p {
        color: #ffffff;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.4px;
      }

      &.confirm {
        border-radius: 100px;
        background-color: #ffffff;

        p {
          color: #2b3d8f;
        }
      }
    }
  }

  /* ---------- INPUT ---------- */
  input {
    border-radius: 12px;
    border: 1px solid #b0bccb;
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

    &:focus {
      padding: 4px 0px 0px 0px;
      border: 1px solid #0050f0;
      outline: none;
      color: #002d63;
    }

    &:valid {
      padding: 4px 0px 0px 0px;
      color: #002d63;
    }
  }

  input[type='date'] {
    text-indent: 5px;
  }

  input:focus + label,
  input:valid + label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #5b6a83;
    top: 8px;
  }

  .input_wrap {
    width: 100%;
    height: auto;
    position: relative;

    &.focus {
      input {
        color: #002d63;
      }

      label {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: #5b6a83;
        top: 8px;
      }
    }
  }

  .input_wrap label {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #b0bccb;
    position: absolute;
    top: 18px;
    left: 12px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    pointer-events: none;
  }

  /* ---------- SELECT (Pickup No. เหมือน Outbound) ---------- */
  select {
    border-radius: 12px;
    border: 1px solid #b0bccb;
    width: 100%;
    height: 60px;
    color: #002d63;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-indent: 7px;
    padding: 0px 0px 0px 0px;
    margin-bottom: 16px;
    background: #ffffff;

    .placeholder {
      display: none;
    }
  }

  select:focus {
    padding: 4px 0px 0px 0px;
    border: 1px solid #0050f0;
    outline: none;
  }

  select:valid {
    padding: 4px 0px 0px 0px;
  }

  .select_wrap {
    width: 100%;
    height: auto;
    position: relative;
  }

  .select_wrap label {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #b0bccb;
    position: absolute;
    top: 18px;
    left: 12px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    pointer-events: none;
  }

  select:focus + label,
  select:valid + label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #5b6a83;
    top: 8px;
    z-index: 10;
  }

  .btn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    .btn {
      width: calc(50% - 12px);
      height: 48px;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #2b3d8f;
      color: #fff;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0.4px;
      cursor: pointer;

      &.no-bg {
        color: #2b3d8f;
        border: 1px solid #2b3d8f;
        background: transparent;
      }
    }
  }
`

const QRScan = (props) => {
  const showNotification = useStoreActions(
    (actions) => actions.notification.showNotification
  )
  const { openModal } = useStoreActions((actions) => actions.modal)
  const [loading, setLoading] = useState(false)

  const [recNo, setRecNo] = useState('')      // Pickup No.
  const [partNo, setPartNo] = useState('')
  const [partName, setPartName] = useState('')
  const [lotNo, setLotNo] = useState('')
  const [qty, setQty] = useState('')
  const [area, setArea] = useState('')
  const [areas, setAreas] = useState('')

  const refInput = useRef(null)   // Part No.
  const refInput3 = useRef(null)  // Area No.

  // 🔹 ใช้ดึง list Pickup + detail เหมือน Outbound
  const { data: recList } = useGet('/api/v1/raw-material/receipt/inbound')
  const { data: temp, onFetchQuery } = useGet('/api/v1/raw-material/receipt', {
    variables: {
      receiptNo: '',
    },
  })
const [isAllDone, setIsAllDone] = useState(false)

  const reloadReceipt = (receiptNo) => {
    onFetchQuery('/api/v1/raw-material/receipt', {
      variables: { receiptNo },
    })
  }
  const clearForm = () => {
  setRecNo('')
  setPartNo('')
  setPartName('')
  setLotNo('')
  setQty('')
  setArea('')
  setAreas('')
}
  // 🔹 console log temp ทุกครั้งที่ดึง receipt ใหม่
  useEffect(() => {
  if (!isEmpty(temp)) {
    console.log('📦 Response จาก /api/v1/raw-material/receipt:', temp)

    const items = get(temp, 'result.receiptItem', [])

    if (items && items.length > 0) {
      const allDone = items.every((item) => {
        const qty = parseFloat(item.quantity || 0)
        const sum = Number(item.transactionItemSum || 0)
        return qty - sum === 0
      })

      if (allDone) {
        console.log('✅ quantity - transactionItemSum = 0 ทุกแถว → เคลียร์ฟอร์ม')
        clearForm()
        setIsAllDone(true)
      } else {
        setIsAllDone(false)
      }
    }
  }
}, [temp])


  // ⬇️ แก้ให้โฟกัส Part No. เฉพาะตอนที่ recNo มีค่าแล้ว
  useEffect(() => {
    if (recNo && refInput.current) {
      refInput.current.focus()
    }
  }, [recNo])

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
            .get('/api/v1/raw-material/pre-inbound', {
              params: {
                partNo: partNoValue,
                lotNo: lotNoValue,
                stockType: '', // ส่งว่างเหมือนที่คุณแก้
              },
            })
            .then((response) => {
              if (get(response, 'data.statusCode', '') === 200) {
                // เช็คว่า row ที่ตรงกับ lotNo ใน table เหลือ 0 หรือไม่
                const receiptItems = get(temp, 'result.receiptItem', [])
                const matchedItem = receiptItems.find(
                  (item) => item.lotNo === lotNoValue
                )
                if (matchedItem) {
                  const remaining =
                    parseFloat(matchedItem.quantity || 0) -
                    Number(matchedItem.transactionItemSum || 0)
                  if (remaining <= 0) {
                    setLoading(false)
                    openModal({
                      type: 'ERROR_SCAN',
                      data: {
                        title: 'Inbound',
                        error: 'Item นี้ถูก Inbound ครบแล้ว',
                      },
                    })
                    return
                  }
                }
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
                    title: 'Inbound',
                    error: 'ไม่สามารถนำเข้าข้อมูลได้ กรุณาตรวจสอบข้อมูล',
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
                  title: 'Inbound',
                  error: 'ไม่สามารถนำเข้าข้อมูลได้ กรุณาตรวจสอบข้อมูล',
                },
              })
            })
        } else {
          setLoading(false)
          openModal({
            type: 'ERROR_SCAN',
            data: {
              title: 'Inbound',
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
            title: 'Inbound',
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
              if (dataTemp !== '' && dataTemp.length === 1) {
                // ไม่เช็ค stockType แล้ว
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

  const { onPost } = usePost('/api/v1/raw-material/create-inbound')


  const onSubmit = () => {
    if (isEmpty(area)) {
      showNotification({
        props: {
          type: 'error',
          title: 'please enter Area',
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
      area,
      stockType: '', // ส่งว่างให้ backend เหมือนเดิม
    }

    if (loading) return
    setLoading(true)
    onPost({
      variables,
      onDone: (res) => {
        if (get(res, 'statusCode', '') === 200) {
          
          setLoading(false)

          setPartNo('')
          setPartName('')
          setLotNo('')
          setQty('')
          setArea('')

          reloadReceipt(recNo)
          //location.reload()
        } else {
          setLoading(false)
          openModal({
            type: 'ERROR_SCAN',
            data: {
              title: 'Inbound',
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
            title: 'Inbound',
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
              <h1>{'Inbound'}</h1>
            </div>
            <div className="container-wrapper-section-form">
              {/* 🔹 Pickup No. + table (เหมือน Outbound) */}
              <div className="select_wrap focus">
                <select
                  required
                  value={recNo}
                  onChange={(e) => {
                    const value = e.target.value
                    setRecNo(value)

                    // ถ้าเปลี่ยน Pickup No. เคลียร์ค่าเก่า ๆ ออกก็ได้ (ถ้าอยากให้เคลียร์)
                    setPartNo('')
                    setPartName('')
                    setLotNo('')
                    setQty('')
                    setArea('')

                    onFetchQuery('/api/v1/raw-material/receipt', {
                      variables: {
                        receiptNo: value,
                      },
                    })
                  }}
                >
                  <option className="placeholder" disabled value="">
                    {''}
                  </option>
                  <option disabled>{'-- เลือก --'}</option>
                  {map(get(recList, 'result.receipt', ''), (temp) => (
                    <option key={temp.receiptNo} value={temp.receiptNo}>
                      {temp.receiptNo}
                    </option>
                  ))}
                </select>
                <label>{'Pickup No.'}</label>
              </div>

              {temp && !isAllDone ? (
                <div
                  className="table-receipt"
                  style={{ marginBottom: '15px', background: '#F5F6F7' }}
                >
                  <table>
                    <tbody className="center">
                      {map(get(temp, 'result.receiptItem'), (item) => (
                        <tr key={item.id}>
                          <td className="center">{item.partNo}</td>
                          <td className="center">
                            {item.quantity - item.transactionItemSum}
                          </td>
                          <td className="center">{item.stockType}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {/* 🔹 ส่วน scan เดิม แต่ disable Part No. ถ้ายังไม่เลือก Pickup */}
              <div className="input_wrap focus">
                <input
                  ref={refInput}
                  type="text"
                  required
                  value={partNo}
                  disabled={recNo === ''}   // ⬅️ มาถึงครั้งแรก recNo = '' ⇒ disable
                  onChange={(e) => {
                    handleOnHandheld(e.target.value)
                  }}
                />
                <label>{'Part No.'}</label>
              </div>
              <div className="input_wrap focus">
                <input type="text" required value={lotNo} disabled />
                <label>{'Lot No.'}</label>
              </div>
              <h3>{partName}</h3>
              <div className="input_wrap focus">
                <input type="text" required value={lotNo} disabled />
                <label>{'LOT NO.'}</label>
              </div>
              <div className="input_wrap focus">
                <input type="text" required value={qty} disabled />
                <label>{'QTY'}</label>
              </div>
              <div className="input_wrap focus">
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
                <label>{'Area No.'}</label>
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
