import React, { Component } from 'react'
import { Button } from '../Utils/Utils';
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

            <div className="dropDown">
              <MusclesDropDown />
              <ExerciseDropDown />
            </div>
           
            <Sets /> <br/>
             
            <div className="logWorkout"> 
             <Button className="form-btn" type="submit"> Log Workout </Button>
            </div>
        </form>
      </div>
    )
  }
}

export default ExerciseForm
