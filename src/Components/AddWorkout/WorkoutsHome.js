import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config';

export class WorkoutsHome extends Component {
  state= {
    workouts: [],
    error: null,
  }
  setWorkouts = workouts => {
    this.setState({
      workouts,
      error: null
    })
  }
  componentDidMount(){
    fetch(config.API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type':'application/json'
      }
    })
    .then(this.setWorkouts)
    .catch(error => this.setState({error}))
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default WorkoutsHome
