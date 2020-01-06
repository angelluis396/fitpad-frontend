import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import './Register.css'
import AuthApiService from '../../Services/auth-api-service'


export default class Register extends Component {
 static defaultProps = {
   onRegistrationSuccess: () => {}
 }

 state = { error: null }

 handleSubmit = event => {
  event.preventDefault();
  const { first_name, last_name, user_name, user_email, password } = event.target

  this.setState({error:null})
  AuthApiService.postUser({
    first_name: first_name.value,
    last_name: last_name.value,
    user_name: user_name.value,
    user_email: user_email.value,
    password: password.value,
  })
  .then(user => {
    first_name.value=''
    last_name.value=''
    user_name.value=''
    user_email.value=''
    password.value=''
    this.props.onRegistrationSuccess()
  })
  .catch(res => {
    this.setState({error: res.error})
  })
 }

  render() {
    const {error}=this.state;
    return (
      <div>
        <form className="registerForm" onSubmit={this.handleSubmit}>

          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>

          <div className="first_name">
            <label htmlFor="first_name"> First Name:<Required/> </label>
            <Input required type="text" id="first_name" className="formInput" placeholder="First Name" name="first_name"/>
          </div>

          <div className="last_name">
            <label htmlFor="last_name"> Last Name:<Required/> </label>
            <Input  required type="text" id="last_name" className="formInput" placeholder="Last Name" name="last_name"/>
          </div>

          <div className="user_name">
            <label htmlFor="username"> Username:<Required/> </label>
            <Input required type="text" id="user_name" className="formInput" placeholder="Your Username" name="user_name"/>
          </div>

          <div className="user_email">
            <label htmlFor="user_email"> Email:<Required/> </label>
            <Input required type="email" id="user_email" className="formInput" placeholder="Your Email" name="user_email"/>  
          </div>

          <div className="password">
            <label htmlFor="password"> Password:<Required/> </label>
            <Input required type="text" id="password" className="formInput" placeholder="Password" name="password"/>
          </div>

          <div className="terms_agreement">
            <label className="formCheckBox">
              <Input required className="formCheckBox" type="checkbox" name="hasAgreed" /> I Agree to the Terms and Conditions
            </label>
          </div>

          <div className="FormField">
            <Button type="submit"> Register </Button>
          </div>
         
        </form>
     
      </div>
    )
  }
}