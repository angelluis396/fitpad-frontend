import React, { Component } from 'react'
import FitpadApiService from '../../Services/fitpad-api-service'
import '../../Styles/DisplayWorkouts.css';

export default class DisplayWorkouts extends Component {
  constructor(props) {
    super(props)
    this.state={
      myWorkouts: [],
      error:null,
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
  
  
  render() {
    
    const myWorkouts = this.state.myWorkouts.map((myWorkout, idx)=> (
      <div className="userWorkouts" key={idx}>
        <ul className="exerciseName">Name: {myWorkout.exercise_name}<br />
          <li className="set">Set: {myWorkout.workout_set} </li><br />
          <li className="rep">Reps: {myWorkout.workout_rep} </li><br />
          <li className="weight">Weight: {myWorkout.workout_weight} </li><br />
          <li className="notes">Notes: {myWorkout.notes} </li>
        </ul> 
      </div>
    ))

    if (this.state.error) {
      return (
        <div>{this.state.error.toString()}</div>
      );
    }
    return (
      <div>{myWorkouts} </div>
    )
  }
}