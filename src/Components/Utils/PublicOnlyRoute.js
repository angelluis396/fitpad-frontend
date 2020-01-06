import React from 'react'
import TokenService from '../../Services/token-service'
import { Route, Redirect } from 'react-router-dom'

export default function PublicOnlyRoute({component, ...props}) {
  const Component= component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
        ? <Redirect to={' '} />
        : <Component {...componentProps} />
      )} 
    />
  )
}
