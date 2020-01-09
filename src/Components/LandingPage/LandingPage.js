import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Utils/Utils';
import Login from '../LoginRegister/Login';
import Register from '../LoginRegister/Register';
// import TokenService from '../Services/token-service'
import './LandingPage.css'

export default class LandingPage extends Component {
  // handleLogOutClick = () => {
  //   TokenService.clearAuthToken()
  // }
  // renderLogoutLink() {
  //   return (
  //     <div className='Header_Logged_In'>
  //       <Link onClick={this.handleLogOutClick} to='/'> Logout</Link>
  //     </div>
  //   )
  // }
  render() {
    return (
      <div>
        <h1> Welcome to FitPad </h1>
        <p> The FitPad aims to make tracking your weight lifting progress simple and fun. Register to start tracking your Gains! </p>
        <div className="buttons">
          <Link to="/Login"><Button onClick={this.Login}> Log In </Button></Link>
          <Link to="/Register"><Button onClick={this.Register}> Register </Button></Link>
        </div>
      </div>
    )
  }
}


