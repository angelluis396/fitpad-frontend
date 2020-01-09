import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'

export default class Header extends Component {
  handleLogOutClick = () => {
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
          <Link to='/'>
            FitPad
          </Link>
        </h2>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()
        }
      </nav>
    )
  }
}


