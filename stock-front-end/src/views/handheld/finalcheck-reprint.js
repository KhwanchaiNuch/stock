import React, { useEffect, useState } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import IcoPrint from 'assets/images/ico-print-table.png'
import IcoEditBlue from 'assets/images/ico-edit-b.png'
import IcoEditGray from 'assets/images/ico-edit-g.png'
import { map, get, isEmpty } from 'lodash'
import Pagination from 'components/pagination'
import { useStoreActions } from 'easy-peasy'
import { withRouter } from 'react-router-dom'
import useGet from '../../hooks/useGet'
import { httpCommon } from 'connectors/http-common'
import IcoSearch from 'assets/images/ico-search-input-b.png'

const FinalcheckReprintView = (props) => {
  const LIMIT = 10
  const [currentPage, setCurrentPage] = useState(0)
  const [limit, setLimit] = useState(LIMIT)
  const [offset, setOffset] = useState(0)
  const [loadingPrintId, setLoadingPrintId] = useState(null)

  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const { openModal } = useStoreActions((actions) => actions.modal)

  const [operationType, setOperationType] = useState('ALL')
  const [inputPartName, setInputPartName] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [inputLotNo, setInputLotNo] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [debounced, setDebounced] = useState(false)
  const [selected, setSelected] = useState([])

  const buildFilter = () => ({
    type: operationType && operationType !== 'ALL' ? operationType : undefined,
    partNo: inputValue || undefined,
    inputPartName: inputPartName || undefined,
    date: inputDate || undefined,
    lotNo: inputLotNo || undefined,
  })

  const { data, loading, onFetchQuery } = useGet('/api/v1/transactions', {
    variables: { limit, offset },
  })

  const onPageChange = (page) => {
    const selectedPage = page - 1
    const offsetTemp = Math.ceil(selectedPage * limit)
    setOffset(offsetTemp)
    const filter = buildFilter()
    onFetchQuery('/api/v1/transactions', { variables: { limit, offset: offsetTemp, ...filter } })
    setCurrentPage(selectedPage)
  }

  const total = get(data, 'result.total', 0)
  const pageCount = Math.ceil(total / limit)

  const onSetLimit = (e) => {
    const newLimit = Number(e.target.value)
    setLimit(newLimit)
    const filter = buildFilter()
    onFetchQuery('/api/v1/transactions', { variables: { limit: newLimit, offset: 0, ...filter } })
    setCurrentPage(0)
    setOffset(0)
  }

  const onSearch = ({ filter }) => {
    onFetchQuery('/api/v1/transactions', { variables: { limit: LIMIT, offset: 0, ...filter } })
    setCurrentPage(0)
    setOffset(0)
  }

  useEffect(() => {
    if (!debounced) return
    const id = setTimeout(() => {
      const filter = buildFilter()
      onSearch({ filter })
    }, 1000)
    return () => clearTimeout(id)
  }, [inputValue, inputPartName, inputDate, inputLotNo])

  const handleEnter = (event) => {
    if (event.key === 'Enter' && debounced) {
      setDebounced(false)
      onSearch({ filter: buildFilter() })
    }
  }

  const onSelectType = (e) => {
    const value = e.target.value
    setOperationType(value)
    onSearch({ filter: { ...buildFilter(), type: value !== 'ALL' ? value : undefined } })
  }

  const onPrintItem = async (item) => {
    const itemId = item.itemId
    if (!itemId || loadingPrintId) return
    setLoadingPrintId(itemId)
    try {
      const http = httpCommon()
      const res = await http.post(
        '/api/v1/raw-material/generate-qr-item',
        { itemId },
        { responseType: 'blob' }
      )
      const href = URL.createObjectURL(res.data)
      const link = document.createElement('a')
      link.href = href
      link.setAttribute('download', `qr-${item.lotNo || itemId}.pdf`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(href)
      showNotification({
        props: { type: 'success', title: 'Print สำเร็จ', notAutoClose: false, hasCloseBtn: false }
      })
    } catch (e) {
      showNotification({
        props: { type: 'error', title: get(e, 'response.data.message', 'Print error'), notAutoClose: true, hasCloseBtn: true }
      })
    } finally {
      setLoadingPrintId(null)
    }
  }

  const handleEdit = () => {
    if (selected.length === 0) return
    openModal({ type: 'EDIT_QC_STATUS', data: { mode: 'selected', ids: selected } })
  }

  return (
    <AppViewWrapperPure page="content">
      <main className="container-receipt">
        <div className="menu-top-bar">
          <div className="container">
            <p className="is-active">Finalcheck-Reprint</p>
          </div>
        </div>

        <div className="container">
          <div style={{ minHeight: '580px' }}>
            <div className="table-receipt" style={{ marginTop: '60px' }}>

              <div className="header-table">
                <div className="input_wrap" style={{ width: '325px', margin: '0px 16px' }}>
                  <input type="date" required value={inputDate}
                    onChange={(e) => { setInputDate(e.target.value); setDebounced(true) }} />
                  <label>Date</label>
                </div>

                <div className="input_wrap has-icon-left" style={{ width: '330px', marginRight: '16px' }}>
                  <div className="icon-left"><img src={IcoSearch} alt="search-partno" /></div>
                  <input type="text" required value={inputValue}
                    onChange={(e) => { setInputValue(e.target.value); setDebounced(true) }}
                    onKeyUp={handleEnter} />
                  <label>Search Part No.</label>
                </div>

                <div className="input_wrap has-icon-left" style={{ width: '330px' }}>
                  <div className="icon-left"><img src={IcoSearch} alt="search-partname" /></div>
                  <input type="text" required value={inputPartName}
                    onChange={(e) => { setInputPartName(e.target.value); setDebounced(true) }}
                    onKeyUp={handleEnter} />
                  <label>Search Part Name</label>
                </div>

                <div className="input_wrap has-icon-left" style={{ width: '330px', margin: '0px 16px' }}>
                  <div className="icon-left"><img src={IcoSearch} alt="search-lotno" /></div>
                  <input type="text" required value={inputLotNo}
                    onChange={(e) => { setInputLotNo(e.target.value); setDebounced(true) }}
                    onKeyUp={handleEnter} />
                  <label>Search LOT</label>
                </div>

                <div className="select_wrap" style={{ width: '220px', margin: '0px 16px' }}>
                  <select required value={operationType} onChange={onSelectType}>
                    <option className="placeholder" disabled value=""></option>
                    <option value="ALL">All</option>
                    <option value="RM">RM</option>
                    <option value="WIP">WIP</option>
                    <option value="FG">FG</option>
                    <option value="BS">BS</option>
                  </select>
                  <label>Type</label>
                </div>
              </div>

              {!loading && (
                <table>
                  <tbody>
                    <tr>
                      <th style={{ width: '40px' }}></th>
                      <th><p>Part No.</p></th>
                      <th><p>Part Name</p></th>
                      <th className="center"><p>LOT</p></th>
                      <th className="center"><p>Type</p></th>
                      <th className="center"><p>QTY</p></th>
                      <th className="center"><p>Print</p></th>
                    </tr>

                    {map(get(data, 'result.items', []), (item) => {
                      const isSelect = selected.includes(item.id)
                      const isPrinting = loadingPrintId === item.itemId
                      return (
                        <tr key={item.id} className={isSelect ? 'is-select' : ''}>
                          <td className="center">
                            <input type="checkbox" checked={isSelect}
                              onChange={() => setSelected(prev =>
                                isSelect ? prev.filter(x => x !== item.id) : [...prev, item.id]
                              )}
                              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                            />
                          </td>
                          <td><p>{item.partNo}</p></td>
                          <td><p>{item.partName}</p></td>
                          <td className="center"><p>{item.lotNo}</p></td>
                          <td className="center"><p>{item.type}</p></td>
                          <td className="center"><p>{item.quantity}</p></td>
                          <td className="center">
                            <div
                              style={{ cursor: isPrinting ? 'not-allowed' : 'pointer', opacity: isPrinting ? 0.4 : 1, display: 'flex', justifyContent: 'center' }}
                              onClick={() => onPrintItem(item)}
                            >
                              <img src={IcoPrint} alt="print" style={{ width: '24px', height: '24px' }} />
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {!(isEmpty(get(data, 'result.items', [])) && currentPage === 1) && (
            <div className="menu-pagination-wrapper">
              <div className="page-limit-menu">
                <p>Rows per page:</p>
                <select onChange={onSetLimit} value={limit}>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
                <p>{`${limit * currentPage + 1} - ${limit * (currentPage + 1)} of ${total}`}</p>
              </div>
              <div className="page-paginations">
                <Pagination totalPage={pageCount} onPageChange={onPageChange} currentPage={currentPage} />
              </div>
            </div>
          )}

          {!isEmpty(get(data, 'result.items', [])) && (
            <div className="menu-bar-footer">
              <div className="container">
                <div className="btn-menu-wrapper">
                  <div
                    className={`btn-menu no-bg ${selected.length === 0 ? 'disabled' : ''}`}
                    onClick={handleEdit}
                  >
                    <img src={selected.length === 0 ? IcoEditGray : IcoEditBlue} alt="edit" />
                    Edit
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </AppViewWrapperPure>
  )
}

export default withRouter(FinalcheckReprintView)
