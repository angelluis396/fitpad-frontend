import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import '../../Styles/Header.css';
import Context from '../../Contexts/Context'
export default class Header extends Component {

constructor(props) {
  super(props)

  this.state = {
     error: null,
     full_name: '',
  }
}
static contextType= Context;

burgerMenuClick = () => {
  let links = document.getElementById('links')
  if (links.className === 'links') {
    links.className += 'null'
  } else {
    links.className = 'links'
  }
}

onLogoutSuccess = () => {
  const { history } = this.props
  history.push('/')
}

  handleLogOutClick = () => {
    TokenService.clearAuthToken();
    this.context.emptyAuth();
    this.setState({full_name: ''})
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


