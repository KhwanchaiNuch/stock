import React, { useEffect, useState } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import IcoExport from 'assets/images/ico-export.png'
import IcoEditBlue from 'assets/images/ico-edit-b.png'
import IcoEditGray from 'assets/images/ico-edit-g.png'
import { map, get, reject, isEmpty } from 'lodash'
import Pagination from 'components/pagination'
import { useStoreActions } from 'easy-peasy'
import { withRouter } from 'react-router-dom'
import useGet from '../hooks/useGet'
import usePostDownloadFile from '../hooks/usePostDownloadFile'
import delay from 'utils/delay'
import IcoSearch from 'assets/images/ico-search-input-b.png'

const HistoryView = (props) => {
    const LIMIT = 10
    const { openModal } = useStoreActions(actions => actions.modal)
    const [currentPage, setCurrentPage] = useState(0)
    const [limit, setLimit] = useState(LIMIT)
    const [offset, setOffset] = useState(0)
    const [loadinPrint, setLoadingPrint] = useState(0)
    const showNotification = useStoreActions((actions) => actions.notification.showNotification)
    const [operationType, setOperationType] = useState('ALL')
    const [inputPartName, setInputPartName] = useState('')


    const [inputValue, setInputValue] = useState()
    const [debounced, setDebounced] = useState(false)

    const onPageChange = page => {
        const selected = page-1
        const offsetTemp = Math.ceil(selected * limit)
        setOffset(offsetTemp)
        const filter = {
          type: operationType? operationType : undefined,
          partNo: inputValue? inputValue : undefined,
          inputPartName: inputPartName? inputPartName: undefined,
        }
        onFetchQuery('/api/v1/history', {
            variables: {
                limit: limit,
                offset: offsetTemp,
                ...filter
            }
        })
        setCurrentPage(selected)
    }

    const { data, loading, onFetchQuery } = useGet('/api/v1/history', {
        variables: {
            limit: limit,
            offset: offset
        }
    })

    const total = get(data, 'result.total', 0)
    const pageCount = Math.ceil(total / limit)

    const onSetLimit = (e) => {
      setLimit(Number(e.target.value))
      const filter = {
        type: operationType? operationType : undefined,
        partNo: inputValue? inputValue : undefined,
        inputPartName: inputPartName? inputPartName: undefined,
      }
      onFetchQuery('/api/v1/history', {
        variables: {
            limit: e.target.value,
            offset: 0,
            ...filter
        }
      })
    }


    const handleInputChange = (event) => {
      setInputValue(event.target.value)
      setDebounced(true)
    }


    useEffect(() => {
      if (!debounced) return
      const delayInputTimeoutId = setTimeout(() => {
          const filter = {
            type: operationType? operationType : undefined,
            partNo: inputValue? inputValue : undefined,
            inputPartName: inputPartName? inputPartName: undefined,
          }
          onSearch({ filter })
      }, 1000)
      return () => clearTimeout(delayInputTimeoutId)
    }, [inputValue, 1000])


    const onSearch = ({ filter }) => {
      onFetchQuery('/api/v1/history', {
        variables: {
            limit: LIMIT,
            ...filter
        }
      })
    }

    const onSelectType = async (e) => {
      setOperationType(e.target.value)
      const filter = {
        type: e.target.value,
        partNo: inputValue? inputValue : undefined,
        inputPartName: inputPartName? inputPartName: undefined,
      }
      onSearch({filter})
    }


    const [selected, setSelected] = useState([])

    const { onPost: onPostExcel } = usePostDownloadFile('/api/v1/history/generate-excel')

    const onPrintExcel = () => {
      const variables = {
        limit: 99,
        offset: 0,
        type: operationType,
        partNo: inputValue,
        inputPartName: inputPartName,
      }
      if (loadinPrint) return;
      setLoadingPrint(true);
      onPostExcel({
        variables,
        onDone: async (res) => {
          if (res) {
            // create file link in browser's memory
            const href = URL.createObjectURL(res);
            // create "a" HTML element with href to file & click
            const link = document.createElement("a");
            const date = new Date()
            const futureDate = date.getDate()
            date.setDate(futureDate)
            const defaultValue = date.toLocaleDateString('en-CA')
            link.href = href;
            link.setAttribute("download", "history_"+defaultValue+".xlsx"); //or any other extension
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
            // location.reload();
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
        type: operationType? operationType : undefined,
        partNo: inputValue? inputValue : undefined,
        inputPartName: inputPartName? inputPartName: undefined,
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
              <p className="is-active">History</p>
            </div>
          </div>
          <div className="container">
            <div style={{ minHeight: "580px" }}>
              <div className="table-receipt" style={{ marginTop: "60px" }}>
                <div className="header-table">
                  <div
                    className="select_wrap"
                    style={{ width: "180px", margin: "0px 16px" }}
                  >
                    <select required value={operationType} onChange={onSelectType}>
                      <option className="placeholder" default disabled value="">
                        {""}
                      </option>
                      <option value={'ALL'}>{'All'}</option>
                      <option value={"Inbound"}>{"Inbound"}</option>
                      <option value={"Outbound"}>{"Outbound"}</option>
                      <option value={"Move"}>{"Move"}</option>
                      <option value={"Inventory"}>{"Inventory"}</option>
                    </select>
                    <label>{"Operation"}</label>
                  </div>
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
                      onChange={handleInputChange}
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
                      value={inputPartName}
                      // ref={reference}
                      onChange={handleInputPartNameChange}
                      onKeyUp={handleEnter}
                    />
                    <label>{"Search Part Name"}</label>
                  </div>
                </div>
                {!loading && (
                  <>
                    <table>
                      <tbody>
                        <tr>
                          <th>
                            <p>{"Date Time"}</p>
                          </th>
                          <th>
                            <p>{"Operation"}</p>
                          </th>
                          <th className="center">
                            <p>{"Operator"}</p>
                          </th>
                          <th className="center">
                            <p>{"Part No."}</p>
                          </th>
                          <th className="center">
                            <p>{"Name"}</p>
                          </th>
                          <th className="center">
                            <p>{"Area No."}</p>
                          </th>
                          <th className="center">
                            <p>{"Amount"}</p>
                          </th>
                          <th className="center">
                            <p>{"Stock"}</p>
                          </th>
                          <th className="center">
                            <p>{"Note"}</p>
                          </th>
                        </tr>
                        {map(get(data, "result.items", []), (item) => {
                          const isSelect = selected.id === get(item, "id", "");
                          const onSelect = () => {
                            if (isSelect) {
                              setSelected(reject(selected));
                            } else {
                              setSelected({
                                id: get(item, "id", ""),
                                note: get(item, "note", ""),
                              });
                            }
                          };
                          const dateString = get(item, "createdAt", "");
                          const dateObject = new Date(dateString);
                          const year = dateObject.getFullYear();
                          const month = String(
                            dateObject.getMonth() + 1
                          ).padStart(2, "0"); // Months are zero-based
                          const day = String(dateObject.getDate()).padStart(
                            2,
                            "0"
                          );
                          const hours = String(dateObject.getHours()).padStart(
                            2,
                            "0"
                          );
                          const minutes = String(
                            dateObject.getMinutes()
                          ).padStart(2, "0");
                          const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}`;
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
                                <p>{formattedDate}</p>
                              </td>
                              <td
                                onClick={() => {
                                  onSelect();
                                }}
                              >
                                <p>{get(item, "type", "")}</p>
                              </td>
                              <td
                                className="center"
                                onClick={() => {
                                  onSelect();
                                }}
                              >
                                <p>{get(item, "operator.firstName", "")}</p>
                              </td>
                              <td
                                className="center"
                                onClick={() => {
                                  onSelect();
                                }}
                              >
                                <p style={{ whiteSpace: item.productId.partNo.length < 30 ? "nowrap" : "normal" }}>{get(item, "productId.partNo", "")}</p>
                              </td>
                              <td
                                className="center"
                                onClick={() => {
                                  onSelect();
                                }}
                              >
                                <p>{get(item, "productId.partName", "")}</p>
                              </td>
                              <td
                                className="center"
                                onClick={() => {
                                  onSelect();
                                }}
                              >
                                <p>{get(item, "area.areaNo", "")}</p>
                              </td>
                              <td
                                className="center"
                                onClick={() => {
                                  onSelect();
                                }}
                              >
                                <p>{get(item, "amount", "")}</p>
                              </td>
                              <td
                                className="center"
                                onClick={() => {
                                  onSelect();
                                }}
                              >
                                <p>{get(item, "stock", "")}</p>
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
                  </>
                )}
              </div>
            </div>
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
                  <div className="btn-menu-wrapper">
                    <div
                      className={`btn-menu no-bg ${
                        isEmpty(selected) ? "disabled" : ""
                      }`}
                      onClick={() => {
                        if (isEmpty(selected)) return;
                        openModal({
                          type: "EDIT_HISTORY_NOTE",
                          data: {
                            id: selected.id,
                            note: selected.note,
                          },
                        });
                      }}
                    >
                      <img
                        src={isEmpty(selected) ? IcoEditGray : IcoEditBlue}
                      />
                      Edit Note
                    </div>
                    <div className="btn-menu" onClick={onPrintExcel}>
                      <img src={IcoExport} />
                      Export CSV
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </AppViewWrapperPure>
    );
}

export default withRouter(HistoryView)
