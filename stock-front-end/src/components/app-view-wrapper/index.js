import React, { Fragment } from 'react'
import compose from 'recompose/compose'
import { withRouter } from 'react-router-dom'
import Header from 'components/header'

const AppViewWrapperPure = (props) => {
  return (
    <Fragment>
      <Header {...props} />
      <div className="body-wrapper">
        {props.children}
      </div>
    </Fragment>
  )
}

export default compose(withRouter)(AppViewWrapperPure)
