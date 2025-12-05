import React, { useState, useRef, useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import AppViewWrapperPure from 'components/app-view-wrapper'
import { withRouter } from 'react-router-dom'
import { get, map, isEmpty } from 'lodash'
import styled from 'styled-components'
import { httpCommon } from '../../connectors/http-common'
import usePost from '../../hooks/usePost'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .header-mobile{
    display: flex;
  }
  .container-wrapper-section-form{
    width: 100%;
    padding: 16px;
    overflow: scroll;
    @media (min-width: 400px) {
      height: 568px;
    }
  }
  h3{
    color: #2B3D8F;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; 
    letter-spacing: 0.4px;
    margin-top: 15px;
    margin-bottom: 31px;
  }
  .button-wrapper{
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: #2BA6E1;
    height: 72px;
    width: 100%;
    padding: 16px 28px;
    z-index: 10;
    .btn-submit{
      width: calc(100% - 12px);
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      p{
        color: #FFFFFF;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.4px;
      }
      &.confirm{
        border-radius: 100px;
        background-color: #FFFFFF;
        p{
          color: #2B3D8F;
        }
      }
    }
  }
  input {
    border-radius: 12px;
    border: 1px solid #B0BCCB;
    width: 100%;
    height: 60px;
    color: transparent;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-indent: 12px;
    padding: 0px 0px 0px 0px;
    margin-bottom: 16px;
    &:focus{
      padding: 4px 0px 0px 0px;
      border: 1px solid #0050F0;
      outline: none;
      color: #002D63;
    }
    &:valid{
      padding: 4px 0px 0px 0px;
      color: #002D63;
    }
  }
  input[type=date]{
    text-indent: 5px;
  }
  select{
    border-radius: 12px;
    border: 1px solid #B0BCCB;
    width: 100%;
    height: 60px;
    color: #002D63;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-indent: 7px;
    padding: 0px 0px 0px 0px;
    margin-bottom: 16px;
    &:focus{
      padding: 4px 0px 0px 0px;
      border: 1px solid #0050F0;
      outline:none;
    }
    &:valid{
      padding: 4px 0px 0px 0px;
    }
    .placeholder {
      display: none;
    }
  }

  /* Label style after Input feild is in focus. Can also use input:focus ~ label to select sibling. */
  input:focus + label, input:valid + label{
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #5B6A83;
    top: 8px;
  }
  select:focus + label, select:valid + label{
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #5B6A83;
    top: 8px;
    z-index: 10px;
  }
  .input_wrap,
  .select_wrap {
    width: 100%;
    height: auto; 
    position: relative;
    &.focus{
      input{
        color: #002D63;
      }
      label{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: #5B6A83;
        top: 8px;
      }
    }
  }
  .input_wrap label,
  .select_wrap label{
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #B0BCCB;
    position: absolute;
    top: 18px;
    left: 12px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
    pointer-events: none;
  }
  .btn-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    .btn{
      width: calc(50% - 12px);
      height: 48px;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #2B3D8F;
      color: #FFF;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0.4px;
      cursor: pointer;
      &.no-bg{
        color: #2B3D8F;
        border: 1px solid #2B3D8F;
        background: transparent;
      }
    }
  }
