import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import '../../Styles/Register.css';
import AuthApiService from '../../services/auth-api-service'


export default class Register extends Component {
 
  static defaultProps = {
   onRegistrationSuccess: () => {}
 }

 state = { error: null }

 handleSubmit = event => {
  event.preventDefault();
  const { full_name, user_name, user_email, password } = event.target

  this.setState({error:null})
  AuthApiService.createUser({
    full_name: full_name.value,
    user_name: user_name.value,
    user_email: user_email.value,
    password: password.value,
  })
  .then(user => {
    full_name.value=''
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

      <div className="inner-container">
        <div className="header">
        <h2 classname="home-titles"> Register </h2>
        </div>

        <div className="box">
          <form className="registerForm" onSubmit={this.handleSubmit}>
            <div role='alert'>
              {error && <p className='red'>{error.message}</p>}
            </div>

            <Input required type="text" id="floatField" className="landing-form-text" name="full_name" placeholder="Full Name"/>
        
            <Input required type="text" id="user_name" className="landing-form-text" name="user_name" placeholder="Username"/>
            
            <Input required type="email" id="user_email" className="landing-form-text" name="user_email" placeholder="Email" />  
            
            <Input required type="password" id="password" className="landing-form-text" placeholder="Password" />

            <Button className="form-btns" type="submit"> Register </Button>
          </form>
        </div>
      </div>
    )
  }
}