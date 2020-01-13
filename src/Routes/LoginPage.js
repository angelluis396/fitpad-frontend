import React, { Component } from 'react';
import Login from '../Components/LoginRegister/Login';
import { Section } from '../Components/Utils/Utils';
import UserHomepage from '../Components/User/UserHomepage';

export default class LoginPage extends Component {
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
  render() {
    return (
      <Section className="LoginPage">
        <h2> Login </h2>
        <Login 
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
