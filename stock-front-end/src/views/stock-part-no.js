import React, { useState, useEffect } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import IcoRequireOrder from 'assets/images/ico-require-order.png'
import IcoSearch from 'assets/images/ico-search-input-b.png'
import IcoExport from 'assets/images/ico-export.png'
import { map, some, get, reject, isEmpty } from 'lodash'
import Pagination from 'components/pagination'
import { useStoreActions } from 'easy-peasy'
import { withRouter } from 'react-router-dom'
import useGet from 'hooks/useGet'
import usePermission from 'hooks/usePermission'
import usePostDownloadFile from '../hooks/usePostDownloadFile'
import LoadingSpinner from '../components/loading'

const StockPartNoView = (props) => {
    const LIMIT = 10
    const { isAllow } = usePermission()
    const { openModal } = useStoreActions(actions => actions.modal)
    const [currentPage, setCurrentPage] = useState(0)
    const [limit, setLimit] = useState(LIMIT)
    const [offset, setOffset] = useState(0)
    const [inputValue, setInputValue] = useState('')
    const [inputValue2, setInputValue2] = useState('ALL')
    const [inputPartName, setInputPartName] = useState('')
    const [debounced, setDebounced] = useState(false)
    const [loadingPrint, setLoadingPrint] = useState(false)


    const date = new Date()
    const futureDate = date.getDate()
    date.setDate(futureDate)
    const defaultValue = date.toLocaleDateString('en-CA')

    const { data, onFetchQuery } = useGet('/api/v1/product/stock/product', {
        variables: {
            limit: limit,
            offset: offset
        }
    })

    const total = get(data, 'result.total', 0)
    const pageCount = Math.ceil(total / limit)

    const onPageChange = page => {
        const selected = page - 1
        setCurrentPage(selected)
        const offset = Math.ceil(selected * limit)
        setOffset(offset)
        const filter = {
            partNo: inputValue,
            inputPartName: inputPartName? inputPartName: undefined,
            stockType: inputValue2,
        }
        onFetchQuery('/api/v1/product/stock/product', {
            variables: {
                limit: limit,
                offset: offset,
                ...filter
            }
        })
    }

    const onSearch = ({ filter }) => {
        setOffset(0)
        onFetchQuery('/api/v1/product/stock/product', {
            variables: {
                limit: limit,
                ...filter
            }
        })
    }

    useEffect(() => {
        if (!debounced) return
        const delayInputTimeoutId = setTimeout(() => {
            const filter = {
                partNo: inputValue,
                inputPartName: inputPartName? inputPartName: undefined,
                stockType: inputValue2,
            }
            onSearch({ filter })
        }, 666)
        return () => clearTimeout(delayInputTimeoutId)
    }, [inputValue,inputValue2, 666])

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
        setDebounced(true)
    }

    const handleStockType = (event) => {
        setInputValue2(event.target.value)
        setDebounced(true)
    }

    const onSetLimit = (e) => {
        setLimit(Number(e.target.value))
        const filter = {
            partNo: inputValue,
            inputPartName: inputPartName? inputPartName: undefined,
            stockType: inputValue2,
        }
        onFetchQuery('/api/v1/product/stock/product', {
            variables: {
                limit: Number(e.target.value),
                offset: offset,
                ...filter
            }
        })
    }
    // Format the number as Thai Baht currency
    const formattedAmount = new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: 'THB',
    });

    const [selected, setSelected] = useState([])

    const handleClick = ({ onClick }) => {
        if (window.getSelection().toString()) {
            return
        }
        if (onClick) {
            onClick()
        }
    }

    const hasRequiredOrder = some(get(data, 'result.items', []), (v) => Number(get(v, 'stock', 0)) - Number(get(v, 'minimumStock', 0)) < 0)

    const { onPost: onPostExcel } = usePostDownloadFile('/api/v1/product/stock/product/generate-excel')

    const onPrintExcel = () => {
    const variables = {
        partNo: inputValue,
        stockType: inputValue2,
    }
    if (loadingPrint) return;
    setLoadingPrint(true);
    onPostExcel({
        variables,
        onDone: async (res) => {
          if (res) {
            // create file link in browser's memory
            const href = URL.createObjectURL(res);
            // create "a" HTML element with href to file & click
            const link = document.createElement("a");
            link.href = href;
            link.setAttribute("download", "stock_"+defaultValue+".xlsx"); //or any other extension
            document.body.appendChild(link);
            link.click();
            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
            setLoadingPrint(false);
            showNotification({
              props: {
                type: "success",
                title: "Create new excel successfully",
                notAutoClose: false,
                hasCloseBtn: false,
              },
            });
            await delay(1500);
            location.reload();
          } else {
            setLoadingPrint(false);
            showNotification({
              props: {
                type: "error",
                title: get(res, "error", ""),
                notAutoClose: true,
                hasCloseBtn: true,
              },
            });
          }
        },
        onError: (e) => {
          console.log("onError ==>", e);
          setLoadingPrint(false);
          showNotification({
            props: {
              type: "error",
              title: get(e, "response.data.message", ""),
              notAutoClose: true,
              hasCloseBtn: true,
            },
          });
        },
      });
    };

    const handleInputPartNameChange = (event) => {
        setInputPartName(event.target.value)
        setDebounced(true)
    }

    const handleEnter = (event) => {
        const filter = {
            partNo: inputValue,
            inputPartName: inputPartName? inputPartName: undefined,
            stockType: inputValue2,
        }
        if (event.key === "Enter" && debounced) { 
          setDebounced(false)
          onSearch({ filter });
        }
      };

    return (
        <AppViewWrapperPure page="content">
            <main className="container-receipt">
                <div className="menu-top-bar">
                    <div className="container">
                        <p className="is-active">Stock</p>
                    </div>
                </div>
                <div className="container">
                    <div style={{ marginTop: '60px' }} />
                    {hasRequiredOrder && (
                        <div className="btn-require">
                            <img src={IcoRequireOrder} />
                            <p>Order Required</p>
                        </div>
                    )}
                    <div style={{ minHeight: '580px' }}>
                        <div className="table-receipt">
                            <div className="header-table">
                                <div className="input_wrap" style={{ width: '325px', marginRight: '16px', position: 'relative' }}>
                                    <input type="date" required defaultValue={defaultValue} />
                                    <label>{'Date'}</label>
                                    <div className="dim-input" style={{ width: '100%', height: '60px' }} />
                                </div>
                                <div className="input_wrap has-icon-left" style={{ width: '343px',marginRight: '16px' }}>
                                    <div className="icon-left">
                                        <img src={IcoSearch} />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        value={inputValue}
                                        onChange={handleInputChange}
                                    />
                                    <label>{'Part No.'}</label>
                                </div>
                                <div
                                    className="input_wrap has-icon-left"
                                    style={{ width: "343px" }}
                                >
                                    <div className="icon-left">
                                    <img src={IcoSearch} />
                                    </div>
                                    <input
                                    type="text"
                                    required
                                    value={inputPartName}
                                    // ref={reference}
                                    onChange={handleInputPartNameChange}
                                    onKeyUp={handleEnter}
                                    />
                                    <label>{"Part Name"}</label>
                                </div>
                                <div className="select_wrap" style={{ width: '180px', margin: '0px 16px' }}>
                                    <select 
                                        required 
                                        value={inputValue2}
                                        onChange={handleStockType}
                                    >
                                        <option className="placeholder" default disabled value="">{''}</option>
                                        <option value={'ALL'}>{'ALL'}</option>
                                        <option value={'RM'}>{'RM'}</option>
                                        <option value={'WIP'}>{'WIP'}</option>
                                        <option value={'FG'}>{'FG'}</option>
                                        <option value={'BS'}>{'BS'}</option>
                                    </select>
                                    <label>{'Stock Type'}</label>
                                </div>
                            </div>
                            {!isEmpty(get(data, 'result.items', [])) && (
                                <table>
                                    <tbody>
                                    <tr>
                                        <th>
                                            <p>{'Part No.'}</p>
                                        </th>
                                        <th>
                                            <p>{'Part Name'}</p>
                                        </th>
                                        <th>
                                            <p>{'Type'}</p>
                                        </th>
                                        <th className="center">
                                            <p>{'Stock'}</p>
                                        </th>
                                        <th className="center">
                                            <p>{'Min. stock'}</p>
                                        </th>
                                        <th className="center">
                                            <p>{'Sum price'}</p>
                                        </th>
                                        {/* <th className="center">
                                                    <p>{'Difference'}</p>
                                                </th> */}
                                        <th className="center" />
                                    </tr>
                                    {map(get(data, 'result.items', []), (item) => {
                                        const isSelect = some(selected, (v) => get(v, 'id', '') === get(item, 'id', ''))
                                        const diff = Number(get(item, 'stock', 0)) - Number(get(item, 'minimumStock', 0))
                                        const isRequire = diff < 0
                                        return (
                                            <tr
                                                key={item.id}
                                                className={`${isSelect ? 'is-select' : ''} ${isRequire ? 'is-require' : ''}`}
                                                onClick={() => {
                                                    handleClick({
                                                        onClick: () => {
                                                            if (isSelect) {
                                                                setSelected(reject(selected, (v) => get(v, 'id', '') === get(item, 'id', '')))
                                                            } else {
                                                                setSelected([{ id: get(item, 'id', ''), partNo: get(item, 'partNo', '') }])
                                                            }
                                                        }
                                                    })
                                                }}
                                            >
                                                <td>
                                                    <p>{get(item, 'partNo', '')}</p>
                                                </td>
                                                <td>
                                                    <p>{get(item, 'partName', '')}</p>
                                                </td>
                                                <td>
                                                    <p>{get(item, 'type', '')}</p>
                                                </td>
                                                <td className="center">
                                                    <p>{get(item, 'stock', 0)}</p>
                                                </td>
                                                <td className="center">
                                                    <p>{get(item, 'minimumStock', 0)}</p>
                                                </td>
                                                <td className="center">
                                                    <p>{formattedAmount.format(get(item, 'sumPrice', 0))}</p>
                                                </td>
                                                {/* <td className="center">
                                                            <p>{diff}</p>
                                                        </td> */}
                                                <td
                                                    className="center"
                                                    onClick={() => {
                                                        openModal({
                                                            type: 'DETAIL_STOCK',
                                                            data: {
                                                                title: get(item, 'partName', ''),
                                                                id: get(item, 'id', ''),
                                                            }
                                                        })
                                                    }}
                                                >
                                                    <p style={{ color: '#2BA6E1' }}>{'Detail'}</p>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                    {!(isEmpty(get(data, 'result.items', [])) && (currentPage === 1)) && (
                        <div className="menu-pagination-wrapper">
                            <div className="page-limit-menu">
                                <p>{'Rows per page:'}</p>
                                <select onChange={onSetLimit} value={limit}>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                </select>
                                <p>{`${limit*currentPage+1} - ${limit*(currentPage+1)} of ${total}`}</p>
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
                                     {loadingPrint ? 
                                        <div className="btn-menu no-bg"> 
                                            <LoadingSpinner/> 
                                        </div>  :
                                        <div className="btn-menu" onClick={onPrintExcel}>
                                            <img src={IcoExport} />
                                            Export CSV
                                        </div>
                                     }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </AppViewWrapperPure>
    )
}

export default withRouter(StockPartNoView)
