import React, { Component } from 'react'
import FitpadApiService from '../../Services/fitpad-api-service'
import { Link } from 'react-router-dom';
import '../../Styles/DisplayWorkouts.css';
const moment = require('moment');

export default class DisplayWorkouts extends Component {
  constructor(props) {
    super(props)
    this.state={
      myWorkouts: [],
      error:null,
      active: false
    }
  }

  componentDidMount(){
    this.getWorkouts()
  }

  getWorkouts = () => {
    FitpadApiService.getWorkouts()
      .then(myWorkouts => this.setState({myWorkouts}))
      .catch((error) => {
        this.setState({error});
      })
    
  }
  
  toggleAccordion = () => {
    this.setState ({
      active: !this.state.active
    })
  }
  
  render() {
    const myWorkouts = this.state.myWorkouts.map((myWorkout, idx)=> (
      <div className="userWorkouts" key={idx}>
        <button 
          className="accordion-title" 
          onClick={() => this.toggleAccordion()}
        > 
          {moment(myWorkout.date_created).format("MMMM Do YYYY")} 
        </button>
        { this.state.active && 
          <ul 
            className="dateCreated"><b><u>
            Date: {moment(myWorkout.date_created).format("dddd, MMMM Do YYYY")}</u></b><br/>  
            <li className="exerciseName"> <b>Exercise Name:</b> {myWorkout.exercise_name}</li><br />
            <li className="set"><b>Set:</b> {myWorkout.workout_set} </li><br />
            <li className="rep"><b>Reps:</b> {myWorkout.workout_rep} </li><br />
            <li className="weight"><b>Weight:</b> {myWorkout.workout_weight} lb's </li><br />
            <li className="notes"><b>Notes:</b> {myWorkout.notes} </li> <br/>
          </ul>
        }
      </div>
    ))
    if (this.state.error) {
      return (
        <div>{this.state.error.toString()}</div>
      );
    }
    return (
      <div className="exercises-container"> 
        {myWorkouts} 
      </div>
    )
  }
}