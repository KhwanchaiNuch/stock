import React, { useState } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import IcoCreateFile from 'assets/images/ico-create-file.png'
import IcoAddReceipt from 'assets/images/ico-add-receipt.png'
import IcoPlus from 'assets/images/ico-plus.png'
import IcoDeleteBlue from 'assets/images/ico-delete-b.png'
import IcoDeleteGray from 'assets/images/ico-delete-g.png'
import { map, some, get, reject, isEmpty } from 'lodash'
import Pagination from 'components/pagination'
import { useStoreActions } from 'easy-peasy'
import useDetectShift from 'hooks/useDetectShift'
import usePermission from 'hooks/usePermission'
import { withRouter } from 'react-router-dom'
import useGet from 'hooks/useGet'
import useDelete from 'hooks/useDelete'
import { resolveLoop } from 'utils/promise'
import delay from 'utils/delay'

const MasterSupplierView = (props) => {
    const { isAllow } = usePermission()
    const { openModal } = useStoreActions(actions => actions.modal)
    const openToast = useStoreActions((actions) => actions.toast.openToast)
    const showNotification = useStoreActions((actions) => actions.notification.showNotification)
    const { shiftHeld } = useDetectShift()
    const [currentPage, setCurrentPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [offset, setOffset] = useState(0)

    const { data, loading, onFetchQuery, refetch } = useGet('/api/v1/suppliers', {
        variables: {
            limit: limit,
            offset: offset
        }
    })

    const onPageChange = page => {
        const selected = page - 1
        setCurrentPage(selected)
        const offset = Math.ceil(selected * limit)
        setOffset(offset)
        onFetchQuery('/api/v1/suppliers', {
            variables: {
                limit: limit,
                offset: offset
            }
        })
    }

    const total = get(data, 'result.total', 0)
    const pageCount = Math.ceil(total / limit)

    const onSetLimit = (e) => {
        setLimit(Number(e.target.value))
        onFetchQuery('/api/v1/suppliers', {
            variables: {
                limit: Number(e.target.value),
                offset: offset
            }
        })
    }

    const [selected, setSelected] = useState([])

    const { onDelete } = useDelete('/api/v1/suppliers')

    const onDeleteFn = async () => {
        await resolveLoop(selected, async (item, index, resolve, reject) => {
            try {
                if (!item.id) {
                    return resolve()
                }
                onDelete({
                    variables: {
                        id: get(item, 'id', '')
                    },
                    onDone: (res) => {
                    },
                    onError: (e) => {
                        console.log('onError ==>', e)
                        openToast({
                            message: get(e, 'response.data.message', ''),
                            timeout: 2500
                        })
                    }
                })
                if ((selected.length - 1) === index) {
                    setSelected([])
                    showNotification({
                        props: {
                            type: 'success',
                            title: 'Delete supplier successfully',
                            notAutoClose: false,
                            hasCloseBtn: false
                        }
                    })
                    await delay(1500)
                    refetch()
                }
                return resolve()
            } catch (err) {
                return reject(err)
            }
        })
    }

    return (
        <AppViewWrapperPure page="content">
            <main className="container-receipt">
                <div className="menu-top-bar">
                    <div className="container">
                        <p onClick={() => { props.history.push('/master-product') }}>Product</p>
                        <p onClick={() => { props.history.push('/master-operater') }}>Operator</p>
                        <p onClick={() => { props.history.push('/master-area') }}>Area</p>
                        <p onClick={() => { props.history.push('/master-customer') }}>Customer</p>
                        <p className="is-active">Supplier</p>
                    </div>
                </div>
                <div className="container">
                    <div
                        className="btn-create-file"
                        onClick={() => {
                            if (!isAllow) return
                            openModal({
                                type: 'ADD_MASTER_SUPPLIER'
                            })
                        }}
                    >
                        <img src={IcoCreateFile} />
                        <p>Create new supplier</p>
                    </div>
                    {!loading && (
                        <>
                            {!isEmpty(get(data, 'result.items', [])) ? (
                                <div style={{ minHeight: '580px' }}>
                                    <div className="table-receipt">
                                        <div className="header-table">
                                            <span>{'You can use Shift or Ctrl key to select multiple records.'}</span>
                                        </div>
                                        <table>
                                            <tr>
                                                <th>
                                                    <p>{'Supplier No.'}</p>
                                                </th>
                                                <th>
                                                    <p>{'Supplier Name'}</p>
                                                </th>
                                                <th className="center">
                                                    <p>{'Note'}</p>
                                                </th>
                                            </tr>
                                            {map(get(data, 'result.items', []), (item) => {
                                                const isSelect = some(selected, (v) => get(v, 'id', '') === get(item, 'id', ''))
                                                const onSelect = () => {
                                                    if (isSelect) {
                                                        setSelected(reject(selected, (v) => get(v, 'id', '') === get(item, 'id', '')))
                                                    } else {
                                                        if (shiftHeld) {
                                                            setSelected([...selected, { id: get(item, 'id', '') }])
                                                            return
                                                        }
                                                        setSelected([{ id: get(item, 'id', '') }])
                                                    }
                                                }
                                                return (
                                                    <tr className={`${isSelect ? 'is-select' : ''}`}>
                                                        <td
                                                            onClick={() => {
                                                                onSelect()
                                                            }}
                                                        >
                                                            <p>{get(item, 'supplierNo', '')}</p>
                                                        </td>
                                                        <td
                                                            onClick={() => {
                                                                onSelect()
                                                            }}>

                                                            <p>{get(item, 'supplierName', '')}</p>
                                                        </td>
                                                        <td
                                                            className="center"
                                                            onClick={() => {
                                                                onSelect()
                                                            }}
                                                        >
                                                            <p>{get(item, 'note', '') || '-'}</p>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </table>
                                    </div>
                                </div>
                            ) : (
                                <div className="empty-data-receit">
                                    <img src={IcoAddReceipt} />
                                    <div className="btn-create"
                                        onClick={() => {
                                            if (!isAllow) return
                                            openModal({
                                                type: 'ADD_MASTER_SUPPLIER'
                                            })
                                        }}
                                    >
                                        <img src={IcoPlus} />
                                        <p>{'Create new supplier'}</p>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
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
                                <Pagination totalPage={pageCount} onPageChange={onPageChange} currentPage={currentPage} />
                            </div>
                        </div>
                    )}
                    {!isEmpty(get(data, 'result.items', [])) && (
                        <div className="menu-bar-footer">
                            <div className="container">
                                <p>{'Please use Shift or Ctrl key to select multiple records.'}</p>
                                <div className="btn-menu-wrapper">
                                    <div
                                        className={`btn-menu no-bg ${isEmpty(selected) ? 'disabled' : ''}`}
                                        onClick={() => {
                                            if (!isAllow) return
                                            if (isEmpty(selected)) return
                                            onDeleteFn()
                                        }}
                                    >
                                        <img src={isEmpty(selected) ? IcoDeleteGray : IcoDeleteBlue} />
                                        Delete
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

export default withRouter(MasterSupplierView)
