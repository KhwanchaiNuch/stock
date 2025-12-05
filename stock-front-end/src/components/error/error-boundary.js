import * as React from 'react'
import BlueScreen from './index'

class ErrorBoundary extends React.Component {
  state = { error: null }

  componentDidCatch = (error, errorInfo) => {
    this.setState({ error })
    window.__PXADMIN__ERROR__LOG = errorInfo
  }

  render() {
    const { error } = this.state
    const { fallbackComponent: FallbackComponent, children } = this.props

    if (error) {
      if (this.props.fallbackComponent) {
        return <FallbackComponent />
      }

      if (this.props.fallbackComponent === null) {
        return null
      }

      return <BlueScreen error={error} />
    }

    return children
  }
}

export default ErrorBoundary
