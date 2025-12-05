import React from 'react'
import AuthViewHandler from 'views/auth-view-handler'

const signedOutFallback = (Component, FallbackComponent) => {
  return props => (
    <AuthViewHandler>
      {authed => {
        if (!authed) {
          return <FallbackComponent {...props} />
        } else {
          return <Component {...props} />
        }
      }}
    </AuthViewHandler>
  )
}

export default signedOutFallback
