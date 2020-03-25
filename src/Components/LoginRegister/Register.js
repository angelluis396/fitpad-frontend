import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import '../../Styles/Register.css';

export default class Register extends Component {
  static defaultProps = {
   onRegistrationSuccess: () => {}
  };

  state = { 
    error: null, 
  };

  firstInput = React.createRef();

 handleSubmit = async event => {
  event.preventDefault();
  const { full_name, user_name, user_email, password } = event.target;

  await this.setState({
    error:null
  });

  if(full_name.length === 0 || user_name.length === 0) {
    this.setState({
      error: 'Name or username must not be empty'
    });
    return;
  }
  if (password.length > 40 || user_name.length > 40 || full_name.length > 40) {
    this.setState({
      error: 'Passwords, usernames, and names must be no more than 40 characters long'
    });
    return
  }
  if (password.length < 8) {
    this.setState({
      error: 'Passwords must be at least 8 characters long'
    });
    return;
  }
  
  AuthApiService.createUser({
    full_name: full_name.value,
    user_name: user_name.value,
    user_email: user_email.value,
    password: password.value
  })
  .then(user => {
    full_name.value='';
    user_name.value='';
    user_email.value='';
    password.value='';
    this.props.onRegistrationSuccess()
  })
  .catch(res => {
    this.setState({
      error: res.error
    })
  })
 }
 renderError() {
   if (this.state.error) {
     return (
       <div role="alert" className="form-alert">
         <p> {this.state.error} </p>
       </div>
     )
   }
 }

  render() {
    return (
      <div className="inner-container">
        <div className="header">
        <h2 className="home-titles"> Register </h2>
        </div>

        <div className="box">
          <form 
            className="registerForm" 
            onSubmit={this.handleSubmit}
          >
            {this.renderError()}

            <Input 
              required 
              type="text" 
              id="floatField" 
              className="landing-form-text" 
              name="full_name" 
              placeholder="Full Name"
            />
        
            <Input 
              required 
              type="text" 
              id="user_name" 
              className="landing-form-text" 
              name="user_name" 
              placeholder="Username"
            />
              
            <Input 
              required 
              type="email" 
              id="user_email" 
              className="landing-form-text" 
              name="user_email" 
              placeholder="Email" 
            />  
            
            <Input 
              required 
              type="password" 
              id="password" 
              className="landing-form-text" 
              placeholder="Password" 
            />

            <Button className="form-btns" type="submit"> Register </Button>
          </form>
        </div>
      </div>
    )
  }
}