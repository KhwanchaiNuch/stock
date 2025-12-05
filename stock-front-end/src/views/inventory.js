import React, { useEffect, useState } from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import IcoEditInventory from 'assets/images/ico-edit-inventory.png'
import IcoExport from 'assets/images/ico-export.png'
import { map, get } from 'lodash'
import Pagination from 'components/pagination'
import { useStoreActions } from 'easy-peasy'
import { withRouter } from 'react-router-dom'
import useGet from '../hooks/useGet'
import usePostDownloadFile from '../hooks/usePostDownloadFile'
import IcoSearch from 'assets/images/ico-search-input-b.png'
import delay from 'utils/delay'

const InventoryView = (props) => {
    const LIMIT = 10
    const { openModal } = useStoreActions(actions => actions.modal)
    const [currentPage, setCurrentPage] = useState(0)
    const [limit, setLimit] = useState(LIMIT)
    const [offset, setOffset] = useState(0)
    const [debounced, setDebounced] = useState(false)
    const [inputValue, setInputValue] = useState('ALL')
    const [inputPartNumber, setInputPartNumber] = useState('')
    const [inputPartName, setInputPartName] = useState('')
    const openToast = useStoreActions((actions) => actions.toast.openToast)
    const date = new Date()
    const defaultValue = date.toLocaleDateString('en-CA')

    const [inputDate, setInputDate] = useState(defaultValue)
    const [loadinPrint, setLoadingPrint] = useState(false)
    const showNotification = useStoreActions((actions) => actions.notification.showNotification)

    const futureDate = date.getDate()
    date.setDate(futureDate)


    const { data, onFetchQuery } = useGet('/api/v1/inventory', {
        variables: {
            limit: limit,
            offset: offset,
            input: inputValue? inputValue: undefined,
            inputDate: inputDate? inputDate: undefined,
        }
    })

    const onPageChange = page => {
      const selected = page - 1
      setCurrentPage(selected)
      const offset = Math.ceil(selected * limit)
      setOffset(offset)
      const filter = {
        input: inputValue,
        inputDate: inputDate? inputDate: undefined,
        inputPartNumber: inputPartNumber? inputPartNumber: undefined,
        inputPartName: inputPartName? inputPartName: undefined,
      }
      onFetchQuery("/api/v1/inventory", {
        variables: {
          limit: limit,
          offset: offset,
          ...filter,
        },
      });
    }

    const onSearch = ({ filter }) => {
        setOffset(0)
        onFetchQuery('/api/v1/inventory', {
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
                input: inputValue,
                inputDate: inputDate? inputDate: undefined,
                inputPartNumber: inputPartNumber? inputPartNumber: undefined,
                inputPartName: inputPartName? inputPartName: undefined,
            }
            onSearch({ filter })
        },0)
        return () => clearTimeout(delayInputTimeoutId)
    }, [inputValue,inputDate])


    const total = get(data, 'result.total', 0)
    const pageCount = Math.ceil(total / limit)

    const onSetLimit = (e) => {
        setLimit(Number(e.target.value))
        const filter = {
          input: inputValue,
          inputDate: inputDate? inputDate: undefined,
          inputPartNumber: inputPartNumber? inputPartNumber: undefined,
          inputPartName: inputPartName? inputPartName: undefined,
        }
        onFetchQuery('/api/v1/inventory', {
            variables: {
                limit: Number(e.target.value),
                offset: offset,
                ...filter,
            }
        })
    }

    const handleStatus = (event) => {
        setInputValue(event.target.value)
        setDebounced(true)
    }

    const handleInputChange = (event) => {
      setInputPartNumber(event.target.value)
      setDebounced(true)
    }
    const handleInputPartNameChange = (event) => {
      setInputPartName(event.target.value)
      setDebounced(true)
    }

    const { onPost: onPostExcel } = usePostDownloadFile('/api/v1/inventory/generate-excel')

    const onPrintExcel = () => {
      if (loadinPrint) return;
      setLoadingPrint(true);
      onPostExcel({
          variables: {
            input: inputValue,
            inputDate: inputDate? inputDate: undefined,
            inputPartNumber: inputPartNumber? inputPartNumber: undefined,
            inputPartName: inputPartName? inputPartName: undefined,
            offset: 0,
            limit: 99,
          },
          onDone: async (res) => {
            if (res) {
              // create file link in browser's memory
              const href = URL.createObjectURL(res);
              // create "a" HTML element with href to file & click
              const link = document.createElement("a");
              link.href = href;
              link.setAttribute("download", "inventory_"+defaultValue+".xlsx"); //or any other extension
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

    const handleEnter = (event) => {
      const filter = {
        input: inputValue,
        inputDate: inputDate? inputDate: undefined,
        inputPartNumber: inputPartNumber? inputPartNumber: undefined,
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
              <p className="is-active">Inventory</p>
            </div>
          </div>
          <div className="container">
            {/* <div
                        className="btn-start"
                        onClick={() => {
                            openModal({
                                type: 'START_INVENTORY',
                                data: {
                                }
                            })
                        }}
                    >
                        <img src={IcoStart} />
                        <p>Start</p>
                    </div> */}
            <div style={{ minHeight: "580px" }}>
              <div className="table-receipt">
                <div className="header-table">
                  <div className="input_wrap" style={{ width: "325px" }}>
                    <input
                      type="date"
                      required
                      // disabled
                      value={inputDate}
                      onChange={e => {
                        console.log(e.target.value);
                        setDebounced(true)
                        setInputDate(e.target.value)
                      }}
                    />
                    <label>{"Date"}</label>
                    {/* <div
                      className="dim-input"
                      style={{ width: "100%", height: "60px" }}
                    /> */}
                  </div>
                  <div
                    className="select_wrap"
                    style={{ width: "180px", margin: "0px 16px" }}
                  >
                    <select required value={inputValue} onChange={handleStatus}>
                      <option className="placeholder" disabled value="">
                        {""}
                      </option>
                      <option default value={"ALL"}>
                        {"All"}
                      </option>
                      <option value={"DIFFERENCE"}>{"Difference"}</option>
                      <option value={"BALANCE"}>{"Balance"}</option>
                    </select>
                    <label>{"Status"}</label>
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
                      value={inputPartNumber}
                      // ref={reference}
                      onChange={handleInputChange}
                      onKeyUp={handleEnter}
                    />
                    <label>{"Search Part No."}</label>
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
                      value={inputPartName}
                      // ref={reference}
                      onChange={handleInputPartNameChange}
                      onKeyUp={handleEnter}
                    />
                    <label>{"Search Part Name"}</label>
                  </div>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <p>{"Receipt No."}</p>
                      </th>
                      <th style={{ width: "100px"}}>
                        <p>{"Part No."}</p>
                      </th>
                      <th>
                        <p>{"Part Name"}</p>
                      </th>
                      <th className="center">
                        <p>{"Lot No."}</p>
                      </th>
                      <th className="center">
                        <p>{"Area"}</p>
                      </th>
                      <th className="center">
                        <p>{"Inventory"}</p>
                      </th>
                      <th className="center">
                        <p style={{whiteSpace: "nowrap"}}>{"Stock (In LOT)"}</p>
                      </th>
                      <th className="center">
                        <p>{"Difference"}</p>
                      </th>
                      <th className="center">
                        <p>{"Date Time"}</p>
                      </th>
                      <th className="center">
                        <p>{"Operator"}</p>
                      </th>
                      <th className="center" />
                    </tr>
                    {map(get(data, "result.items", []), (item) => {
                      const dateString = get(item, "createdAt", "");
                      const dateObject = new Date(dateString);
                      const year = dateObject.getFullYear();
                      const month = String(dateObject.getMonth() + 1).padStart(
                        2,
                        "0"
                      ); // Months are zero-based
                      const day = String(dateObject.getDate()).padStart(2, "0");
                      const hours = String(dateObject.getHours()).padStart(
                        2,
                        "0"
                      );
                      const minutes = String(dateObject.getMinutes()).padStart(
                        2,
                        "0"
                      );
                      const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}`;
                      return (
                        <tr
                          key={item.id}
                          className={`${item.isDiff ? "is-require" : ""}`}
                        >
                          <td>
                            <p>{item.receiptNo}</p>
                          </td>
                          <td>
                            <p style={{ whiteSpace: item.partNo.length < 30 ? "nowrap" : "normal" }}>{item.partNo}</p>
                          </td>
                          <td>
                            <p>{item.partName}</p>
                          </td>
                          <td className="center">
                            <p>{item.lotNo}</p>
                          </td>
                          <td className="center">
                            <p>{item.areaNo}</p>
                          </td>
                          <td className="center">
                            <p>{item.inventoryCount}</p>
                          </td>
                          <td className="center">
                            <p>{item.stock}</p>
                          </td>
                          <td className="center">
                            <p>{item.diffValue}</p>
                          </td>
                          <td className="center">
                            <p>{formattedDate}</p>
                          </td>
                          <td className="center">
                            <p>{item.operator}</p>
                          </td>
                          {item.isDiff ? (
                            <td
                              className="center"
                              onClick={() => {
                                if (new Date(dateString).toDateString() === new Date().toDateString()) {
                                  openModal({
                                    type: "ADJUST_INVENTORY",
                                    data: {
                                      item,
                                    },
                                  });
                                } else {
                                  openToast({
                                    message: "Cannot adjust in differance page.\nPlease add inventory in handheld.",
                                    timeout: 2500
                                  })
                                }
                              }}
                            >
                              <img
                                src={IcoEditInventory}
                                style={{ width: "17px", objectFit: "contain" }}
                              />
                            </td>
                          ) : (
                            <td className="center">Balance</td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
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
            <div className="menu-bar-footer">
              <div className="container">
                <div className="btn-menu-wrapper">
                  <div className="btn-menu" onClick={onPrintExcel}>
                    <img src={IcoExport} />
                    Export CSV
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </AppViewWrapperPure>
    );
}

export default withRouter(InventoryView)