`

const ScanDetail = (props) => {
  const showNotification = useStoreActions((actions) => actions.notification.showNotification)
  const { openModal } = useStoreActions(actions => actions.modal)
  const [partNo, setPartNo] = useState('')
  const [lotNo, setLotNo] = useState('')
  const [partName, setPartName] = useState('')
  const [stock, setStock] = useState('')
  const [area, setArea] = useState('')
  const [temp, setTemp] = useState()
  const [loading, setLoading] = useState('')
  const [stockType, setStockType] = useState('')

  const refInput = useRef(null)

  useEffect(() => {
    if (refInput && refInput.current) {
      refInput.current.focus()
    }
  }, [refInput])

  const handleOnHandheldPartNo = (result) => {
    if (result) {
        if (loading) return
        setLoading(true)
        try {
            // const receiptNo = result.split(',')[0].split('receiptNo=')[1]
            // const invoiceNo = result.split(',')[1].split('invoiceNo=')[1]
            // 032490,test01,LOT202311160003,11/16/2023,10
            const extractData = result.split(',');
            const partNo = extractData[0]
            const lotNo = extractData[2]
            if (partNo && lotNo) {
                const http = httpCommon()
                http.get('/api/v1/raw-material/scan-detail', {
                    params: {
                        partNo,
                        lotNo,
                        stockType: "TM",
                    }
                }).then(response => {
                    if (get(response, 'data.statusCode', '') === 200) {
                       const dataTemp= get(response, 'data.result','');
                        if (
                          dataTemp !== ""
                          
                          // &&
                          // dataTemp.areaName === areaFromName &&
                          // dataTemp.areaNo === areaNo
                        ) {
                          console.log(dataTemp)
                          setLoading(false);
                          setPartNo(partNo);
                          setLotNo(lotNo);
                          setTemp(dataTemp);
                          // refInput3.current.focus();
                        } else {
                          setLoading(false);
                          openModal({
                            type: "ERROR_SCAN",
                            data: {
                              title: "Move",
                              error: "Scan fail this part not in this area",
                            },
                          });
                        }
                    } else {
                        setLoading(false)
                        openModal({
                            type: 'ERROR_SCAN',
                            data: {
                                title: 'Move',
                                error: get(response, 'data.error', '')
                            }
                        })
                    }
                })
                    .catch((e) => {
                        setLoading(false)
                        openModal({
                            type: 'ERROR_SCAN',
                            data: {
                                title: 'Move',
                                error: e.toString()
                            }
                        })
                    })
            } else {
                setLoading(false)
                openModal({
                    type: 'ERROR_SCAN',
                    data: {
                        title: 'Move',
                        error: 'qr code is not valid'
                    }
                })
            }
        } catch (err) {
            console.log('err: ', err)
            setLoading(false)
            openModal({
                type: 'ERROR_SCAN',
                data: {
                    title: 'Move',
                    error: err.toString()
                }
            })
        }
    }
  }

  return (
    <AppViewWrapperPure page="content">
      <main className="container-qr-scanner">
        <div className="box-scanner">
          <Container>
            <div className="header-mobile">
              <h1>{"Scan Detail"}</h1>
            </div>
            <div className="container-wrapper-section-form">
              {/* <h3>{"From Location"}</h3> */}
              <div className="input_wrap focus">
                <input
                  ref={refInput}
                  type="text"
                  required
                  value={partNo}
                  onChange={(e) => {
                    handleOnHandheldPartNo(e.target.value);
                  }}
                />
                <label>{"Part No."}</label>
              </div>
              {temp ? (
                <div
                  className="table-receipt"
                  style={{ marginBottom: "15px", background: "#F5F6F7" }}
                >
                  <table>
                    <thead>
                      <tr>
                        <th className="center">{"Lot"}</th>
                        <th className="center">{"Area No."}</th>
                        <th className="center">{"QTY"}</th>
                      </tr>
                    </thead>
                    <tbody className="center">
                      
                      {map(get(temp, "areas"), (item) => {
                        return (
                          <tr key={item.id}>
                            <td className="center">{item.lotNo}</td>
                            <td className="center">
                              {item.area.areaNo}
                            </td>
                            <td className="center">{item.temp_stock}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                ""
              )}
              <div className="button-wrapper">
                <div
                  className="btn-submit"
                  onClick={() => {
                    props.history.goBack();
                  }}
                >
                  <p>{"Cancel"}</p>
                </div>
                <div
                  className="btn-submit confirm"
                  onClick={() => {
                    refInput.current.focus();
                    setPartNo("");
                    setLotNo("");
                    setStock("");
                    setArea("");
                    setTemp();
                  }}
                >
                  <p>{"Clear"}</p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </AppViewWrapperPure>
  );
}

export default withRouter(ScanDetail)
