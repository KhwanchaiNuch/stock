import React, { useState, useRef, useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import AppViewWrapperPure from 'components/app-view-wrapper'
import { withRouter } from 'react-router-dom'
import { get } from 'lodash'
import styled from 'styled-components'
import { httpCommon } from '../../connectors/http-common'
import usePost from '../../hooks/usePost'

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
    margin-bottom: 16px;
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
    &:focus {
      color: #002d63;
      border: 1px solid #0050f0;
      outline: none;
    }
    &:valid {
      color: #002d63;
    }
    &:disabled {
      background: #f5f5f5;
      color: #999;
    }
  }
  .input_wrap {
    width: 100%;
    height: auto;
    position: relative;
    margin-bottom: 16px;
    &.focus input { color: #002d63; }
    &.focus label {
      font-size: 12px;
      color: #5b6a83;
      top: 8px;
    }
  }
  .input_wrap label {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #b0bccb;
    position: absolute;
    top: 18px;
    left: 12px;
    transition: 0.2s ease all;
    pointer-events: none;
  }
  input:focus + label,
  input:valid + label {
    font-size: 12px;
    color: #5b6a83;
    top: 8px;
  }
  .pending-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 8px;
    margin-bottom: 16px;
    font-size: 13px;
    th {
      background: #2b3d8f;
      color: #fff;
      padding: 8px 6px;
      text-align: left;
    }
    td {
      border-bottom: 1px solid #e2e8f0;
      padding: 8px 6px;
      color: #002d63;
    }
    .btn-remove {
      background: #e53e3e;
      color: #fff;
      border: none;
      border-radius: 6px;
      padding: 4px 10px;
      cursor: pointer;
      font-size: 12px;
    }
  }
  .tag {
    display: inline-block;
    background: #e8f0fe;
    color: #2b3d8f;
    border-radius: 8px;
    padding: 4px 10px;
    font-size: 13px;
    margin-bottom: 8px;
  }
  h1 {
    color: #002d63;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 0;
  }
