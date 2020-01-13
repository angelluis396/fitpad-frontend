import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Utils/Utils';
import Login from '../LoginRegister/Login';
import Register from '../LoginRegister/Register';
// import TokenService from '../Services/token-service'
import './LandingPage.css'

export default class LandingPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoginOpen: true,
       isRegisterOpen: false
    }
  }
 
  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false})
  }
  showRegisterBox(){
    this.setState({isRegisterOpen: true, isLoginOpen: false})
  }
  
  render() {
    return (
      <div className="root-container">
        <h1> Welcome To FitPad </h1>
        <div className="border" />
          
          
          <div className="box-controller">

            <div className={"controller" + (this.state.isLoginOpen ? "selected-controller" : "")}
              onClick={this.showLoginBox.bind(this)}> 
                Login 
            </div>

            <div className={"controller" + (this.state.isRegisterOpen ? "selected-controller" : "")}
              onClick={this.showRegisterBox.bind(this)}>
                Register
            </div> 

          </div>

          <div className="box-container">
            {this.state.isLoginOpen && <Login />}
            {this.state.isRegisterOpen && <Register />}
            
            
          </div>

        </div>
    )
  }
}

