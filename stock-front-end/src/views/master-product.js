import React, { useState } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import IcoCreateFile from 'assets/images/ico-create-file.png'
import IcoAddReceipt from 'assets/images/ico-add-receipt.png'
import IcoPlus from 'assets/images/ico-plus.png'
import { map, some, get, reject, isEmpty } from 'lodash'
import Pagination from 'components/pagination'
import { useStoreActions } from 'easy-peasy'
import useDetectShift from 'hooks/useDetectShift'
import usePermission from 'hooks/usePermission'
import { withRouter } from 'react-router-dom'
import useGet from 'hooks/useGet'
import useDelete from 'hooks/useDelete'
import IcoEditBlue from 'assets/images/ico-edit-b.png'
import IcoEditGray from 'assets/images/ico-edit-g.png'
import IcoSearch from 'assets/images/ico-search-input-b.png'

const MasterProductView = (props) => {
    const { isAllow } = usePermission()
    const { openModal } = useStoreActions(actions => actions.modal)
    const openToast = useStoreActions((actions) => actions.toast.openToast)
    const showNotification = useStoreActions((actions) => actions.notification.showNotification)
    const { shiftHeld } = useDetectShift()
    const [currentPage, setCurrentPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [offset, setOffset] = useState(0)
    const [inputValue, setInputValue] = useState()
    const [inputSizeValue, setInputSizeValue] = useState()
    const [debounced, setDebounced] = useState(false)

    const { data, loading, onFetchQuery, refetch } = useGet('/api/v1/product', {
        variables: {
            limit: limit,
            offset: offset
        }
    })

    const onPageChange = async (page) => {
        const selected = page - 1
        setCurrentPage(selected)
        const offset = Math.ceil(selected * limit)
        setOffset(offset)
        const filter = {
          partNo: inputValue? inputValue : undefined,
          size: inputSizeValue? inputSizeValue : undefined,
        };
        onFetchQuery('/api/v1/product', {
            variables: {
                limit: limit,
                offset: offset,
                ...filter
            }
        })
    }
    const total = get(data, 'result.total', 0)
    const pageCount = Math.ceil(total / limit)

    const onSetLimit = async (e) => {
        setLimit(Number(e.target.value))
        const filter = {
          partNo: inputValue? inputValue : undefined,
          size: inputSizeValue? inputSizeValue : undefined,
        };
        onFetchQuery('/api/v1/product', {
            variables: {
                limit: Number(e.target.value),
                offset: offset,
                ...filter
            }
        })
    }


    // useEffect(() => {
    //     if (!debounced) return
    //     const delayInputTimeoutId = setTimeout(() => {
    //         const filter = {
    //             partNo: inputValue,
    //         }
    //         onSearch({ filter })
    //     }, 1000)
    //     return () => clearTimeout(delayInputTimeoutId)
    //   }, [inputValue, 1000])

      const onSearch = ({ filter }) => {
        onFetchQuery('/api/v1/product', {
          variables: {
              limit: 10,
              ...filter
          }
        })
      }

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
        setDebounced(true)
    }

    const handleInputSizeChange = (event) => {
      setInputSizeValue(event.target.value)
      setDebounced(true)
  }

    const handleTest = (event) => {
      const filter = {
        partNo: inputValue? inputValue : undefined,
        size: inputSizeValue? inputSizeValue : undefined,
      };
      if (event.key === "Enter" && debounced) {
        setDebounced(false)
        onSearch({ filter });
      }
    };

    const [selected, setSelected] = useState([])

    const { onDelete } = useDelete('/api/v1/product')

    // const onDeleteFn = async () => {
    //     await resolveLoop(selected, async (item, index, resolve, reject) => {
    //         try {
    //             if (!item.id) {
    //                 return resolve()
    //             }
    //             onDelete({
    //                 variables: {
    //                     id: get(item, 'id', '')
    //                 },
    //                 onDone: (res) => {
    //                 },
    //                 onError: (e) => {
    //                     console.log('onError ==>', e)
    //                     openToast({
    //                         message: get(e, 'response.data.message', ''),
    //                         timeout: 2500
    //                     })
    //                 }
    //             })
    //             if ((selected.length - 1) === index) {
    //                 setSelected([])
    //                 showNotification({
    //                     props: {
    //                         type: 'success',
    //                         title: 'Delete product successfully',
    //                         notAutoClose: false,
    //                         hasCloseBtn: false
    //                     }
    //                 })
    //                 await delay(1500)
    //                 refetch()
    //             }
    //             return resolve()
    //         } catch (err) {
    //             return reject(err)
    //         }
    //     })
    // }

    return (
      <AppViewWrapperPure page="content">
        <main className="container-receipt">
          <div className="menu-top-bar">
            <div className="container">
              <p className="is-active">Product</p>
              <p
                onClick={() => {
                  props.history.push("/master-operater");
                }}
              >
                Operator
              </p>
              <p
                onClick={() => {
                  props.history.push("/master-area");
                }}
              >
                Area
              </p>
              <p
                onClick={() => {
                  props.history.push("/master-customer");
                }}
              >
                Customer
              </p>
              <p
                onClick={() => {
                  props.history.push("/master-supplier");
                }}
              >
                Supplier
              </p>
            </div>
          </div>
          <div className="container">
            <div
              className="btn-create-file"
              onClick={() => {
                if (!isAllow) return;
                openModal({
                  type: "ADD_MASTER_PRODUCT",
                });
              }}
            >
              <img src={IcoCreateFile} />
              <p>Create new Product</p>
            </div>
            {!loading && (
              <>
                {!isEmpty(get(data, "result.items", [])) ? (
                  <div style={{ minHeight: "580px" }}>
                    <div className="table-receipt">
                      <div className="header-table">
                        <div
                          className="input_wrap has-icon-left"
                          style={{ width: "343px" ,marginRight: '16px'}}
                        >
                          <div className="icon-left">
                            <img src={IcoSearch} />
                          </div>
                          <input
                            type="text"
                            required
                            value={inputValue}
                            // ref={reference}
                            onChange={handleInputChange}
                            onKeyUp={handleTest}
                          />
                          <label>{"Search Part No. (press Enter)"}</label>
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
                            value={inputSizeValue}
                            // ref={reference}
                            onChange={handleInputSizeChange}
                            onKeyUp={handleTest}
                          />
                          <label>{"Search Size (press Enter)"}</label>
                        </div>
                        <span>
                          {
                            "You can use Shift or Ctrl key to select multiple records."
                          }
                        </span>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <p>{"Part No."}</p>
                            </th>
                            <th>
                              <p>{"Part Name"}</p>
                            </th>
                            <th>
                              <p>{"Spec"}</p>
                            </th>
                            <th>
                              <p>{"Size"}</p>
                            </th>
                            <th className="center">
                              <p>{"Minimum Stock"}</p>
                            </th>
                            <th className="center">
                              <p>{"Note"}</p>
                            </th>
                          </tr>
                          {map(get(data, "result.items", []), (item) => {
                            const isSelect = some(
                              selected,
                              (v) => get(v, "id", "") === get(item, "id", "")
                            );
                            const onSelect = () => {
                              if (isSelect) {
                                setSelected(
                                  reject(
                                    selected,
                                    (v) =>
                                      get(v, "id", "") === get(item, "id", "")
                                  )
                                );
                              } else {
                                if (shiftHeld) {
                                  setSelected([
                                    ...selected,
                                    { id: get(item, "id", ""), item: item },
                                  ]);
                                  return;
                                }
                                setSelected([
                                  { id: get(item, "id", ""), item: item },
                                ]);
                              }
                            };
                            return (
                              <tr
                                key={item.id}
                                className={`${isSelect ? "is-select" : ""}`}
                              >
                                <td
                                  onClick={() => {
                                    onSelect();
                                  }}
                                >
                                  <p>{get(item, "partNo", "")}</p>
                                </td>
                                <td
                                  onClick={() => {
                                    onSelect();
                                  }}
                                >
                                  <p
                                    style={{
                                      color:
                                        item &&
                                        item.partName &&
                                        item.partName.toLowerCase().includes("cancel")
                                          ? "red"
                                          : "black",
                                    }}
                                  >
                                    {get(item, "partName", "")}
                                  </p>
                                </td>

                                <td
                                  onClick={() => {
                                    onSelect();
                                  }}
                                >
                                  <p>{get(item, "spec", "") || "-"}</p>
                                </td>
                                <td
                                  onClick={() => {
                                    onSelect();
                                  }}
                                >
                                  <p>{get(item, "size", "") || "-"}</p>
                                </td>

                                <td
                                  className="center"
                                  onClick={() => {
                                    onSelect();
                                  }}
                                >
                                  <p>{get(item, "minimumStock", 0)}</p>
                                </td>
                                <td
                                  className="center"
                                  onClick={() => {
                                    onSelect();
                                  }}
                                >
                                  <p>{get(item, "note", "") || "-"}</p>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="table-receipt">
                      <div className="header-table">
                        <div
                          className="input_wrap has-icon-left"
                          style={{ width: "343px" ,marginRight: '16px'}}
                        >
                          <div className="icon-left">
                            <img src={IcoSearch} />
                          </div>
                          <input
                            type="text"
                            required
                            value={inputValue}
                            // ref={reference}
                            onChange={handleInputChange}
                            onKeyUp={handleTest}
                          />
                          <label>{"Search Part No."}</label>
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
                            value={inputSizeValue}
                            // ref={reference}
                            onChange={handleInputSizeChange}
                            onKeyUp={handleTest}
                          />
                          <label>{"Search Size"}</label>
                        </div>
                        <span>{'Not found Part No. or Size please create below.'}</span>
                      </div>
                    </div>
                    <div className="empty-data-receit">
                      <img src={IcoAddReceipt} />
                      <div
                        className="btn-create"
                        onClick={() => {
                          if (!isAllow) return;
                          openModal({
                            type: "ADD_MASTER_PRODUCT",
                          });
                        }}
                      >
                        <img src={IcoPlus} />
                        <p>{"Create new Product"}</p>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
            {!(isEmpty(get(data, "result.items", [])) && currentPage === 1) && (
              <div className="menu-pagination-wrapper">
                <div className="page-limit-menu">
                  <p>{"Rows per page:"}</p>
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
            {!isEmpty(get(data, "result.items", [])) && (
              <div className="menu-bar-footer">
                <div className="container">
                  <p>
                    {
                      "Please use Shift or Ctrl key to select multiple records (Edit can select only 1)"
                    }
                  </p>
                  <div className="btn-menu-wrapper">
                    <div
                      className={`btn-menu no-bg ${
                        selected.length !== 1 ? "disabled" : ""
                      }`}
                      onClick={() => {
                        if (!isAllow) return;
                        if (selected.length !== 1) return;
                        console.log(selected[0].item);
                        openModal({
                          type: "EDIT_MASTER_PRODUCT",
                          data: {
                            input: selected[0].item,
                          },
                        });
                      }}
                    >
                      <img
                        src={selected.length !== 1 ? IcoEditGray : IcoEditBlue}
                      />
                      Edit
                    </div>
                    {/* <div
                                        className={`btn-menu no-bg ${isEmpty(selected) ? 'disabled' : ''}`}
                                        onClick={() => {
                                            if (!isAllow) return
                                            if (isEmpty(selected)) return
                                            onDeleteFn()
                                        }}
                                    >
                                        <img src={isEmpty(selected) ? IcoDeleteGray : IcoDeleteBlue} />
                                        Delete
                                    </div> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </AppViewWrapperPure>
    );
}

export default withRouter(MasterProductView)
