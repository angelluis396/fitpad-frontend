import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './LoginRegister/Login';
import Register from './LoginRegister/Register';
import './HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1> Welcome to FitPad </h1>
        <p> Summary of fitpad goes here</p>
        <div className="buttons">
          <Link to="/Login"><button onClick={this.Login}> Log In </button></Link>
          <Link to="/Register"><button onClick={this.Register}> Register </button></Link>
        </div>
      </div>
    )
  }
}


