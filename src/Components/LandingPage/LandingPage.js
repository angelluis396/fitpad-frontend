import React, { Component } from 'react';
import Login from '../LoginRegister/Login';
import Register from '../LoginRegister/Register';
import '../../Styles/LandingPage.css';

export default class LandingPage extends Component {
  state = {
    isLoginOpen: true,
    isRegisterOpen: false
  }


  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/home'
    history.push(destination)
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
        <div className="fitpad-desc">
          <p> 
            Fitpad is a weightlifting tracker that allows you to effortlessly track your exercises. When adding a new exercise you will select a muscle from the drop-down list, which Populates the drop-down list below it with exercises for that particular muscle. After selecting the exercise you can input the set number, repetitions, weight and notes. The logged exercises can then be viewed on the user's homepage. 
          </p>
        </div>
       
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
          {this.state.isLoginOpen && <Login onLoginSuccess={this.handleLoginSuccess} />}
            {this.state.isRegisterOpen && <Register />}   
          </div>

        </div>
    )
  }
}


