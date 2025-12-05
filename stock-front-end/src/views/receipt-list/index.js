/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-multi-spaces */
/* eslint-disable quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import IcoSearch from 'assets/images/ico-search-input-b.png'
import IcoDoc from 'assets/images/ico-doc-g.png'
import IcoMiniDoc from 'assets/images/ico-minidoc.png'
import { map, get, isEmpty } from 'lodash'
import { withRouter } from 'react-router-dom'
import ReceiptListContainer from 'views/receipt-list/list'
import useGet from 'hooks/useGet'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import LoadingSpinner from 'components/loading'
import moment from 'moment'
import IcoCreateFile from 'assets/images/ico-create-file.png'
import 'moment/locale/th'
import SubHeader from '../../components/sub-header'

const ReceiptListView = (props) => {
    const { stockTypeInput,receiptTypeInput } = props.match.params;
    const [selected, setSelected] = useState('')
    const [hide, setHide] = useState()
    const [selectStatus, setSelectStatus] = useState()
    const [date, setDate] = useState('')
    const [status, setStatus] = useState('ALL')
    const [inputValue, setInputValue] = useState('')
    const [inputPartNumber, setInputPartNumber] = useState('')
    const [debounced, setDebounced] = useState(false)
    const LIMIT = 10
    // Convert to uppercase
    const stockType = stockTypeInput.toUpperCase();
    const receiptType = receiptTypeInput.toUpperCase();
    const { data, loadMore, onFetchQuery } = useGet('/api/v1/raw-material/receipts', {
        variables: {
            limit: LIMIT,
            status,
            type: receiptType,
            stockType: stockType,
            receiptNo: inputValue,
            date: date ? new Date(date).toISOString() : '',
            inputPartNumber: inputPartNumber ? inputPartNumber : undefined,
        }
    })

    const [loadingMore, setLoadingMore] = useState(false)
    const [HASMORE, setHasMore] = useState(true)

    const handleLoadMore = async () => {
        setLoadingMore(true)
        const filter = {
            type: receiptType,
            stockType: stockType,
            status,
            receiptNo: inputValue,
            date: date ? new Date(date).toISOString() : '',
            inputPartNumber: inputPartNumber ? inputPartNumber : undefined,
        }
        console.log(filter)
        await loadMore({
            pathOfLoadmoreableItem: 'result.items',
            limit: LIMIT,
            ...filter,
            onDone: ({ hasMore }) => {
                setHasMore(hasMore)
                setLoadingMore(false)
            }
        })
    }

    const [sentryRef] = useInfiniteScroll({
        loading: loadingMore,
        hasNextPage: HASMORE,
        onLoadMore: handleLoadMore
    })

    const onSearch = ({ filter }) => {
        onFetchQuery('/api/v1/raw-material/receipts', {
            variables: {
                limit: LIMIT,
                ...filter
            }
        })
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
        setDebounced(true)
    }

    const handleInputPartNumberChange = (event) => {
        setInputPartNumber(event.target.value)
        setDebounced(true)
    }

    // useEffect(() => {
    //     if (!debounced) return
    //     const delayInputTimeoutId = setTimeout(() => {
    //         const filter = {
    //             type: receiptType,
    //             stockType: stockType,
    //             status,
    //             receiptNo: inputValue,
    //             date: date ? new Date(date).toISOString() : '',
    //             inputPartNumber: inputPartNumber ? inputPartNumber : undefined,
    //         }
    //         onSearch({ filter })
    //     }, 1000)
    //     return () => clearTimeout(delayInputTimeoutId)
    // }, [inputValue])

    useEffect(() => {
        const filter = {
            type: receiptType,
            stockType: stockType,
            status,
            receiptNo: inputValue,
            date: date ? new Date(date).toISOString() : '',
            inputPartNumber: inputPartNumber ? inputPartNumber : undefined,
        }
        onFetchQuery('/api/v1/raw-material/receipts', {
            variables: {
                limit: LIMIT,
                ...filter
            }
        })
    }, [receiptType, stockType])

    const onSelect = async (e) => {
        setStatus(e.target.value)
        const filter = {
            type: receiptType,
            stockType: stockType,
            status: e.target.value,
            receiptNo: inputValue,
            date: date ? new Date(date).toISOString() : '',
            inputPartNumber: inputPartNumber ? inputPartNumber : undefined,
        }
        onSearch({ filter })
    }

    const onSetDate = async (e) => {
        setDate(e.target.value)
        const filter = {
            type: receiptType,
            stockType: stockType,
            status,
            receiptNo: inputValue,
            date: new Date(e.target.value).toISOString(),
            inputPartNumber: inputPartNumber ? inputPartNumber : undefined,
        }
        onSearch({ filter })
    }

    const handleClick = ({ onClick }) => {
        if (window.getSelection().toString()) {
            return
        }
        if (onClick) {
            onClick()
        }
    }

    const handleEnter = (event) => {
        const filter = {
            type: receiptType,
            stockType: stockType,
            status,
            receiptNo: inputValue,
            date: date,
            inputPartNumber: inputPartNumber ? inputPartNumber : undefined,
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
                    <SubHeader data={stockType+receiptType} {...props} />
                </div>
                <div className="container">
                    <div className="table-receipt" style={{ marginTop: '60px' }}>
                        <div className="header-table">
                            <div className="input_wrap" style={{ width: '325px' }}>
                                <input
                                    type="date"
                                    required
                                    value={date}
                                    onChange={onSetDate}
                                />
                                <label>{'Date'}</label>
                            </div>
                            <div className="select_wrap" style={{ width: '180px', margin: '0px 16px' }}>
                                <select
                                    required
                                    value={status}
                                    onChange={onSelect}
                                >
                                    <option className="placeholder" default disabled value="">{''}</option>
                                    <option value={'ALL'}>{'All'}</option>
                                    <option value={'COMPLETE'}>{'Complete'}</option>
                                    <option value={'NOT_COMPLETE'}>{'Not Complete'}</option>
                                    <option value={'DRAFT'}>{'Draft'}</option>
                                </select>
                                <label>{'Status'}</label>
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
                                    onKeyUp={handleEnter}
                                />
                                <label>{'Search receipt no'}</label>
                            </div>
                            <div
                                className="input_wrap has-icon-left"
                                style={{ width: "343px"}}
                            >
                                <div className="icon-left">
                                <img src={IcoSearch} />
                                </div>
                                <input
                                type="text"
                                required
                                value={inputPartNumber}
                                // ref={reference}
                                onChange={handleInputPartNumberChange}
                                onKeyUp={handleEnter}
                                />
                                <label>{"Part No."}</label>
                            </div>
                            <div
                                    className="btn-create-file"
                                    onClick={() => { props.history.push('/receipt/'+stockType+'/'+receiptType) }}
                                >
                                <img src={IcoCreateFile} />
                                {receiptType === 'INBOUND' ? <p>Create new {stockType} receipt</p> : <p>Create new pickup</p> }
                            </div>
                        </div>
                        <div className="container-order-list">
                            <div className="container-menu-list">
                                {map(get(data, 'result.items', []), (item) => {
                                    const isSelect = get(item, 'receiptNo', '') === (selected || get(data, 'result.items[0].receiptNo', ''))
                                    return (
                                        <div
                                            key={item.id}
                                            className={`menu-item ${isSelect ? 'is-selected' : ''}`}
                                            onClick={() => {
                                                handleClick({
                                                    onClick: () => {
                                                        setSelected(get(item, 'receiptNo', ''))
                                                        setHide(get(item, 'isHide', ''))
                                                        setSelectStatus(get(item, 'status', ''))
                                                    }
                                                })
                                            }}
                                        >
                                            <div className="title-menu-item">
                                                <img src={IcoDoc} />
                                                <p>{get(item, 'receiptNo', '')}</p>
                                            </div>
                                            <span>
                                                {`${moment(Number(new Date(get(item, 'createdAt', '')).getTime())).format('DD-MM-YYYY HH:mm')}`}
                                            </span>
                                            {get(item, 'status', '') === 'COMPLETE' && (
                                                <div className="status complete">
                                                    {'COMPLETE'}
                                                </div>
                                            )}
                                            {get(item, 'status', '') === 'NOT_COMPLETE' && (
                                                <div className="status fail">
                                                    {'NOT COMPLETE'}
                                                </div>
                                            )}
                                            {get(item, 'status', '') === 'DRAFT' && (
                                                <div className="status draft">
                                                    {'DRAFT'}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                                {HASMORE && get(data, 'result.items', []).length >= LIMIT && (
                                    <div className="loading-container" ref={sentryRef}>
                                        <LoadingSpinner />
                                    </div>
                                )}
                            </div>
                            <div className="container-main-list">
                                {!isEmpty(get(data, 'result.items', [])) && (
                                    <div className="receipt-no-wrapper">
                                        <img src={IcoMiniDoc} />
                                        <p>{selected || get(data, 'result.items[0].receiptNo', '')}</p>
                                        <p>{hide === undefined ? get(data, 'result.items[0].isHide', '') === true ? "_Hide" : "" : hide === true ?  "_Hide" : ""}</p>
                                    </div>
                                )}
                                <ReceiptListContainer
                                    hide={!isEmpty(get(data, 'result.items', [])) ? hide === undefined ? get(data, 'result.items[0].isHide', '') : hide : 0}
                                    key={!isEmpty(get(data, 'result.items', [])) ? selected || get(data, 'result.items[0].receiptNo', '') : 0}
                                    receiptNo={!isEmpty(get(data, 'result.items', [])) ? selected || get(data, 'result.items[0].receiptNo', '') : ''}
                                    status={!isEmpty(get(data, 'result.items', [])) ? selectStatus || get(data, 'result.items[0].status', '') : ''}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AppViewWrapperPure>
    )
}

export default withRouter(ReceiptListView)
