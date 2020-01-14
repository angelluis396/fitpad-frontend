import React, { Component } from 'react'
import { Button, Input, Textarea } from '../Utils/Utils';
import Context from '../../Contexts/Context';
import FitpadApiService from '../../Services/fitpad-api-service';
import '../../Styles/ExerciseForm.css';

export class ExerciseForm extends Component {
  static defaultProps = {
    onAddWorkout: () =>{}
  };
  static contextType = Context;

  handleSubmit = e => {
    e.preventDefault();
    const { workout } = this.context
    const {
      exercise_name, 
      workout_set, 
      workout_rep, 
      workout_weight,
      // user_id, 
      notes,
    } = e.target
      // const user_id = 1
    FitpadApiService.postWorkout(
      exercise_name.value, 
      workout_set.value, 
      workout_rep.value, 
      workout_weight.value,
      // user_id.value, 
      notes.value
    )
    .then(this.context.addWorkout)
    .then(() => {
      exercise_name.value=''; 
      workout_set.value=''; 
      workout_rep.value='';
      workout_weight.value='' ;
      // user_id.value="";
      notes.value='';
    })
    this.props.onAddWorkout();
  }

  // state={
  //   visible: false
  // }
  render() {
    return (
      <div className="exercise-form">
        <h1> Add A Workout </h1>
        <form className="addExercise-form" onSubmit={this.handleSubmit}>

        <div className="border"> </div>
            <label className=" exercise_name"> Exercise: </label>
              <Input className="form-text" name="exercise_name" type="text" placeholder="Enter Exercise Name" />

            <label className="sets"> Sets: </label>
              <Input className="form-text" name="workout_set" type="number" min="1" placeholder="Set"/>

            <label className="reps"> Reps: </label>
              <Input className="form-text" name="workout_rep" type="number" min="1" placeholder="Reps"/>

            <label className="weight"> Weight: </label>
              <Input className="form-text" name="workout_weight" type="number" min="1"placeholder="Weight" />

            <label className="notes"> Notes: </label>
              <Textarea className="form-text" name="notes" id="workoutNotes"/>
            <Button className="form-btn" type="submit"> Log Workout </Button>
         

        </form>
      </div>
    )
  }
}

export default ExerciseForm