`

const QRScanMove = (props) => {
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const { openModal } = useStoreActions((actions) => actions.modal)

  // Step 1: Scan destination area
  const [areaTo, setAreaTo] = useState('')
  const [areaToName, setAreaToName] = useState('')
  const [stockType, setStockType] = useState('')

  // Step 2: Scan QR codes → pending list
  const [pendingItems, setPendingItems] = useState([]) // [{partNo, lotNo, partName, fromArea, stockType}]
  const [loading, setLoading] = useState(false)

  const refAreaTo = useRef(null)
  const refQR = useRef(null)

  useEffect(() => {
    if (refAreaTo && refAreaTo.current) {
      refAreaTo.current.focus()
    }
  }, [])

  // After areaTo is set, focus QR input
  useEffect(() => {
    if (areaTo && refQR.current) {
      refQR.current.focus()
    }
  }, [areaTo])

  const handleScanAreaTo = (result) => {
    if (!result || loading) return
    setLoading(true)
    const http = httpCommon()
    http.get('/api/v1/area', { params: { areaNo: result } })
      .then((response) => {
        setLoading(false)
        if (get(response, 'data.statusCode', '') === 200) {
          const items = get(response, 'data.result.items', [])
          if (items.length === 1) {
            setAreaTo(items[0].areaNo)
            setAreaToName(items[0].areaName)
            setStockType(items[0].typeOfStock)
          } else {
            openModal({ type: 'ERROR_SCAN', data: { title: 'Move', error: 'Area not found' } })
          }
        } else {
          openModal({ type: 'ERROR_SCAN', data: { title: 'Move', error: get(response, 'data.error', 'Error') } })
        }
      })
      .catch((e) => {
        setLoading(false)
        openModal({ type: 'ERROR_SCAN', data: { title: 'Move', error: get(e, 'response.data.message', e.toString()) } })
      })
  }

  const handleScanQR = (result) => {
    if (!result || loading) return
    if (!areaTo) {
      openModal({ type: 'ERROR_SCAN', data: { title: 'Move', error: 'Please scan destination area first' } })
      return
    }
    setLoading(true)
    try {
      const parts = result.split(',')
      const scannedPartNo = parts[0]
      const scannedLotNo = parts[2]
      if (!scannedPartNo || !scannedLotNo) {
        setLoading(false)
        openModal({ type: 'ERROR_SCAN', data: { title: 'Move', error: 'QR code is not valid' } })
        return
      }
      // Check duplicate
      const isDup = pendingItems.some((i) => i.lotNo === scannedLotNo && i.partNo === scannedPartNo)
      if (isDup) {
        setLoading(false)
        openModal({ type: 'ERROR_SCAN', data: { title: 'Move', error: `LOT ${scannedLotNo} already in list` } })
        return
      }
      const http = httpCommon()
      http.get('/api/v1/raw-material/pre-move', {
        params: { partNo: scannedPartNo, lotNo: scannedLotNo, stockType },
      })
        .then((response) => {
          setLoading(false)
          if (get(response, 'data.statusCode', '') === 200) {
            const data = get(response, 'data.result', {})
            setPendingItems((prev) => [
              ...prev,
              {
                partNo: scannedPartNo,
                lotNo: scannedLotNo,
                partName: data.partName || '',
                fromArea: get(data, 'area.areaNo', '-'),
                stockType,
              },
            ])
            // Clear QR input and refocus
            if (refQR.current) {
              refQR.current.value = ''
              refQR.current.focus()
            }
          } else {
            openModal({ type: 'ERROR_SCAN', data: { title: 'Move', error: get(response, 'data.error', 'Item not found') } })
          }
        })
        .catch((e) => {
          setLoading(false)
          openModal({ type: 'ERROR_SCAN', data: { title: 'Move', error: get(e, 'response.data.message', e.toString()) } })
        })
    } catch (err) {
      setLoading(false)
      openModal({ type: 'ERROR_SCAN', data: { title: 'Move', error: err.toString() } })
    }
  }

  const removeItem = (lotNo) => {
    setPendingItems((prev) => prev.filter((i) => i.lotNo !== lotNo))
  }

  const { onPost } = usePost('/api/v1/raw-material/move')

  const onSubmit = async () => {
    if (loading || pendingItems.length === 0) return
    setLoading(true)
    let successCount = 0
    let errorMsg = ''
    for (const item of pendingItems) {
      await new Promise((resolve) => {
        onPost({
          variables: { partNo: item.partNo, lotNo: item.lotNo, area: areaTo, stockType: item.stockType },
          onDone: (res) => {
            if (get(res, 'statusCode', '') === 200) {
              successCount++
            } else {
              errorMsg = `LOT ${item.lotNo}: ${get(res, 'error', 'Error')}`
            }
            resolve()
          },
          onError: (e) => {
            errorMsg = `LOT ${item.lotNo}: ${get(e, 'response.data.message', e.toString())}`
            resolve()
          },
        })
      })
      if (errorMsg) break
    }
    setLoading(false)
    if (errorMsg) {
      openModal({ type: 'ERROR_SCAN', data: { title: 'Move', error: errorMsg } })
    } else {
      showNotification({
        props: {
          type: 'success',
          title: `Move สำเร็จ ${successCount} รายการ → ${areaTo}`,
          notAutoClose: false,
          hasCloseBtn: false,
        },
      })
      setTimeout(() => location.reload(), 1500)
    }
  }

  return (
    <AppViewWrapperPure page="content">
      <main className="container-qr-scanner">
        <div className="box-scanner">
          <Container>
            <div className="header-mobile">
              <h1>{'Move'}</h1>
            </div>
            <div className="container-wrapper-section-form">

              {/* Step 1: To Area */}
              <h3>{'Destination Area'}</h3>
              <div className={`input_wrap${areaTo ? ' focus' : ''}`}>
                <input
                  ref={refAreaTo}
                  type="text"
                  required
                  defaultValue=""
                  disabled={!!areaTo}
                  onChange={(e) => {
                    if (e.target.value) handleScanAreaTo(e.target.value)
                  }}
                />
                <label>{'Scan Destination Area No.'}</label>
              </div>
              {areaTo && (
                <div style={{ marginBottom: 16 }}>
                  <span className="tag">➡ {areaTo} — {areaToName} ({stockType})</span>
                  <span
                    style={{ marginLeft: 8, color: '#e53e3e', cursor: 'pointer', fontSize: 13 }}
                    onClick={() => { setAreaTo(''); setAreaToName(''); setStockType(''); setPendingItems([]) }}
                  >
                    ✕ เปลี่ยน
                  </span>
                </div>
              )}

              {/* Step 2: Scan QR */}
              {areaTo && (
                <>
                  <h3>{'Scan Items'}</h3>
                  <div className="input_wrap">
                    <input
                      ref={refQR}
                      type="text"
                      required
                      defaultValue=""
                      disabled={loading}
                      onChange={(e) => {
                        if (e.target.value) handleScanQR(e.target.value)
                      }}
                    />
                    <label>{'Scan QR Code'}</label>
                  </div>

                  {/* Pending list */}
                  {pendingItems.length > 0 && (
                    <table className="pending-table">
                      <thead>
                        <tr>
                          <th>Part No.</th>
                          <th>LOT</th>
                          <th>From</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {pendingItems.map((item) => (
                          <tr key={item.lotNo}>
                            <td>{item.partNo}</td>
                            <td>{item.lotNo}</td>
                            <td>{item.fromArea}</td>
                            <td>
                              <button className="btn-remove" onClick={() => removeItem(item.lotNo)}>
                                ✕
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </>
              )}

              <div className="button-wrapper">
                <div className="btn-submit" onClick={() => props.history.goBack()}>
                  <p>{'Cancel'}</p>
                </div>
                <div
                  className={`btn-submit confirm`}
                  onClick={onSubmit}
                  style={{ opacity: pendingItems.length === 0 || loading ? 0.5 : 1 }}
                >
                  <p>{loading ? 'Processing...' : `Confirm (${pendingItems.length})`}</p>
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
