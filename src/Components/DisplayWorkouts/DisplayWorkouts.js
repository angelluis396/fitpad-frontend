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
      isContentVisible: false
    }
  }

  handleRemove(idx){
    this.state.myWorkouts.splice(idx, 1)
    this.setState({myWorkouts: this.state.myWorkouts})
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
      isContentVisible: !this.state.isContentVisible
    })
  }
  
  render() {
    const myWorkouts = this.state.myWorkouts.map((myWorkout, idx)=> (
      <div className="userWorkouts" key={idx}>
        <button className="accordion-title" onClick={() => this.toggleAccordion(myWorkout.id)}> {moment(myWorkout.date_created).format("MMMM Do YYYY")} </button>
        {console.log(myWorkout.id)}
        { this.state.isContentVisible && 
        
          <ul 
            className="dateCreated">
            Date: {moment(myWorkout.date_created).format("dddd, MMMM Do YYYY")}<br 
          />
            <li className="exerciseName"> Exercise Name: {myWorkout.exercise_name}</li><br />
            <li className="set">Set: {myWorkout.workout_set} </li><br />
            <li className="rep">Reps: {myWorkout.workout_rep} </li><br />
            <li className="weight">Weight: {myWorkout.workout_weight} </li><br />
            <li className="notes">Notes: {myWorkout.notes} </li> <br/>
            <button onClick={() => this.handleRemove(idx)} > Remove </button>
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



// {myWorkouts.sort((myWorkout1, myWorkout2) => 
//   myWorkout1.date_created < myWorkout2.date_created ? -1 : myWorkout1.date_created > myWorkout2.date_created ? 1 : 0
// )} 
// .sort((myWorkout) => myWorkout.date_created < myWorkout.date_created ? -1 : myWorkout.date_created > myWorkout.date_created ? 1 : 0)
// .sort((myWorkouts1, myWorkouts2) => myWorkouts1.date_created < myWorkouts2.date_created ? -1 : myWorkouts1.date_created > myWorkouts2.date_created ? 1 : 0)
// implement on line 41
// [...this.state.myWorkouts]
//   .map(workout => {
//     return {
//       ...workout,
//       date_created: new Date(workout.date_created)
//     }
//   })
//   .sort((a, b) => b.date_created - a.date_created)