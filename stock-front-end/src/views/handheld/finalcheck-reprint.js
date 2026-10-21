import React, { useState, useEffect } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import { withRouter } from 'react-router-dom'
import { useStoreActions } from 'easy-peasy'
import { get, map } from 'lodash'
import styled from 'styled-components'
import useGet from 'hooks/useGet'
import usePostDownloadFile from 'hooks/usePostDownloadFile'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .header-mobile { display: flex; }
  .container-wrapper-section-form {
    width: 100%;
    padding: 16px;
    overflow: scroll;
    @media (min-width: 400px) { height: 568px; }
  }
  select {
    border-radius: 12px;
    border: 1px solid #B0BCCB;
    width: 100%;
    height: 60px;
    color: #002D63;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-indent: 7px;
    padding: 0;
    margin-bottom: 16px;
    background: #fff;
    &:focus { border: 1px solid #0050F0; outline: none; }
    .placeholder { display: none; }
  }
  select:focus + label, select:valid + label {
    font-size: 12px; font-weight: 400; line-height: 16px;
    color: #5B6A83; top: 8px;
  }
  .select_wrap {
    width: 100%; height: auto; position: relative;
    &.focus select { padding: 4px 0 0 0; }
    label {
      font-size: 16px; font-weight: 400; line-height: 24px; color: #B0BCCB;
      position: absolute; top: 18px; left: 12px;
      transition: 0.2s ease all; pointer-events: none;
    }
    &.focus label { font-size: 12px; color: #5B6A83; top: 8px; }
  }
  .result-table {
    width: 100%;
    margin-bottom: 16px;
    border-collapse: collapse;
    th, td {
      padding: 8px;
      font-size: 13px;
      border-bottom: 1px solid #e0e4ea;
      text-align: center;
    }
    th { color: #5B6A83; font-weight: 600; }
    .ng-row td { color: #d32f2f; font-weight: 600; }
  }
  .btn-print {
    background: #2B3D8F;
    color: #fff;
    border-radius: 12px;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    margin-top: 8px;
    &.disabled { opacity: 0.4; pointer-events: none; }
  }
`

const FinalcheckReprint = (props) => {
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const [recNo, setRecNo] = useState('')
  const [results, setResults] = useState(null)
  const [loadingResults, setLoadingResults] = useState(false)
  const [loadingPrint, setLoadingPrint] = useState(false)

  const { data: recList } = useGet('/api/v1/raw-material/receipt/outbound-final')
  const { onPost: onPostPdf } = usePostDownloadFile('/api/v1/raw-material/generate-qr-ng')

  const fetchResults = async (receiptNo) => {
    if (!receiptNo) return
    setLoadingResults(true)
    setResults(null)
    try {
      const { httpCommon } = await import('connectors/http-common')
      const http = httpCommon()
      const res = await http.get('/api/v1/raw-material/finalcheck-results', {
        params: { receiptNo }
      })
      if (get(res, 'data.statusCode') === 200) {
        setResults(get(res, 'data.result'))
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoadingResults(false)
    }
  }

  const onPrintNg = () => {
    if (loadingPrint || !recNo) return
    setLoadingPrint(true)
    onPostPdf({
      variables: { receiptNo: recNo },
      onDone: async (res) => {
        setLoadingPrint(false)
        if (res) {
          const href = URL.createObjectURL(res)
          const link = document.createElement('a')
          link.href = href
          link.setAttribute('download', recNo + '-ng.pdf')
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(href)
          showNotification({
            props: { type: 'success', title: 'NG QR PDF ready', notAutoClose: false, hasCloseBtn: false }
          })
        }
      },
      onError: (e) => {
        setLoadingPrint(false)
        showNotification({
          props: { type: 'error', title: get(e, 'response.data.message', 'Print error'), notAutoClose: true, hasCloseBtn: true }
        })
      }
    })
  }

  const items = get(results, 'items', [])
  const hasNg = items.some(item => item.ngQty > 0)

  return (
    <AppViewWrapperPure page="content">
      <main className="container-qr-scanner">
        <div className="box-scanner">
          <Container>
            <div className="header-mobile">
              <h1>{'Finalcheck Reprint'}</h1>
            </div>
            <div className="container-wrapper-section-form">
              <div className="select_wrap focus">
                <select
                  required
                  value={recNo}
                  onChange={(e) => {
                    const value = e.target.value
                    setRecNo(value)
                    fetchResults(value)
                  }}
                >
                  <option className="placeholder" defaultValue="" disabled value="">{''}
                  </option>
                  <option defaultValue="" disabled>{'-- เลือก Pickup --'}</option>
                  {map(get(recList, 'result.receipt', []), (t) => (
                    <option key={t.receiptNo} value={t.receiptNo}>{t.receiptNo}</option>
                  ))}
                </select>
                <label>{'Pickup No.'}</label>
              </div>

              {loadingResults && <p style={{ textAlign: 'center', color: '#5B6A83' }}>Loading...</p>}

              {results && items.length > 0 && (
                <>
                  <table className="result-table">
                    <thead>
                      <tr>
                        <th>Part No</th>
                        <th>Lot No</th>
                        <th>Total</th>
                        <th>OK</th>
                        <th>NG</th>
                      </tr>
                    </thead>
                    <tbody>
                      {map(items, (item) => (
                        <tr key={item.id} className={item.ngQty > 0 ? 'ng-row' : ''}>
                          <td>{item.partNo}</td>
                          <td>{item.lotNo}</td>
                          <td>{item.totalQty}</td>
                          <td>{item.okQty}</td>
                          <td>{item.ngQty > 0 ? `⚠ ${item.ngQty}` : item.ngQty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div
                    className={`btn-print ${!hasNg || loadingPrint ? 'disabled' : ''}`}
                    onClick={onPrintNg}
                  >
                    {loadingPrint ? 'Generating...' : `Print NG QR Tags (${items.filter(i => i.ngQty > 0).length} items)`}
                  </div>
                </>
              )}

              {results && items.length === 0 && (
                <p style={{ textAlign: 'center', color: '#5B6A83' }}>ไม่มีข้อมูล</p>
              )}

              <div
                style={{ marginTop: '24px', textAlign: 'center', color: '#2B3D8F', cursor: 'pointer', fontWeight: 700 }}
                onClick={() => props.history.goBack()}
              >
                {'← Back'}
              </div>
            </div>
          </Container>
        </div>
      </main>
    </AppViewWrapperPure>
  )
}

export default withRouter(FinalcheckReprint)
