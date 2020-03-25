import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import { Button, Input } from '../Utils/Utils'
import Context from '../../Contexts/Context'
import '../../Styles/Login.css';

export default class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = Context;

  state= { error: null }


  

  handleSubmitJwtAuth = event => {
    event.preventDefault();
    const { user_email, password} = event.target

    this.setState({ error:null });

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
    .catch(res => {
      this.setState({ error: res.error })
    })
  }
  render() {
    const { error } = this.state;

    return (
        <div className="inner-container"> 
          <div className="header">
            <h2 className="home-titles"> Login </h2>
          </div> 
          
          <div className="box">
            <form className= "loginForm" onSubmit={this.handleSubmitJwtAuth}>
              <div role="alert" className="LogForm__alert">
                {error && (
                  <p aria-label="You have entered an incorrect username or password">
                    {error}
                  </p>
                )}
          </div>
              <Input 
                className="landing-form-text" 
                required 
                type="email" 
                id="user_email" 
                placeholder="Your Email" 
                name="user_email"
              />

              <Input 
                className="landing-form-text" 
                required type="password" 
                id="password" 
                name="password" 
                placeholder="Password"
              />

              <Button className="form-btns" type='submit'>  Login </Button>
            </form>
          </div>
        </div>
    )
  }
}

