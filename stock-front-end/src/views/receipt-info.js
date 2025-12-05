import React from 'react'
import AppViewWrapperPure from 'components/app-view-wrapper'
import { map, get, isEmpty } from 'lodash'
import { withRouter } from 'react-router-dom'
import useGet from 'hooks/useGet'
import moment from 'moment'
import 'moment/locale/th'

const ReceiptInfoView = (props) => {
    const { data, loading } = useGet('/api/v1/raw-material/receipt', {
        variables: {
            receiptNo: get(props, 'match.params.receiptNo', '')
        },
    })

    return (
        <AppViewWrapperPure page="content">
            <main className="container-receipt">
                <div className="container">
                    {!loading && (
                        <>
                            <>
                                <div style={!isEmpty(get(data, 'result.receiptItem', [])) ? { minHeight: '580px' } : {}}>
                                    <div className="table-receipt" style={{ marginTop: '60px' }}>
                                        <div className="header-table">
                                            <div className="input-receipt">
                                                <p>{'Receipt No.'}</p>
                                                <input
                                                    autoComplete="off"
                                                    type="text"
                                                    placeholder={get(props, 'match.params.receiptNo', '')}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <table>
                                            <tr>
                                                <th>
                                                    <p>{'Part No.'}</p>
                                                </th>
                                                <th>
                                                    <p>{'Part Name'}</p>
                                                </th>
                                                <th className="center">
                                                    <p>{'Supplier'}</p>
                                                </th>
                                                <th className="center">
                                                    <p>{'Invoice No.'}</p>
                                                </th>
                                                <th className="center">
                                                    <p>{'Lot No.'}</p>
                                                </th>
                                                <th className="center">
                                                    <p>{'Qty'}</p>
                                                </th>
                                                <th className="center">
                                                    <p>{'Date'}</p>
                                                </th>
                                                <th className="center">
                                                    <p>{'By'}</p>
                                                </th>
                                            </tr>
                                            {!isEmpty(get(data, 'result.receiptItem', [])) && (
                                                <>
                                                    {map(get(data, 'result.receiptItem', []), (item) => {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    <p>{get(item, 'partNo', '')}</p>
                                                                </td>
                                                                <td>
                                                                    <p>{get(item, 'partName', '')}</p>
                                                                </td>
                                                                <td className="center">
                                                                    <p>{get(item, 'supplier', '')}</p>
                                                                </td>
                                                                <td className="center">
                                                                    <p>{get(item, 'invoiceNo', '')}</p>
                                                                </td>
                                                                <td className="center">
                                                                    <p>{get(item, 'lotNo', '')}</p>
                                                                </td>
                                                                <td className="center">
                                                                    <p>{get(item, 'quantity', 0)}</p>
                                                                </td>
                                                                <td className="center">
                                                                    <p>
                                                                        {`${moment(Number(new Date(get(item, 'date', '')).getTime())).format('DD-MM-YY')}`}
                                                                    </p>
                                                                </td>
                                                                <td className="center">
                                                                    <p>{get(item, 'receivedBy', 0)}</p>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </>
                                            )}
                                        </table>
                                    </div>
                                </div>
                            </>
                        </>
                    )}
                </div>
            </main>
        </AppViewWrapperPure>
    )
}

export default withRouter(ReceiptInfoView)
