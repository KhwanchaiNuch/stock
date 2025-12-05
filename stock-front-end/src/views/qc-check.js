import React, { useEffect, useState } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import IcoExport from 'assets/images/ico-export.png'
import IcoEditBlue from 'assets/images/ico-edit-b.png'
import IcoEditGray from 'assets/images/ico-edit-g.png'
import { map, get, isEmpty } from 'lodash'
import Pagination from 'components/pagination'
import { useStoreActions } from 'easy-peasy'
import { withRouter } from 'react-router-dom'
import useGet from '../hooks/useGet'
import usePostDownloadFile from '../hooks/usePostDownloadFile'
import delay from 'utils/delay'
import IcoSearch from 'assets/images/ico-search-input-b.png'

const QcCheckView = (props) => {
  const LIMIT = 10
  const [currentPage, setCurrentPage] = useState(0)
  const [limit, setLimit] = useState(LIMIT)
  const [offset, setOffset] = useState(0)
  const [loadinPrint, setLoadingPrint] = useState(0)

  const showNotification = useStoreActions(
    (actions) => actions.notification.showNotification
  )
  const { openModal } = useStoreActions((actions) => actions.modal)

  // ⭐ Type = RM/WIP/FG/BS
  const [operationType, setOperationType] = useState('ALL')

  const [inputPartName, setInputPartName] = useState('')
  const [inputValue, setInputValue] = useState('')

  // ⭐ Date Filter
  const [inputDate, setInputDate] = useState('')

  const [debounced, setDebounced] = useState(false)

  // selected row
  const [selected, setSelected] = useState(null)

  const buildFilter = () => {
    return {
      type: operationType && operationType !== 'ALL' ? operationType : undefined,
      partNo: inputValue ? inputValue : undefined,
      inputPartName: inputPartName ? inputPartName : undefined,
      date: inputDate ? inputDate : undefined,   // ⭐ เพิ่ม date filter
    }
  }

  const { data, loading, onFetchQuery } = useGet('/api/v1/transactions', {
    variables: { limit, offset },
  })

  const reloadList = () => {
    const filter = buildFilter()
    onFetchQuery('/api/v1/transactions', {
      variables: { limit, offset, ...filter },
    })
  }

  const onPageChange = (page) => {
    const selectedPage = page - 1
    const offsetTemp = Math.ceil(selectedPage * limit)

    setOffset(offsetTemp)

    const filter = buildFilter()
    onFetchQuery('/api/v1/transactions', {
      variables: { limit, offset: offsetTemp, ...filter },
    })
    setCurrentPage(selectedPage)
  }

  const total = get(data, 'result.total', 0)
  const pageCount = Math.ceil(total / limit)

  const onSetLimit = (e) => {
    const newLimit = Number(e.target.value)
    setLimit(newLimit)
    const filter = buildFilter()
    onFetchQuery('/api/v1/transactions', {
      variables: { limit: newLimit, offset: 0, ...filter },
    })
    setCurrentPage(0)
    setOffset(0)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    setDebounced(true)
  }

  const handleInputPartNameChange = (event) => {
    setInputPartName(event.target.value)
    setDebounced(true)
  }

  // ⭐ Date Change
  const handleDateChange = (e) => {
    setInputDate(e.target.value)
    setDebounced(true)
  }

  // ⭐ Debounce สำหรับ PartNo/PartName/Date
  useEffect(() => {
    if (!debounced) return
    const delayInputTimeoutId = setTimeout(() => {
      const filter = buildFilter()
      onSearch({ filter })
    }, 1000)
    return () => clearTimeout(delayInputTimeoutId)
  }, [inputValue, inputPartName, inputDate])

  const onSearch = ({ filter }) => {
    onFetchQuery('/api/v1/transactions', {
      variables: { limit: LIMIT, offset: 0, ...filter },
    })
    setCurrentPage(0)
    setOffset(0)
  }

  const handleEnter = (event) => {
    const filter = buildFilter()
    if (event.key === 'Enter' && debounced) {
      setDebounced(false)
      onSearch({ filter })
    }
  }

  const onSelectType = (e) => {
    const value = e.target.value
    setOperationType(value)
    const filter = buildFilter()
    onSearch({ filter })
  }

  const { onPost: onPostExcel } = usePostDownloadFile(
    '/api/v1/transactions/generate-excel'
  )

  const onPrintExcel = () => {
    const variables = {
      limit: 99,
      offset: 0,
      type: operationType !== 'ALL' ? operationType : undefined,
      partNo: inputValue,
      inputPartName: inputPartName,
      date: inputDate || undefined,
    }

    if (loadinPrint) return
    setLoadingPrint(true)

    onPostExcel({
      variables,
      onDone: async (res) => {
        if (res) {
          const href = URL.createObjectURL(res)
          const link = document.createElement('a')
          const date = new Date()
          link.href = href
          link.setAttribute('download', 'qc_' + date.toLocaleDateString('en-CA') + '.xlsx')
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(href)

          setLoadingPrint(false)
          showNotification({
            props: {
              type: 'success',
              title: 'Create excel successfully',
            },
          })
          await delay(1500)
        } else {
          setLoadingPrint(false)
          showNotification({
            props: {
              type: 'error',
              title: get(res, 'error', ''),
            },
          })
        }
      },
    })
  }

  const handleEdit = () => {
    if (!selected || !selected.id) return
    openModal({
      type: 'EDIT_QC_STATUS',
      data: { mode: 'single', id: selected.id },
    })
  }

  const handleEditAll = () => {
    openModal({
      type: 'EDIT_QC_STATUS',
      data: { mode: 'all' },
    })
  }

  return (
    <AppViewWrapperPure page="content">
      <main className="container-receipt">
        <div className="menu-top-bar">
          <div className="container">
            <p className="is-active">QC Check</p>
          </div>
        </div>

        <div className="container">
          <div style={{ minHeight: '580px' }}>
            <div className="table-receipt" style={{ marginTop: '60px' }}>

              {/* ⭐ FILTER SECTION */}
              <div className="header-table">
                 {/* ⭐ DATE FILTER */}
                <div className="input_wrap" style={{ width: '325px' , margin: '0px 16px' }}>
                  <input
                    type="date"
                    required
                    value={inputDate}
                    onChange={handleDateChange}
                  />
                  <label>Date</label>
                </div>

                

                {/* Part No */}
                <div className="input_wrap has-icon-left" style={{ width: '330px', marginRight: '16px' }}>
                  <div className="icon-left">
                    <img src={IcoSearch} alt="search-partno" />
                  </div>
                  <input
                    type="text"
                    required
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <label>Search Part No.</label>
                </div>

                {/* Part Name */}
                <div className="input_wrap has-icon-left" style={{ width: '330px'  }}>
                  <div className="icon-left">
                    <img src={IcoSearch} alt="search-partname" />
                  </div>
                  <input
                    type="text"
                    required
                    value={inputPartName}
                    onChange={handleInputPartNameChange}
                    onKeyUp={handleEnter}
                  />
                  <label>Search Part Name</label>
                </div>

               {/* ⭐ Type Select */}
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

              {/* ⭐ TABLE */}
              {!loading && (
                <>
                  <table>
                    <tbody>
                      <tr>
                        <th><p>Part No.</p></th>
                        <th><p>Part Name</p></th>
                        <th className="center"><p>LOT</p></th>
                        <th className="center"><p>Type</p></th>
                        <th className="center"><p>QTY</p></th>
                        <th className="center"><p>Status</p></th>
                      </tr>

                      {map(get(data, 'result.items', []), (item) => {
                        const isSelect = selected && selected.id === item.id

                        return (
                          <tr
                            key={item.id}
                            className={`${isSelect ? 'is-select' : ''}`}
                            onClick={() => {
                              setSelected(isSelect ? null : { id: item.id })
                            }}
                          >
                            <td><p>{item.partNo}</p></td>
                            <td><p>{item.partName}</p></td>
                            <td className="center"><p>{item.lotNo}</p></td>
                            <td className="center"><p>{item.type}</p></td>
                            <td className="center"><p>{item.quantity}</p></td>
                            <td className="center"><p>{item.status}</p></td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </>
              )}

            </div>
          </div>

          {/* Pagination */}
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
                <Pagination
                  totalPage={pageCount}
                  onPageChange={onPageChange}
                  currentPage={currentPage}
                />
              </div>
            </div>
          )}

          {/* Footer */}
          {!isEmpty(get(data, 'result.items', [])) && (
            <div className="menu-bar-footer">
              <div className="container">
                <div className="btn-menu-wrapper">

                  {/* EDIT ONE */}
                  <div
                    className={`btn-menu no-bg ${!selected ? 'disabled' : ''}`}
                    onClick={handleEdit}
                  >
                    <img src={!selected ? IcoEditGray : IcoEditBlue} alt="edit" />
                    Edit
                  </div>

                  {/* EDIT ALL */}
                  <div className="btn-menu" onClick={handleEditAll}>
                    <img src={IcoExport} />
                    Edit ALL
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

export default withRouter(QcCheckView)
