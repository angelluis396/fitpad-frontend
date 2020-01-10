import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'

export default class Header extends Component {
  handleLogOutClick = () => {
    TokenService.clearAuthToken();
  }
  renderLogoutLink() {
    return (
      <div className='Header_Logged_In'>
        <Link onClick={this.handleLogOutClick} to='/'> Logout</Link>
      </div>
    )
  }
  render
  render() {
    return (
      <nav className='Header'>
        <h2> 
          <Link to='/'> </Link>
        </h2>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : null
        }
      </nav>
    )
  }
}


