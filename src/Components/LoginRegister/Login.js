import React, { Component } from 'react';
import TokenService from '../../Services/token-service';
import AuthApiService from '../../Services/auth-api-service';
import { Button, Input } from '../Utils/Utils'
import Context from '../../Contexts/Context'
import UserIcon from '../../Photos/userIcon.svg';
import PasswordIcon from '../../Photos/passwordIcon.svg'
import '../../Styles/Login.css';

export default class Login extends Component {
  static contextType = Context
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }


  state= { error: null }

  handleSubmitJwtAuth = event => {
    event.preventDefault()
    this.setState({ error:null })
    const { user_email, password} = event.target
    
    AuthApiService.postLogin({
      user_email: user_email.value,
      password: password.value,
    })
    .then(res => {
      user_email.value=''
      password.value=''
      TokenService.saveAuthToken(res.authToken)
      this.context.setAuth(res.authToken)
      this.props.onLoginSuccess()
    })
    .catch(error => {
      console.log(error);
      this.setState({error: error})
    })
  }
  render() {
    return (
        <div className="inner-container"> 
          <div className="header">
            <h2 className="home-titles"> Login </h2>
          </div> 
          
          <div className="box">
            <form className= "loginForm" onSubmit={this.handleSubmitJwtAuth}>
              <Input className="landing-form-text" required type="email" id="user_email" placeholder="Your Email" name="user_email"/>

              <Input className="landing-form-text" required type="password" id="password" name="password" placeholder="Password"/>

              <Button className="form-btns" type='submit'>  Login </Button>
            </form>
          </div>
        </div>
    )
  }
}

