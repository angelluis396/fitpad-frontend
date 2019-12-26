import React, { Component } from 'react'
import './Register.css'
// import UserServices from '../Services/User-Services'


export class Register extends Component {
  state = {
    username:'',
    email: '',
    password: '',
  }
  onChange = (e) => {
    const value= e.target.checked === undefined? e.target.value : e.target.checked;
    this.setState({
      [e.target.name]: value,
    })
  }
  render() {
    return (
      <div>
        <form className="registerForm">

          <div className="FormField">
            <label className="formLabel" htmlFor="username"> Username: </label>
            <input type="text" id="username" className="formInput" placeholder="Your Username" name="username"/>
          </div>

          <div className="FormField">
            <label className="formLabel" htmlFor="email"> Email: </label>
            <input type="email" id="email" className="formInput" placeholder="Your Email" name="email"/>  
          </div>

          <div className="FormField">
            <label className="formLabel" htmlFor="password"> Password: </label>
            <input type="text" id="password" className="formInput" placeholder="Password" name="password"/>
          </div>

          <div className="FormField">
            <label className="formCheckBox">
              <input className="formCheckBox" type="checkbox" name="hasAgreed" /> I Agree to the Terms and Conditions
            </label>
          </div>

          <div className="FormField">
            <button className="formButton"> Sign Up </button>
          </div>
         
        </form>
     
      </div>
    )
  }
}

export default Register
