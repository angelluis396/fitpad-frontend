import React from 'react'
import TokenService from '../../services/token-service'
import { Route, Redirect } from 'react-router-dom'

export default function PublicOnlyRoute({component, ...props}) {
  const Component= component
  return (
    <Route
      {...props}
      render={componentProps => 
        TokenService.hasAuthToken()
        ? ( <Redirect to={'/home'} /> )
        : ( <Component {...componentProps} /> )
      } 
    />
  )
}
