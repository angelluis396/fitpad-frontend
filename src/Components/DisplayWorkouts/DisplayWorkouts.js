import React, { Component } from 'react'
import FitpadApiService from '../../Services/fitpad-api-service'
import '../../Styles/DisplayWorkouts.css';
const moment = require('moment');

export default class DisplayWorkouts extends Component {
  constructor(props) {
    super(props)
    this.state={
      myWorkouts: [],
      error:null,
    }
  }

  
  handleDeleteWorkoutSuccess = () => {
    console.log('Goodbye friend')
  }
  handleDelete = () => {
    console.log('good bye')
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
  
  // sortedWorkouts = myWorkout.sort((a,b) => b.date_created - a.date_created)
  
  
  render() {
   

    
    const myWorkouts = this.state.myWorkouts.map((myWorkout, idx)=> (
      <div className="userWorkouts" key={idx}>

        {console.log()}

        

        <ul className="exerciseName">Name: {myWorkout.exercise_name}<br />
          <li className="set">Set: {myWorkout.workout_set} </li><br />
          <li className="rep">Reps: {myWorkout.workout_rep} </li><br />
          <li className="weight">Weight: {myWorkout.workout_weight} </li><br />
          <li className="notes">Notes: {myWorkout.notes} </li> <br/>
          <li className="dateCreated"> Date: {moment(myWorkout.date_created).format("dddd, MMMM Do YYYY")} </li><br />
          <button> Delete Exercise </button>
        </ul> 
      </div>
    ))
    if (this.state.error) {
      return (
        <div>{this.state.error.toString()}</div>
      );
    }
    return (
      <div> 
        {myWorkouts.sort((myWorkout1, myWorkout2) => 
          myWorkout1.date_created < myWorkout2.date_created ? -1 : myWorkout1.date_created > myWorkout2.date_created ? 1 : 0
        )} 
      </div>
    )
  }
}

// .sort((myWorkout) => myWorkout.date_created < myWorkout.date_created ? -1 : myWorkout.date_created > myWorkout.date_created ? 1 : 0)