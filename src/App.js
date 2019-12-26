import React, { Component } from 'react'
import Register from './Components/LoginRegister/Register'
import {Route} from 'react-router-dom'
import Login from './Components/LoginRegister/Login'
import HomePage from './Components/HomePage'
export class App extends Component {
  render() {
    return (
      <div>
        <Route exact path= "/">
          <HomePage />
        </Route>
        <Route path='/Register'>
          <Register />
        </Route>
        <Route path='/Login'>
          <Login />
        </Route>

        
      </div>
    )
  }
}

export default App

