import React, { Component } from 'react'
import { Button, Input, Textarea } from '../Utils/Utils';
import Context from '../../Contexts/Context';
import FitpadApiService from '../../Services/fitpad-api-service';
import MusclesDropDown from '../DropDowns/MusclesDropDown'
import ExerciseDropDown from '../DropDowns/ExerciseDropDown'
import Sets from './Sets'

import '../../Styles/ExerciseForm.css';
import DropDown from '../DropDowns/DropDown';

export class ExerciseForm extends Component {
  state={
    selectedMuscle: "",
    selectedExercise: ""
  }
  static defaultProps = {
    onAddWorkout: () =>{}
  };
  static contextType = Context;

  handleSelectedMuscle = event =>{
    this.setState({selectedMuscle: event.target.value})
  }

  handleSelectedExercise = event => {
    this.setState({selectedExercise: event.target.value})
  }

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
      workout_weight.value='' ;
      notes.value='';
    })
    this.props.onAddWorkout();
  }


  render() {
    return (
      <div className="exercise-form">
        <h1> Add A Workout </h1>
        <form className="addExercise-form" onSubmit={this.handleSubmit}>

        <div className="border"> </div>
            <MusclesDropDown />
            <ExerciseDropDown />
            <Sets />
            {/* <DropDown /> */}
            
            {/* <label className=" exercise_name"> Exercise: </label>
              <Input className="form-text-normal" name="exercise_name" type="text" placeholder="Enter Exercise Name" /> */}

            {/* <div className="numberInputs">
              <label className="label-forms"> Sets: </label>
                <Input className="form-text" name="workout_set" type="number" min="1" placeholder="Set"/>

              <label className="label-forms"> Reps: </label>
                <Input className="form-text" name="workout_rep" type="number" min="1" placeholder="Reps"/>

              <label className="label-forms"> Weight: </label>
                <Input className="form-text" name="workout_weight" type="number" min="1"placeholder="Weight" />
            </div>
                        */}
            <label className="notes"> Notes: </label>
                <Textarea className="form-text-normal" name="notes" id="workoutNotes"/> 

            <Button className="form-btn" type="submit"> Log Workout </Button>
  
        </form>
      </div>
    )
  }
}

export default ExerciseForm
