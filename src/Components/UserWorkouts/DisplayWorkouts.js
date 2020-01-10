import React, { Component } from 'react'
import FitpadApiService from '../../Services/fitpad-api-service'

export class DisplayWorkouts extends Component {
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
      <div key={idx}>
        <span className="exerciseName">{myWorkout.exercise_name} </span> 
        <span className="set">{myWorkout.workout_set} </span>
        <span className="rep">{myWorkout.workout_rep} </span>
        <span className="weight">{myWorkout.workout_weight} </span>
        <span className="notes">{myWorkout.notes} </span>
      </div>
    ))
    console.log(myWorkouts)
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

export default DisplayWorkouts
