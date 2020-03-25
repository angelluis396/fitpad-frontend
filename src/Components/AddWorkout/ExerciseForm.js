import React, { Component } from 'react'
import { Button, Textarea } from '../Utils/Utils';
import Context from '../../Contexts/Context';
import FitpadApiService from '../../services/fitpad-api-service';
import MusclesDropDown from '../DropDowns/MusclesDropDown'
import ExerciseDropDown from '../DropDowns/ExerciseDropDown'
import Sets from './Sets'
import '../../Styles/ExerciseForm.css';
const exercises = require('../DropDowns/exercises.json')
 
export class ExerciseForm extends Component {
  state={
    selectedMuscle: "",
    selectedExercise: "",
    error: null
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

  handleSubmit = async e => {
    e.preventDefault();
    const { workout } = this.context
    const {
      exercise_name, 
      workout_set, 
      workout_rep, 
      workout_weight,
      notes,
    } = e.target;

    await this.setState({ error:null });

    if(exercise_name.length === 0 || workout_set.length === 0 || workout_rep.length === 0 || workout_weight.length === 0) {
      this.setState({
        error: 'You must fill out exercise name, set, rep, and weight in order to submit this workout'
      })
    }

    FitpadApiService.postWorkout(
      exercise_name.value, 
      workout_set.value, 
      workout_rep.value, 
      workout_weight.value,
      notes.value
    )
    .then(workout => {
      exercise_name.value=''; 
      workout_set.value=''; 
      workout_rep.value='';
      workout_weight.value='' ;
      notes.value='';
      this.props.onAddWorkout();
    })
    .catch(res => {
      this.setState({
        error: res.error
      })
    })
    
  }

  renderWorkoutError() {
    if (this.state.error) {
      return (
        <div role="alert" className="form-alert">
          <p> {this.state.error} </p>
        </div>
      )
    }
  }

  render() {
    const exerciseOptions = this.state.selectedMuscle === "" ? [] : exercises.exercises[this.state.selectedMuscle]

    return (
      <div className="exercise-form">
        <h1> Add an Exercise </h1>
        <form 
          className="addExercise-form" 
          onSubmit={this.handleSubmit}
        >

          {this.renderWorkoutError()}

        <div className="border"> </div>
            <div className="dropDown">
              <MusclesDropDown 
                onSelect={this.handleSelectedMuscle}
                allMuscles={Object.keys(exercises.exercises)}
              />
              <ExerciseDropDown 
                onSelect={this.handleSelectedExercise}
                allExercises={exerciseOptions}
              />
            </div>
            <div className="setsBox">
              <Sets/>
            </div>

            <div className="textArea">
              <Textarea
                placeholder="Notes..."
                className="form-text-normal" 
                name="notes" 
                id="workoutNotes"
              />
            </div>
            <div className="logWorkout"> 
             <Button className="form-btn" type="submit"> Log Exercise </Button>
            </div>              
        </form>
      </div>
    )
  }
}

export default ExerciseForm
