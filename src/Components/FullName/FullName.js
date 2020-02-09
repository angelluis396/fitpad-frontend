import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import FitpadApiService from '../../Services/fitpad-api-service'

export default class FullName extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       error: null,
       full_name: '',
    }
  }
  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      FitpadApiService.getFullName()
        .then( res => res.json())
        .then(res => this.setState({full_name: res.full_name}))
    }
  }
  
  render() {
    return (
      <div className="fullName">
        <span className="fullname"> {this.state.full_name}'s Fitpad</span>
      </div>
    )
  }
}


