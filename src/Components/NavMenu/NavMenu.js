import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import Context from '../../Contexts/Context'
import '../../Styles/NavMenu.css'
export default class Header extends Component {
constructor(props) {
  super(props)

  this.state = {
     error: null,
  }
}
static contextType= Context;

  burgerMenuClick = () => {
    let links = document.getElementById('links')
    if (links.className === 'links') {
      links.className += ' null'
    } else {
      links.className = 'links'
    }
  }

  onLogoutSuccess = () => {
    const { history } = this.props
    history.push('/')
  }

  handleLogOutClick = (event) => {
    TokenService.clearAuthToken();
    this.context.emptyAuth();
  }

  renderHomeLinks() {
    return (
      <div className='navContents'>
        {TokenService.hasAuthToken()}
        <div 
          role="navigation" 
          className="burgerIcon" 
          id="burger" 
          onClick={this.burgerMenuClick}
        > 
          &#9776; 
          </div>
        <ul className='links null' id='links' onClick={this.burgerMenuClick}>
          <li> <Link to='/home'> Home </Link></li>
          <li> <Link to='/add'> Add a Workout </Link></li>
          <li> <Link onClick={this.handleLogOutClick} to='/login'> Logout </Link></li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        <nav className='navBar'>
          {TokenService.hasAuthToken()
            ? this.renderHomeLinks()
            : null
          }
        </nav>
      </div>
      
    )
  }
}


