import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { StoreProvider, useStoreState } from 'easy-peasy'
import Routes from './routes'
import store from './stores'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './styles/main.scss'

const Loading = () => {
  const appLoading = useStoreState((state) => state.app.appLoading)

  return (
    <>
      {appLoading && (
        <div className="loading-spinner">
          <div className="loading-bg">
            <div className="spinner" />
          </div>
        </div>
      )}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <StoreProvider store={store}>
      <Routes />
      <Loading />
    </StoreProvider>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
