import React, { useEffect, useState } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import IcoCreateFile from 'assets/images/ico-create-file.png'
import IcoAddReceipt from 'assets/images/ico-add-receipt.png'
import IcoPlus from 'assets/images/ico-plus.png'
import IcoDeleteBlue from 'assets/images/ico-delete-b.png'
import IcoPrintBlue from 'assets/images/ico-print-b.png'
import IcoSaveBlue from 'assets/images/ico-save-b.png'
import IcoDeleteGray from 'assets/images/ico-delete-g.png'
import IcoPrintGray from 'assets/images/ico-print-g.png'
import IcoSaveGray from 'assets/images/ico-save-g.png'
import IcoEditBlue from 'assets/images/ico-edit-b.png'
import IcoEditGray from 'assets/images/ico-edit-g.png'
import { map, some, get, reject, isEmpty } from 'lodash'
import Pagination from 'components/pagination'
import { useStoreActions } from 'easy-peasy'
import useDetectShift from 'hooks/useDetectShift'
import { withRouter } from 'react-router-dom'
import usePermission from 'hooks/usePermission'
import useGet from 'hooks/useGet'
import useDelete from 'hooks/useDelete'
import usePost from 'hooks/usePost'
import delay from 'utils/delay'
import moment from 'moment'
import 'moment/locale/th'
import SubHeader from '../components/sub-header'
import LoadingSpinner from '../components/loading'
import usePostDownloadFile from '../hooks/usePostDownloadFile'


