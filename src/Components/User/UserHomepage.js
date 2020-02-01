import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DisplayWorkouts from '../DisplayWorkouts/DisplayWorkouts';
import '../../Styles/UserHome.css';

export default class UserHomepage extends Component {
  render() {
    return (
      <div className="displayWorkouts">
        <h1> My Fitpad </h1>
        <Link to="/Add" className="link"> Add a workout </Link>
        <div className="myLoggedWorkouts">
          <DisplayWorkouts />
        </div>
        
      </div>
    )
  }
}