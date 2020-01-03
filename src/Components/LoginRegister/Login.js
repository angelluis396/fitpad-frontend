import React, { Component } from 'react'
import './Login.css'
import userservices from '../../Services/userservice';


//onsubmit handler
//calluser services obj use the handlers
//services file is where fetch calls go

export class Login extends Component {
  
  render() {
    return (
      <div>
        <form className= "loginForm">

          <div className="FormField">
            <label className="formLabel" htmlFor="email"> Email: </label>
            <input type="email" id="email" className="formInput" placeholder="Your Email" name="email"/>  
          </div>

          <div className="FormField">
            <label className="formLabel" htmlFor="password"> Password: </label>
            <input type="text" id="password" className="formInput" placeholder="Password" name="password"/>
          </div>

          <div className="FormField">
            <button className="login" onClick={this.handleLogin}>  Login </button>
          </div>
         
        </form>
     
      </div>
    )
  }
}

export default Login

