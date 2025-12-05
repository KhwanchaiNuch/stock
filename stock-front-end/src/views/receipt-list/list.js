import React, { useState, useEffect } from 'react'
import IcoPrint from 'assets/images/ico-print-table.png'
import IcoDot from 'assets/images/dot-b.png'
import IcoCheck from 'assets/images/ico-check.png'
import IcoEditBlue from 'assets/images/ico-edit-table.png'
import IcoDeleteBlue from 'assets/images/ico-delete-b.png'
import { map, get, isEmpty } from 'lodash'
import { useStoreActions } from 'easy-peasy'
import { withRouter } from 'react-router-dom'
import usePermission from 'hooks/usePermission'
import useGet from 'hooks/useGet'
import useDelete from 'hooks/useDelete'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import LoadingSpinner from 'components/loading'
import delay from 'utils/delay'
import moment from 'moment'
import 'moment/locale/th'
import usePostDownloadFile from '../../hooks/usePostDownloadFile'

var receiptNoInterval = null

const ReceiptListContainer = ({hide,key, receiptNo , status }) => {
    const { isAllow } = usePermission()
    const openToast = useStoreActions((actions) => actions.toast.openToast)
    const { openModal } = useStoreActions(actions => actions.modal)
    const showNotification = useStoreActions((actions) => actions.notification.showNotification)
    const [loadingPrint, setLoadingPrint] = useState(false)

    const LIMIT = 10
    const { data, onFetchQuery, loadMore } = useGet('/api/v1/raw-material/receipt', {
        variables: {
            limit: LIMIT,
            receiptNo
        },
        skip: true
    })

    useEffect(() => {
        if (receiptNo) {
            onFetchQuery('/api/v1/raw-material/receipt', {
                variables: {
                    limit: LIMIT,
                    receiptNo
                }
            })
        }
    }, [receiptNo])

    const [loadingMore, setLoadingMore] = useState(false)
    const [HASMORE, setHasMore] = useState(true)

    const handleLoadMore = async () => {
        setLoadingMore(true)
        await loadMore({
            pathOfLoadmoreableItem: 'result.receiptItem',
            limit: LIMIT,
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

    const { onDelete } = useDelete('/api/v1/raw-material/receipt-item', true)

    const onDeleteFn = async ({ receiptItemId, note }) => {
        onDelete({
            variables: {
                receiptItemId,
                receiptNo,
                note
            },
            onDone: async (res) => {
                if (get(res, 'statusCode', '') === 200) {
                    showNotification({
                        props: {
                            type: 'success',
                            title: 'Delete file successfully',
                            notAutoClose: false,
                            hasCloseBtn: false
                        }
                    })
                    await delay(500)
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

    const { onDelete: onDeleteAll } = useDelete('/api/v1/raw-material/receipt', true)

    const onDeleteAllFn = () => {
        onDeleteAll({
            variables: {
                receiptNo,
            },
            onDone: async (res) => {
                if (get(res, 'statusCode', '') === 200) {
                    showNotification({
                        props: {
                            type: 'success',
                            title: 'Delete receipt successfully',
                            notAutoClose: false,
                            hasCloseBtn: false
                        }
                    })
                    await delay(500)
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

    receiptNoInterval = receiptNo

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         onFetchQuery('/api/v1/raw-material/receipt', {
    //             variables: {
    //                 limit: LIMIT,
    //                 receiptNo: receiptNoInterval
    //             }
    //         })
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, []);

    if (isEmpty(receiptNo)) return null

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

    const { onDelete: onDeleteItem } = useDelete('/api/v1/raw-material/receipt-item-waiting', true)

    const onDeleteItemFn = async (id, receiptNo) => {
        onDeleteItem({
            variables: {
                receiptItemId: id,
                receiptNo: receiptNo
            },
            onDone: async (res) => {
                if (get(res, 'statusCode', '') === 200) {
                    showNotification({
                        props: {
                            type: 'success',
                            title: 'Delete successfully',
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

    return (
      <div className="container-list-order-view">
        <div className="table-receipt">
          <table>
            <tbody>
              <tr>
                <th style={{ width: "130px" }}>
                  <p>{"Part No."}</p>
                </th>
                <th style={{ width: "130px" }}>
                  <p>{"Part Name"}</p>
                </th>

                {get(data, "result.receipt.type") === "INBOUND" ? (
                  <>
                    <th className="center" style={{ width: "100px" }}>
                      <p>{"Supplier"}</p>
                    </th>
                    <th className="center" style={{ width: "200px" }}>
                      <p>{"Lot No."}</p>
                    </th>
                    <th className="center" style={{ width: "200px" }}>
                      <p>{"Invoice No."}</p>
                    </th>
                  </>
                ) : (
                  <th className="center" style={{ width: "200px" }}>
                    <p>{"Ship to"}</p>
                  </th>
                )}
                <th className="center" style={{ width: "100px" }}>
                  <p>{"Qty"}</p>
                </th>
                {get(data, "result.receipt.type") === "INBOUND" ? (
                  <th className="center" style={{ width: "120px" }}>
                    <p>{"Date"}</p>
                  </th>
                ) : (
                  ""
                )}
                <th className="center" style={{ width: "100px" }}>
                  <p>{"By"}</p>
                </th>
                {get(data, "result.receipt.type") === "INBOUND" ? (
                  <>
                    <th className="center" style={{ width: "100px" }}>
                      <p>{"Note"}</p>
                    </th>
                    <th className="center" style={{ width: "80px" }}></th>
                  </>
                ) : (
                  <th className="center" style={{ width: "80px" }}></th>
                )}
              </tr>
              {map(get(data, "result.receiptItem"), (item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <p>{get(item, "partNo", "")}</p>
                        {(get(item, "status", "") === "INBOUND") |
                        (get(item, "status", "") === "OUTBOUND") ? (
                          <img
                            src={IcoCheck}
                            style={{
                              width: "24px",
                              height: "24px",
                              marginLeft: "8px",
                            }}
                          />
                        ) : (
                          ""
                        )}
                        {/* {(get(item, 'status', '') === 'DRAFT' | get(item, 'status', '') === 'WAITING') ? 
                                                <img src={IcoDraft} style={{ width: '24px', height: '24px', marginLeft: '8px' }} /> : ''
                                            } */}
                      </div>
                    </td>
                    <td>
                      <p>{get(item, "partName", "")}</p>
                    </td>
                    {get(data, "result.receipt.type") === "INBOUND" ? (
                      <>
                        <td className="center">
                          <p>{get(item, "supplier", "")}</p>
                        </td>
                        <td className="center">
                          <p>{get(item, "lotNo", "")}</p>
                        </td>
                        <td className="center">
                          <p>{get(item, "invoiceNo", "")}</p>
                        </td>
                      </>
                    ) : (
                      <td className="center">
                        <p>{get(item, "customer", "")}</p>
                      </td>
                    )}
                    <td className="center">
                      <p>{get(item, "quantity", "")}</p>
                    </td>
                    {get(data, "result.receipt.type") === "INBOUND" ? (
                      <>
                        <td className="center">
                          <p>
                            {" "}
                            {`${moment(
                              Number(new Date(get(item, "date", "")).getTime())
                            ).format("DD-MM-YY")}`}
                          </p>
                        </td>
                        <td className="center">
                          <p>{get(item, "receivedBy", "")}</p>
                        </td>
                      </>
                    ) : (
                      <td className="center">
                        <p>{get(item, "createdBy", "")}</p>
                      </td>
                    )}
                    {get(data, "result.receipt.type") === "INBOUND" ? (
                      <>
                        <td className="center">
                          <p>{get(item, "note", "") || "-"}</p>
                        </td>
                        <td
                          className={`center d-flex justify-content-center align-items-center is-hover-show-list`}
                        >
                          <img
                            src={IcoDot}
                            style={{ width: "24px", height: "24px" }}
                          />
                          <div className="list-hover-wrapper">
                            <div
                              className="item-hover-list"
                              onClick={() => {
                                // if (isEmpty(selected) || selected.length !== 1) return;
                                openModal({
                                  type: "EDIT_RECEIPT_NOTE",
                                  data: {
                                    id: get(item, "id", ""),
                                    note: get(item, "note", ""),
                                    qty: get(item, "quantity", ""),
                                    status: get(item, "status", ""),
                                    receiptType: get(
                                      data,
                                      "result.receipt.type"
                                    ),
                                  },
                                });
                              }}
                            >
                              <img
                                src={IcoEditBlue}
                                style={{ width: "20px" }}
                              />
                              <p>Edit</p>
                            </div>
                            {item && item.status === "WAITING" && (
                              <>
                                <div
                                  className="item-hover-list"
                                  onClick={() => {
                                    onDeleteItemFn(
                                      get(item, "id", ""),
                                      get(data, "result.receipt").receiptNo
                                    );
                                  }}
                                >
                                  <img
                                    src={IcoDeleteBlue}
                                    style={{ width: "20px" }}
                                  />
                                  <p>delete</p>
                                </div>
                              </>
                            )}
                          </div>
                        </td>
                      </>
                    ) :(
                      <td
                        className={`center d-flex justify-content-center align-items-center is-hover-show-list`}
                      >
                        {item && item.status === "WAITING" && 
                        <><img
                          src={IcoDot}
                          style={{ width: "24px", height: "24px" }}
                        />
                        <div className="list-hover-wrapper">
                              <div
                                className="item-hover-list"
                                onClick={() => {
                                  onDeleteItemFn(
                                    get(item, "id", ""),
                                    get(data, "result.receipt").receiptNo
                                  );
                                }}
                              >
                                <img
                                  src={IcoDeleteBlue}
                                  style={{ width: "20px" }}
                                />
                                <p>delete</p>
                              </div>
                        </div>
                        </>}
                      </td>
                    )}
                  </tr>
                );
              })}
              {HASMORE && get(data, "result.receiptItem", []).length >= LIMIT && (
                <div className="loading-container" ref={sentryRef}>
                  <LoadingSpinner />
                </div>
              )}
            </tbody>
          </table>
        </div>
        {get(data, "result.receipt.type") === "INBOUND" ? (
          <div className="menu-bar-footer">
            <div className="container">
              <div className="btn-menu-wrapper">
                {data &&
                  data.result &&
                  data.result.receipt &&
                  data.result.receipt.status === "NOT_COMPLETE" && (
                    <div
                      className={`btn-menu no-bg ${
                        isEmpty( data.result.receipt.receiptNo) ? "disabled" : ""
                      }`}
                      onClick={() => {
                        openModal({
                          type: "CREATE_RECEIPT",
                          data: {
                            receiptNo: data.result.receipt.receiptNo,
                            stockType: data.result.receipt.stockType,
                            receiptType:  data.result.receipt.type,
                          },
                        });
                      }}
                    >
                      Add
                    </div>
                  )
                }
                {loadingPrint ? (
                  <LoadingSpinner />
                ) : (
                  <div
                    className={`btn-menu ${
                      isEmpty(receiptNo) ? "disabled" : ""
                    }`}
                    onClick={() => {
                      onPrinPdfs(receiptNo);
                    }}
                  >
                    Print
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="menu-bar-footer">
            <div className="container">
              <div className="btn-menu-wrapper">
                <div
                  className={`btn-menu no-bg ${
                    !isAllow ||
                    isEmpty(receiptNo) ||
                    status !== "NOT_COMPLETE" ||
                    get(data, "result.receiptItem", []).filter((map) => {
                      return map.status !== "WAITING";
                    }).length !== 0
                      ? "disabled"
                      : ""
                  }`}
                  onClick={() => {
                    if (
                      !isAllow ||
                      isEmpty(receiptNo) ||
                      status !== "NOT_COMPLETE" ||
                      get(data, "result.receiptItem", []).filter((map) => {
                        return map.status !== "WAITING";
                      }).length !== 0
                    )
                      return;
                    onDeleteAllFn();
                  }}
                >
                  Delete
                </div>
                {hide ? (
                  <div
                    className={`btn-menu no-bg ${
                      !isAllow ||
                      isEmpty(receiptNo) ||
                      status !== "NOT_COMPLETE"
                        ? "disabled"
                        : ""
                    }`}
                    onClick={() => {
                      if (
                        !isAllow ||
                        isEmpty(receiptNo) ||
                        status !== "NOT_COMPLETE"
                      )
                        return;
                      openModal({
                        type: "UNHIDE_RECEIPT",
                        data: {
                          receiptNo: receiptNo,
                        },
                      });
                    }}
                  >
                    Unhide
                  </div>
                ) : (
                  <div
                    className={`btn-menu no-bg ${
                      !isAllow ||
                      isEmpty(receiptNo) ||
                      status !== "NOT_COMPLETE"
                        ? "disabled"
                        : ""
                    }`}
                    onClick={() => {
                      if (
                        !isAllow ||
                        isEmpty(receiptNo) ||
                        status !== "NOT_COMPLETE"
                      )
                        return;
                      openModal({
                        type: "HIDE_RECEIPT",
                        data: {
                          receiptNo: receiptNo,
                        },
                      });
                    }}
                  >
                    Hide
                  </div>
                )}
                {data &&
                  data.result &&
                  data.result.receipt &&
                  data.result.receipt.status === "NOT_COMPLETE" && (
                    <div
                      className={`btn-menu no-bg ${
                        isEmpty( data.result.receipt.receiptNo) ? "disabled" : ""
                      }`}
                      onClick={() => {
                        openModal({
                          type: "CREATE_PICKUP",
                          data: {
                            receiptNo: data.result.receipt.receiptNo,
                            stockType: "PICKUP",
                            receiptType:  data.result.receipt.type,
                          },
                        });
                      }}
                    >
                      Add {data.result.receipt.stockType}
                    </div>
                  )
                }
                {loadingPrint ? (
                  <LoadingSpinner />
                ) : (
                  <div
                    className={`btn-menu ${
                      isEmpty(receiptNo) ? "disabled" : ""
                    }`}
                    onClick={() => {
                      onPrintExcel(receiptNo);
                    }}
                  >
                    Print
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default withRouter(ReceiptListContainer)
