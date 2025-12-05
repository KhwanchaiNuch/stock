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
import usePost from '../hooks/usePost'          // ✅ เพิ่มอันนี้
import delay from 'utils/delay'
import IcoSearch from 'assets/images/ico-search-input-b.png'
// import { httpCommon } from 'connectors/http-common'   // ❌ ไม่ได้ใช้แล้ว ลบออกได้

const QcCheckView = (props) => {
  const LIMIT = 10
  const [currentPage, setCurrentPage] = useState(0)
  const [limit, setLimit] = useState(LIMIT)
  const [offset, setOffset] = useState(0)
  const [loadinPrint, setLoadingPrint] = useState(0)

  const showNotification = useStoreActions(
    (actions) => actions.notification.showNotification
  )

  const [operationType, setOperationType] = useState('ALL')
  const [inputPartName, setInputPartName] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [debounced, setDebounced] = useState(false)

  // ✅ selected: null หรือ object { id, note }
  const [selected, setSelected] = useState(null)

  const buildFilter = () => {
    return {
      status:
        operationType && operationType !== 'ALL' ? operationType : undefined,
      partNo: inputValue ? inputValue : undefined,
      inputPartName: inputPartName ? inputPartName : undefined,
    }
  }

  const { data, loading, onFetchQuery } = useGet('/api/v1/transactions', {
    variables: {
      limit: limit,
      offset: offset,
    },
  })

  const reloadList = () => {
    const filter = buildFilter()
    onFetchQuery('/api/v1/transactions', {
      variables: {
        limit,
        offset,
        ...filter,
      },
    })
  }

  const onPageChange = (page) => {
    const selectedPage = page - 1
    const offsetTemp = Math.ceil(selectedPage * limit)
    setOffset(offsetTemp)
    const filter = buildFilter()
    onFetchQuery('/api/v1/transactions', {
      variables: {
        limit: limit,
        offset: offsetTemp,
        ...filter,
      },
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
      variables: {
        limit: newLimit,
        offset: 0,
        ...filter,
      },
    })
    setCurrentPage(0)
    setOffset(0)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    setDebounced(true)
  }

  useEffect(() => {
    if (!debounced) return
    const delayInputTimeoutId = setTimeout(() => {
      const filter = buildFilter()
      onSearch({ filter })
    }, 1000)
    return () => clearTimeout(delayInputTimeoutId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue])

  const onSearch = ({ filter }) => {
    onFetchQuery('/api/v1/transactions', {
      variables: {
        limit: LIMIT,
        offset: 0,
        ...filter,
      },
    })
    setCurrentPage(0)
    setOffset(0)
  }

  const onSelectType = async (e) => {
    const value = e.target.value
    setOperationType(value)
    const filter = {
      status: value && value !== 'ALL' ? value : undefined,
      partNo: inputValue ? inputValue : undefined,
      inputPartName: inputPartName ? inputPartName : undefined,
    }
    onSearch({ filter })
  }

  const { onPost: onPostExcel } = usePostDownloadFile(
    '/api/v1/transactions/generate-excel'
  )

  const { onPost: onPostUpdate } = usePost('/api/v1/transactions/update')
const { onPost: onPostUpdateAll } = usePost('/api/v1/transactions/update-all')

  const onPrintExcel = () => {
    const variables = {
      limit: 99,
      offset: 0,
      status:
        operationType && operationType !== 'ALL' ? operationType : undefined,
      partNo: inputValue,
      inputPartName: inputPartName,
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
          const futureDate = date.getDate()
          date.setDate(futureDate)
          const defaultValue = date.toLocaleDateString('en-CA')
          link.href = href
          link.setAttribute('download', 'history_' + defaultValue + '.xlsx')
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(href)
          setLoadingPrint(false)
          showNotification({
            props: {
              type: 'success',
              title: 'Create new excel successfully',
              notAutoClose: false,
              hasCloseBtn: false,
            },
          })
          await delay(1500)
        } else {
          setLoadingPrint(false)
          showNotification({
            props: {
              type: 'error',
              title: get(res, 'error', ''),
              notAutoClose: true,
              hasCloseBtn: true,
            },
          })
        }
      },
      onError: (e) => {
        console.log('onError ==>', e)
        setLoadingPrint(false)
        showNotification({
          props: {
            type: 'error',
            title: get(e, 'response.data.message', ''),
            notAutoClose: true,
            hasCloseBtn: true,
          },
        })
      },
    })
  }

  const handleInputPartNameChange = (event) => {
    setInputPartName(event.target.value)
    setDebounced(true)
  }

  const handleEnter = (event) => {
    const filter = buildFilter()
    if (event.key === 'Enter' && debounced) {
      setDebounced(false)
      onSearch({ filter })
    }
  }

  const handleEdit = () => {
    if (!selected || !selected.id) return

    const confirmResult = window.confirm(
      'ยืนยันการอัปเดตสถานะเป็น INBOUND ใช่หรือไม่?'
    )
    if (!confirmResult) return

    onPostUpdate({
      variables: {
        id: selected.id,
      },
      onDone: (res) => {
        showNotification({
          props: {
            type: 'success',
            title: 'อัปเดตสถานะเป็น INBOUND สำเร็จ',
            notAutoClose: false,
            hasCloseBtn: false,
          },
        })
        reloadList()
      },
      onError: (e) => {
        console.log('update status error =>', e)
        showNotification({
          props: {
            type: 'error',
            title: get(e, 'response.data.message', 'อัปเดตสถานะไม่สำเร็จ'),
            notAutoClose: true,
            hasCloseBtn: true,
          },
        })
      },
    })
  }
  const handleEditAll = () => {
  const confirmResult = window.confirm(
    'ยืนยันการอัปเดตสถานะทั้งหมดที่เป็น HOLD ให้เป็น INBOUND ใช่หรือไม่?'
  );
  if (!confirmResult) return;

  onPostUpdateAll({
    variables: {},
    onDone: (res) => {
      const totalUpdated = get(res, 'result.updated', 0);
      showNotification({
        props: {
          type: 'success',
          title: `อัปเดตทั้งหมดสำเร็จ (${totalUpdated} รายการ)`,
          notAutoClose: false,
          hasCloseBtn: false,
        },
      });
      reloadList();
    },
    onError: (e) => {
      console.log('update-all error =>', e);
      showNotification({
        props: {
          type: 'error',
          title: get(e, 'response.data.message', 'อัปเดตทั้งหมดไม่สำเร็จ'),
          notAutoClose: true,
          hasCloseBtn: true,
        },
      });
    },
  });
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
              <div className="header-table">
                <div
                  className="select_wrap"
                  style={{ width: '220px', margin: '0px 16px' }}
                >
                  <select
                    required
                    value={operationType}
                    onChange={onSelectType}
                  >
                    <option
                      className="placeholder"
                      default
                      disabled
                      value=""
                    >
                      {''}
                    </option>
                    <option value={'ALL'}>{'All'}</option>
                    <option value={'INBOUND'}>{'Inbound'}</option>
                    <option value={'OUTBOUND'}>{'Outbound'}</option>
                    <option value={'DRAFT'}>{'Draft'}</option>
                    <option value={'CREATED'}>{'Created'}</option>
                    <option value={'HOLD'}>{'Hold'}</option>
                    <option value={'HOLD2'}>{'Hold 2'}</option>
                  </select>
                  <label>{'Operation'}</label>
                </div>
                <div
                  className="input_wrap has-icon-left"
                  style={{ width: '343px', marginRight: '16px' }}
                >
                  <div className="icon-left">
                    <img src={IcoSearch} alt="search-partno" />
                  </div>
                  <input
                    type="text"
                    required
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <label>{'Search Part No.'}</label>
                </div>
                <div
                  className="input_wrap has-icon-left"
                  style={{ width: '343px' }}
                >
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
                  <label>{'Search Part Name'}</label>
                </div>
              </div>
              {!loading && (
                <>
                  <table>
                    <tbody>
                      <tr>
                        <th>
                          <p>{'Part No.'}</p>
                        </th>
                        <th>
                          <p>{'Part Name'}</p>
                        </th>
                        <th className="center">
                          <p>{'LOT.'}</p>
                        </th>
                        <th className="center">
                          <p>{'Type'}</p>
                        </th>
                        <th className="center">
                          <p>{'QTY'}</p>
                        </th>
                        <th className="center">
                          <p>{'Status'}</p>
                        </th>
                      </tr>
                      {map(get(data, 'result.items', []), (item) => {
                        const isSelect =
                          selected && selected.id === get(item, 'id', '')
                        const onSelect = () => {
                          if (isSelect) {
                            setSelected(null)
                          } else {
                            setSelected({
                              id: get(item, 'id', ''),
                              note: get(item, 'note', ''),
                            })
                          }
                        }

                        return (
                          <tr
                            key={item.id}
                            className={`${isSelect ? 'is-select' : ''}`}
                          >
                            <td onClick={onSelect}>
                              <p>{get(item, 'partNo', '')}</p>
                            </td>
                            <td onClick={onSelect}>
                              <p>{get(item, 'partName', '')}</p>
                            </td>
                            <td className="center" onClick={onSelect}>
                              <p>{get(item, 'lotNo', '')}</p>
                            </td>
                            <td className="center" onClick={onSelect}>
                              <p>{get(item, 'type', '')}</p>
                            </td>
                            <td className="center" onClick={onSelect}>
                              <p>
                                {get(item, 'quantity', '') ||
                                  get(item, 'amount', '')}
                              </p>
                            </td>
                            <td className="center" onClick={onSelect}>
                              <p>{get(item, 'status', '')}</p>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </div>
          {!(
            isEmpty(get(data, 'result.items', [])) && currentPage === 1
          ) && (
            <div className="menu-pagination-wrapper">
              <div className="page-limit-menu">
                <p>{'Rows per page:'}</p>
                <select onChange={onSetLimit} value={limit}>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
                <p>{`${limit * currentPage + 1} - ${
                  limit * (currentPage + 1)
                } of ${total}`}</p>
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
          {!isEmpty(get(data, 'result.items', [])) && (
            <div className="menu-bar-footer">
              <div className="container">
                <div className="btn-menu-wrapper">
                  <div
                    className={`btn-menu no-bg ${
                      !selected ? 'disabled' : ''
                    }`}
                    onClick={handleEdit}
                  >
                    <img
                      src={!selected ? IcoEditGray : IcoEditBlue}
                      alt="edit"
                    />
                    Edit
                  </div>

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
