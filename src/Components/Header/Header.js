import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import './Header.css'
export default class Header extends Component {
  handleLogOutClick = () => {
    TokenService.clearAuthToken();
  }
  renderLogoutLink() {
    return (
      <div className='header-logged-in'>
        <Link onClick={this.handleLogOutClick} to='/'> Logout</Link>
      </div>
    )
  }
  render() {
    return (
      <div className="menu">
        <nav className='Header'>
        <div className="home-menu">
          <Link className="home-menu" to='/home'> Home </Link>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : null
          }
        </div>
        
      </nav>
      </div>
      
    )
  }
}


