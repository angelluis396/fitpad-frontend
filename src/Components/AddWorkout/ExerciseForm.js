import React, { Component } from 'react'
import { Button, Input, Textarea } from '../Utils/Utils';
import Context from '../../Contexts/Context';
import FitpadApiService from '../../Services/fitpad-api-service';

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
      notes,
    } = e.target
    
    FitpadApiService.postWorkout(
      exercise_name.value, 
      workout_set.value, 
      workout_rep.value, 
      workout_weight.value, 
      notes.value
    )
    .then(this.context.addWorkout)
    .then(() => {
      exercise_name.value=''; 
      workout_set.value=''; 
      workout_rep.value='';
      workout_weight.value='' 
      notes.value='';
    })
    this.props.onAddWorkout();
  }

  state={
    visible: false
  }
  render() {
    return (
      <div>
        <form className="addExercise" onSubmit={this.handleSubmit}>
          <div className="exercise">
            <label className=" exercise_name"> Exercise </label>
              <Input name="exercise_name" type="text" placeholder="Enter Exercise Name" />
          </div>
          <div className="workoutNumbers">
            <label className="sets"> Sets </label>
              <Input name="workout_set" type="number" min="1" placeholder="Set"/>
            <label className="reps"> Reps </label>
              <Input name="workout_rep" type="number" min="1" placeholder="Reps"/>
            <label className="weight"> Weight </label>
              <Input name="workout_weight" type="number" min="1"placeholder="Weight" />
            <label className="notes"> Notes: </label>
              <Textarea name="notes" id="workoutNotes"/>
            <Button type="submit"> Log Workout </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default ExerciseForm
