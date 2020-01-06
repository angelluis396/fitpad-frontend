import React, { Component } from 'react';
import './Login.css';
import TokenService from '../../Services/token-service';
import AuthApiService from '../../Services/auth-api-service';
import { Button, Input } from '../Utils/Utils'
export default class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {} 
  }
  state = { error: null }

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
      this.props.onLoginSuccess()
    })
    .catch(res => {
      this.setState({error: res.error})
    })
  }
  render() {
    return (
      <div>
        <form className= "loginForm" onSubmit={this.handleSubmitJwtAuth}>

          {/* <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div> */}

          <div className="user_email">
            <label htmlFor="email"> Email: </label>
            <Input required type="email" id="user_email" placeholder="Your Email" name="user_email"/>  
          </div>

          <div className="password">
            <label htmlFor="password"> Password: </label>
            <Input required type="password" id="password" name="password" placeholder="Password"/>
          </div>

          <div className="Button">
            <Button type='submit'>  Login </Button>
          </div>
        </form>
     
      </div>
    )
  }
}

