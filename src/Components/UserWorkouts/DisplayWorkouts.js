import React, { Component } from 'react'
import FitpadApiService from '../../Services/fitpad-api-service'
import './DisplayWorkouts.css';

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
        <ul className="exerciseName">{myWorkout.exercise_name} </ul> 
          <li className="set">{myWorkout.workout_set} </li>
          <li className="rep">{myWorkout.workout_rep} </li>
          <li className="weight">{myWorkout.workout_weight} </li>
          <li className="notes">{myWorkout.notes} </li>
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