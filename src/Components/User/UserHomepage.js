import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import FullName from '../FullName/FullName';
import DisplayWorkouts from '../DisplayWorkouts/DisplayWorkouts';
import '../../Styles/UserHome.css';

export default class UserHomepage extends Component {
  render() {
    return (
      <div className="displayWorkouts">
        <h1> <FullName /> </h1>
        <div className="linkToAdd">
          <Link to="/Add" className="link"> Add a New Exercise </Link>
        </div>
        <h3> Logged Exercises </h3>  
        <div className="myLoggedWorkouts">
          <DisplayWorkouts />
        </div>
        
      </div>
    )
  }
}