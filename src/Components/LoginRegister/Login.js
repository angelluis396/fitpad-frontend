import React, { Component } from 'react';
import TokenService from '../../Services/token-service';
import AuthApiService from '../../Services/auth-api-service';
import { Button, Input } from '../Utils/Utils'
import Context from '../../Contexts/Context'
import './Login.css';

export default class Login extends Component {
  static contextType = Context
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  state= { error: null }

  // handleLoginSuccess = () => {
  //   const { location, history } = this.props
  //   const destination = (location.state || {}).from || '/home'
  //   history.push(destination)
  // }

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
      this.onLoginSuccess()
    })
    .catch(res => {
      this.setState({error: res.error})
    })
  }
  render() {
    return (
      <div>
        <form className= "loginForm" onSubmit={this.handleSubmitJwtAuth}>

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

