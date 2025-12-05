import React from 'react'
import ViewError from '../view-error'
import ErrorBoundary from './error-boundary'

class BlueScreen extends React.Component {
  render() {
    return (
      <ViewError
        heading={'Something went wrong'}
        subheading={'Sorry about the technical issues.'}
        refresh
        {...this.props}
      />
    )
  }
}

export { ErrorBoundary }
export default BlueScreen