const ReceiptView = (props) => {
    const { stockTypeInput,receiptTypeInput } = props.match.params;
    const { isAllow } = usePermission()
    const showNotification = useStoreActions((actions) => actions.notification.showNotification)
    const { openModal } = useStoreActions(actions => actions.modal)
    const openToast = useStoreActions((actions) => actions.toast.openToast)
    const { shiftHeld } = useDetectShift()
    const [currentPage, setCurrentPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [offset, setOffset] = useState(0)
    const [loadingPrint, setLoadingPrint] = useState(false)
    // Convert to uppercase
    const stockType = stockTypeInput.toUpperCase();
    const receiptType = receiptTypeInput.toUpperCase();


    const headerContent = <SubHeader data={stockType+receiptType}/> ;   

    const { data: dataCheckReceipt, loading: loadingCheckReceipt, onFetchQuery: onFetchQueryCheckReceipt } = useGet('/api/v1/raw-material/check-receipt',{
        variables: {
            stockType,
            type: receiptType,
        }
    })

    const receiptNo = get(dataCheckReceipt, 'result.receiptNo', '');

    const { data, loading, onFetchQuery } = useGet('/api/v1/raw-material/receipt', {
        variables: {
            limit,
            offset,
            receiptNo: receiptNo,
            stockType,
        },
        skip: true
    })

    useEffect(() => {
        if (dataCheckReceipt && !loadingCheckReceipt) {
            if (get(dataCheckReceipt, 'result.created', false)) {
                onFetchQuery('/api/v1/raw-material/receipt', {
                    variables: {
                        limit,
                        offset,
                        receiptNo: receiptNo,
                        stockType,
                    }
                })
            }
        }
    }, [dataCheckReceipt, loadingCheckReceipt])

    const onPageChange = page => {
        const selected = page - 1
        setCurrentPage(selected)
        const offset = Math.ceil(selected * limit)
        setOffset(offset)
        onFetchQuery('/api/v1/raw-material/receipt', {
            variables: {
                limit,
                offset,
                receiptNo: receiptNo,
                stockType,
            }
        })
    }

    const total = get(data, 'result.total', 0)
    const pageCount = Math.ceil(total / limit)

    const onSetLimit = (e) => {
        setLimit(Number(e.target.value))
        onFetchQuery('/api/v1/raw-material/receipt', {
            variables: {
                limit: Number(e.target.value),
                offset,
                receiptNo: receiptNo,
                stockType,
            }
        })
    }

    const [selected, setSelected] = useState([])

    const { onDelete } = useDelete('/api/v1/raw-material/receipt-item-draft', true)

    const onDeleteFn = async () => {
        onDelete({
            variables: {
                receiptItemId: map(selected, 'id'),
                receiptNo: receiptNo
            },
            onDone: async (res) => {
                if (get(res, 'statusCode', '') === 200) {
                    setSelected([])
                    showNotification({
                        props: {
                            type: 'success',
                            title: 'Delete new file successfully',
                            notAutoClose: false,
                            hasCloseBtn: false
                        }
                    })
                    await delay(1500)
                    location.reload()
                }
            },
            onError: (e) => {
                console.log('onError ==>', e)
                openToast({
                    message: get(e, 'response.data.message', ''),
                    timeout: 2500
                })
            }
        })
    }

    const { onPost } = usePost('/api/v1/raw-material/receipt-save')

    const onSaveFn = () => {
        onPost({
            variables: {
                receiptNo: receiptNo
            },
            onDone: async (res) => {
                if (get(res, 'statusCode', '') === 200) {
                    showNotification({
                        props: {
                            type: 'success',
                            title: 'Save new file successfully',
                            notAutoClose: false,
                            hasCloseBtn: false
                        }
                    })
                    await delay(1500)
                    props.history.goBack()
                } else {
                    openToast({
                        message: get(res, 'error', ''),
                        timeout: 2500
                    })
                }
            },
            onError: (e) => {
                console.log('onError ==>', e)
                openToast({
                    message: get(e, 'response.data.message', ''),
                    timeout: 2500
                })
            }
        })
    }

    const { onPost: onPostPdf } = usePostDownloadFile('/api/v1/raw-material/generate-qr')

    const onPrinPdfs = (receiptNo) => {
        const variables = {
            receiptNo,
        }
        if (loadingPrint) return
        setLoadingPrint(true)
        onPostPdf({
            variables,
            onDone: async (res) => {
                if (res) { 
                    // create file link in browser's memory
                    const href = URL.createObjectURL(res);
                    // create "a" HTML element with href to file & click
                    const link = document.createElement('a');
                    link.href = href;
                    link.setAttribute('download', receiptNo+'.pdf'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                
                    // clean up "a" element & remove ObjectURL
                    document.body.removeChild(link);
                    URL.revokeObjectURL(href);
                    setLoadingPrint(false)
                    showNotification({
                        props: {
                        type: 'success',
                        title: 'Create new pdf successfully',
                        notAutoClose: false,
                        hasCloseBtn: false
                        }
                    })
                    await delay(1500)
                    location.reload()
                    } else {
                        setLoadingPrint(false)
                        showNotification({
                            props: {
                            type: 'error',
                            title: get(res, 'error', ''),
                            notAutoClose: true,
                            hasCloseBtn: true
                            }
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
                            hasCloseBtn: true
                        }
                    })
                }
        })
    }

    const { onPost: onPostExcel } = usePostDownloadFile('/api/v1/raw-material/receipt-generate-excel')

    const onPrintExcel = (receiptNo) => {
        const variables = {
            receiptNo,
        }
        if (loadingPrint) return
        setLoadingPrint(true)
        onPostExcel({
            variables,
            onDone: async (res) => {
                if (res) { 
                    // create file link in browser's memory
                    const href = URL.createObjectURL(res);
                    // create "a" HTML element with href to file & click
                    const link = document.createElement('a');
                    link.href = href;
                    link.setAttribute('download', receiptNo+'.xlsx'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                
                    // clean up "a" element & remove ObjectURL
                    document.body.removeChild(link);
                    URL.revokeObjectURL(href);
                    setLoadingPrint(false)
                    showNotification({
                        props: {
                        type: 'success',
                        title: 'Create new excel successfully',
                        notAutoClose: false,
                        hasCloseBtn: false
                        }
                    })
                    await delay(1500)
                    location.reload()
                    } else {
                        setLoadingPrint(false)
                        showNotification({
                            props: {
                            type: 'error',
                            title: get(res, 'error', ''),
                            notAutoClose: true,
                            hasCloseBtn: true
                            }
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
                            hasCloseBtn: true
                        }
                    })
                }
        })
    }

    return (
        <AppViewWrapperPure page="content">
            <main className="container-receipt">
                <div className="menu-top-bar">
                    {headerContent}
                </div>
                <div className="container">
                    <div
                        className="btn-create-file"
                        onClick={() => {
                            if (!isAllow) return
                            if (!get(dataCheckReceipt, 'result.created', false)) {
                                openModal({
                                    type: 'RECEIPT_NUMBER',
                                    data: {
                                        receiptNo: receiptNo,
                                        stockType,
                                        receiptType,
                                    }
                                })
                            } else {
                                openModal({
                                    type: receiptType === 'INBOUND'? 'CREATE_RECEIPT' : 'CREATE_PICKUP',
                                    data: {
                                        receiptNo: receiptNo,
                                        stockType,
                                        receiptType,
                                    }
                                })
                            }
                        }}
                    >
                        <img src={IcoCreateFile} />
                        {receiptType === 'INBOUND' ? <p>Create new {stockType} receipt</p> : <p>Create new pickup</p> }
                    </div>
                    {!loading && (
                        <>
                            <>
                                <div style={!isEmpty(get(data, 'result.receiptItem', [])) ? { minHeight: '580px' } : {}}>
                                    <div className="table-receipt">
                                        <div className="header-table">
                                            <div className="input-receipt">
                                                {receiptType === 'INBOUND' ?  <label>{'Receipt no.'}</label> :<label>{'Pickup no.'}</label> }
                                                <input
                                                    autoComplete="off"
                                                    type="text"
                                                    placeholder={`${get(dataCheckReceipt, 'result.created', false) ? receiptNo : ''}`}
                                                    disabled
                                                />
                                            </div>
                                            <span>{'You can use Shift or Ctrl key to select multiple records.'}</span>
                                        </div>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <th>
                                                    <p>{'Part No.'}</p>
                                                </th>
                                                <th>
                                                    <p>{'Part Name'}</p>
                                                </th>

                                                {
                                                    receiptType === 'INBOUND' ? 
                                                        <>
                                                            <th className="center">
                                                                <p>{'Price'}</p>
                                                            </th>
                                                            <th className="center">
                                                                <p>{'Lot No.'}</p>
                                                            </th>
                                                            <th className="center">
                                                                <p>{'Invoice No.'}</p>
                                                            </th>
                                                        </> : 
                                                        <th className="center">
                                                            <p>{'Ship to'}</p>
                                                        </th>
                                                }
                                                <th className="center">
                                                    <p>{'Qty'}</p>
                                                </th>
                                                {
                                                    receiptType === 'INBOUND' ?
                                                    <th className="center">
                                                        <p>{'Date'}</p>
                                                    </th> : ''
                                                }
                                                <th className="center">
                                                    <p>{'By'}</p>
                                                </th>
                                                <th className="center">
                                                    <p>{'Note'}</p>
                                                </th>
                                            </tr>
                                            {!isEmpty(get(data, 'result.receiptItem', [])) && (
                                                <>
                                                    {map(get(data, 'result.receiptItem', []), (item) => {
                                                        const isSelect = some(selected, (v) => get(v, 'id', '') === get(item, 'id', ''))
                                                        return (
                                                            <tr
                                                                key={item.id}
                                                                className={`${isSelect ? 'is-select' : ''}`}
                                                                onClick={() => {
                                                                    if (isSelect) {
                                                                        setSelected(reject(selected, (v) => get(v, 'id', '') === get(item, 'id', '')))
                                                                    } else {
                                                                        if (shiftHeld) {
                                                                            setSelected([...selected, { id: get(item, 'id', '') , quantity: get(item, 'quantity', ''), status: get(item, 'status', ''), note: get(item, 'note', '')}])
                                                                            return
                                                                        }
                                                                        setSelected([{ id: get(item, 'id', '') ,quantity: get(item, 'quantity', ''), status: get(item, 'status', ''),note: get(item, 'note', '')}])
                                                                    }
                                                                }}
                                                            >
                                                                <td>
                                                                    <p>{get(item, 'partNo', '')}</p>
                                                                </td>
                                                                <td>
                                                                    <p>{get(item, 'partName', '')}</p>
                                                                </td>

                                                                {
                                                                    receiptType === 'INBOUND' ? 
                                                                        <>
                                                                        <td className="center">
                                                                            <p>{get(item, 'price', 0)}</p>
                                                                        </td>
                                                                        <td className="center">
                                                                            <p>{get(item, 'lotNo', '')}</p>
                                                                        </td>
                                                                        <td className="center">
                                                                            <p>{get(item, 'invoiceNo', '')}</p>
                                                                        </td></> : 
                                                                        <td className="center">
                                                                            <p>{get(item, 'customer', '')}</p>
                                                                        </td>
                                                                }
                                                                <td className="center">
                                                                    <p>{get(item, 'quantity', 0)}</p>
                                                                </td>
                                                                {
                                                                    receiptType === 'INBOUND' ? 
                                                                    <>
                                                                        <td className="center">
                                                                            <p>
                                                                                {`${moment(Number(new Date(get(item, 'date', '')).getTime())).format('DD-MM-YY')}`}
                                                                            </p>
                                                                        </td>
                                                                        <td className="center">
                                                                            <p>{get(item, 'receivedBy', 0)}</p>
                                                                        </td>
                                                                    </> : 
                                                                    <td className="center">
                                                                        <p>{get(item, 'createdBy', 0)}</p>
                                                                    </td>
                                                                }
                                                                <td className="center">
                                                                    <p>{get(item, 'note', '')|| '-'}</p>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </>
                                            )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {!(isEmpty(get(data, 'result.receiptItem', [])) && (currentPage === 1)) && (
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
                                            <Pagination totalPage={pageCount} onPageChange={onPageChange} currentPage={currentPage} />
                                        </div>
                                    </div>
                                )}
                            </>
                        </>
                    )}
                    {isEmpty(get(data, 'result.receiptItem', [])) && (
                        <div
                            className="empty-data-receit"
                            onClick={() => {
                                if (!isAllow) return
                                if (!get(dataCheckReceipt, 'result.created', false)) {
                                    openModal({
                                        type: 'RECEIPT_NUMBER',
                                        data: {
                                            receiptNo: receiptNo,
                                            stockType,
                                            receiptType,
                                        }
                                    })
                                } else {
                                    openModal({
                                        type: receiptType === 'INBOUND'? 'CREATE_RECEIPT' : 'CREATE_PICKUP',
                                        data: {
                                            receiptNo: receiptNo,
                                            stockType,
                                            receiptType,
                                        }
                                    })
                                }
                            }}
                        >
                            <img src={IcoAddReceipt} />
                            <div className="btn-create">
                                <img src={IcoPlus} />
                                {receiptType === 'INBOUND' ?  <p>{`Create new ${stockType} receipt`}</p> : <p>{`Create new ${stockType} pickup`}</p>}
                            </div>
                        </div>
                    )}
                    <div className="menu-bar-footer">
                        <div className="container">
                            <p>{'Please use Shift or Ctrl key to select multiple records.'}</p>
                            <div className="btn-menu-wrapper">
                                <div
                                    className={`btn-menu no-bg ${(!isAllow || isEmpty(selected)) ? 'disabled' : ''}`}
                                    onClick={() => {
                                        if (!isAllow || isEmpty(selected)) return
                                        onDeleteFn()
                                    }}
                                >
                                    <img src={!isAllow || isEmpty(selected) ? IcoDeleteGray : IcoDeleteBlue} />
                                    Delete
                                </div>
                                {receiptType ==='INBOUND' ?
                                    <>
                                        <div
                                            className={`btn-menu no-bg`}
                                            onClick={() => {
                                                if (!isAllow ) return
                                                onPrinPdfs(receiptNo)
                                            }}
                                        >
                                            <img src={ IcoPrintBlue } />
                                            Print
                                        </div> 
                                        <div
                                            className={`btn-menu no-bg ${
                                                isEmpty(selected) || selected.length !== 1 ? 'disabled' : '' 
                                            }`}
                                            onClick={() => {
                                                if (isEmpty(selected) || selected.length !== 1) return;
                                                openModal({
                                                type: "EDIT_RECEIPT_NOTE",
                                                data: {
                                                    id: map(selected, 'id', '')[0],
                                                    note: map(selected, 'note', '')[0],
                                                    qty: map(selected, 'quantity', '')[0],
                                                    status: map(selected, 'status', '')[0],
                                                    receiptType: receiptType,
                                                },
                                                });
                                            }}
                                        >
                                            <img
                                                src={isEmpty(selected) || selected.length !== 1? IcoEditGray : IcoEditBlue}
                                            />
                                            Edit
                                        </div>
                                    </>:
                                        loadingPrint ? LoadingSpinner
                                        :<>
                                        
                                        <div
                                            className={`btn-menu no-bg ${
                                                isEmpty(selected) || selected.length !== 1 ? 'disabled' : '' 
                                            }`}
                                            onClick={() => {
                                                if (isEmpty(selected) || selected.length !== 1) return;
                                                openModal({
                                                type: "EDIT_RECEIPT_NOTE",
                                                data: {
                                                    id: map(selected, 'id', '')[0],
                                                    note: map(selected, 'note', '')[0],
                                                    qty: map(selected, 'quantity', '')[0],
                                                    status: map(selected, 'status', '')[0],
                                                    receiptType: receiptType,
                                                },
                                                });
                                            }}
                                        >
                                            <img
                                                src={isEmpty(selected) || selected.length !== 1? IcoEditGray : IcoEditBlue}
                                            />
                                            Edit
                                        </div>
                                        <div
                                            className={`btn-menu no-bg }`}
                                            onClick={() => {
                                                // if (!isAllow) return
                                                onPrintExcel(receiptNo)
                                            }}
                                        >
                                            <img src={IcoPrintBlue} />
                                            Print
                                        </div>
                                        </>
                                }
                                <div
                                    className={`btn-menu ${(!isAllow || isEmpty(get(data, 'result.receiptItem', []))) ? 'disabled' : ''}`}
                                    onClick={() => {
                                        if (!isAllow || isEmpty(get(data, 'result.receiptItem', []))) return
                                        onSaveFn()
                                    }}
                                >
                                    <img src={!isAllow || isEmpty(get(data, 'result.receiptItem', [])) ? IcoSaveGray : IcoSaveBlue} />
                                    Save
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AppViewWrapperPure>
    )
}

export default withRouter(ReceiptView)
