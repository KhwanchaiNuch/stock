import React, { Component } from 'react'
import { Route as ReactRoute, withRouter, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { compose } from 'ramda'
import Loadable from 'react-loadable'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { ErrorBoundary } from 'components/error'
import NotificationBar from 'components/notification-bar'
import Toast from 'components/toast'
import Modals from 'components/modals'
import Favicon from 'assets/images/SiamStarch.png'
import signedOutFallback from 'helpers/signed-out-fallback'
import HomeView from 'views/home'
import HandheldView from 'views/handheld'
import MasterProductView from 'views/master-product'
import MasterOperatorView from 'views/master-operater'
import MasterAreaView from 'views/master-area'
import MasterCustomerView from 'views/master-customer'
import MasterSupplierView from 'views/master-supplier'
import StockPartNoView from 'views/stock-part-no'
import InventoryView from 'views/inventory'
import HistoryView from 'views/history'
import ReceiptListView from 'views/receipt-list'
import ReceiptView from 'views/receipt'
import HandheldScan from 'views/handheld/scan'
import HandheldScanV2 from 'views/handheld/scanV2'
import HandheldInventory from 'views/handheld/inventory'
import HandheldMove from 'views/handheld/move'
import HandheldMove2 from 'views/handheld/move2'
import HandheldOutbound from 'views/handheld/outbound'
import ReceiptInfoView from 'views/receipt-info'
import HandheldDetail from 'views/handheld/detail'
import HandheldQc from 'views/handheld/qc'
import HandheldFinalcheck from 'views/handheld/finalcheck'
import QcCheckView from 'views/qc-check'

const HomeFallback = signedOutFallback(HomeView, () => <Login />)
const HandheldFallback = signedOutFallback(HandheldView, () => <Login />)
const ReceiptListFallback = signedOutFallback(ReceiptListView, () => <Login />)
const ReceiptFallback = signedOutFallback(ReceiptView, () => <Login />)
const MasterProductFallback = signedOutFallback(MasterProductView, () => <Login />)
const MasterOperatorFallback = signedOutFallback(MasterOperatorView, () => <Login />)
const MasterAreaFallback = signedOutFallback(MasterAreaView, () => <Login />)
const MasterCustomerFallback = signedOutFallback(MasterCustomerView, () => <Login />)
const MasterSupplierFallback = signedOutFallback(MasterSupplierView, () => <Login />)
const StockPartNoFallback = signedOutFallback(StockPartNoView, () => <Login />)
const InventoryFallback = signedOutFallback(InventoryView, () => <Login />)
const HistoryFallback = signedOutFallback(HistoryView, () => <Login />)
const HandheldScanFallback = signedOutFallback(HandheldScan, () => <Login />)
const HandheldScanV2Fallback = signedOutFallback(HandheldScanV2, () => <Login />)
const HandheldOutboundFallback = signedOutFallback(HandheldOutbound, () => <Login />)
const ReceiptInfoViewFallback = signedOutFallback(ReceiptInfoView, () => <Login />)
const HandheldInventoryFallback = signedOutFallback(HandheldInventory, () => <Login />)
const HandheldMoveFallback = signedOutFallback(HandheldMove, () => <Login />)
const HandheldMove2Fallback = signedOutFallback(HandheldMove2, () => <Login />)
const HandheldDetailFallback = signedOutFallback(HandheldDetail, () => <Login />)
const HandheldQcFallback = signedOutFallback(HandheldQc, () => <Login />)
const HandheldFinalcheckFallback = signedOutFallback(HandheldFinalcheck, () => <Login />)
const QcCheckFallback = signedOutFallback(QcCheckView, () => <Login />)


const Login = Loadable({
  loader: () => import('./views/login'),
  loading: ({ isLoading }) => isLoading && null
})

class Route extends React.Component {
  componentWillMount() {
    nprogress.start()
  }

  async componentDidMount() {
    nprogress.done()
    window.scrollTo(0, 0)
  }

  render() {
    return <ReactRoute {...this.props} />
  }
}

class Routes extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="wrapper body">
          <Helmet>
            <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
            <link rel="icon" href={Favicon} type="image/x-icon" />
          </Helmet>
          <Route component={NotificationBar} noprogress />
          <Route component={Toast} noprogress />
          <Modals />
          <Switch>
            <Route key="home" exact path="/" component={HomeFallback} />
            <Route key="handheld" exact path="/handheld" component={HandheldFallback} />
            <Route key="receipt-list" exact path="/receipt-list/:stockTypeInput/:receiptTypeInput" component={ReceiptListFallback} />
            <Route key="receipt" exact path="/receipt/:stockTypeInput/:receiptTypeInput" component={ReceiptFallback} />
            <Route key="master-product" exact path="/master-product" component={MasterProductFallback} />
            <Route key="master-operater" exact path="/master-operater" component={MasterOperatorFallback} />
            <Route key="master-area" exact path="/master-area" component={MasterAreaFallback} />
            <Route key="master-customer" exact path="/master-customer" component={MasterCustomerFallback} />
            <Route key="master-supplier" exact path="/master-supplier" component={MasterSupplierFallback} />
            <Route key="stock-part-no" exact path="/stock-part-no" component={StockPartNoFallback} />
            <Route key="inventory" exact path="/inventory" component={InventoryFallback} />
            <Route key="history" exact path="/history" component={HistoryFallback} />
            <Route key="qr-handheld" exact path="/handheld/:stockTypeInput/INBOUND" component={HandheldScanFallback} />
            <Route key="qr-handheld" exact path="/handheld/INBOUND" component={HandheldScanV2Fallback} />
            <Route key="qr-handheld-outbound" exact path="/handheld/OUTBOUND" component={HandheldOutboundFallback} /> 
            <Route key="receipt-info" exact path="/receipt/:receiptNo" component={ReceiptInfoViewFallback} />
            <Route key="qr-handheld-inventory" exact path="/handheld/inventory" component={HandheldInventoryFallback} />
            <Route key="qr-handheld-move" exact path="/handheld/move" component={HandheldMoveFallback} />
            <Route key="qr-handheld-move2" exact path="/handheld/move2" component={HandheldMove2Fallback} />

            <Route key="qr-handheld-detail" exact path="/handheld/detail" component={HandheldDetailFallback} />
            <Route key="login" exact path="/login" component={Login} />
            <Route key="qr-handheld" exact path="/handheld/qc" component={HandheldQcFallback} />
            <Route key="qr-handheld" exact path="/handheld/finalcheck" component={HandheldFinalcheckFallback} />
            <Route key="qc-check" exact path="/qc-check" component={QcCheckFallback} />
            <Route component={HomeFallback} />
          </Switch>
        </div>
      </ErrorBoundary>
    )
  }
}

export default Routes

