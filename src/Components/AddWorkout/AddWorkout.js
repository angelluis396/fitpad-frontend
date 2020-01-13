import React, { Component } from 'react'
import ExerciseForm from './ExerciseForm';
import { Button } from '../Utils/Utils';

export class AddWorkout extends Component {
  // state={
  //   visible: false
  // }
  render() {
    // const workoutForm = this.state.visible ? <ExerciseForm /> : null
    return (
      // <div className="addWorkoutForm">
      //   <Button  className="Button"onClick={()=> {this.setState({visible:true})}}> Add A Workout </Button>
      //   {workoutForm}
      // </div>
        <div>
          <ExerciseForm />
        </div>
    )
  }
}

export default AddWorkout;
