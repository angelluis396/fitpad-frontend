import React, { Component } from 'react'
const exercises = require('./exercises.json');

export default class ExerciseDropDown extends Component {
 
  handleChange = event => {
    this.props.onSelect(event);
  }

  render() {
   const allExercises = this.props.allExercises 
  
    return (
      <div className="container">
          <select 
            className="muscleSelect" 
            name="exercise_name" 
            onChange={this.handleChange}
          >
            <option 
              value="" disabled selected> 
              Select An Exercise 
            </option>
              {allExercises.map((exercise, idx) => {      
                return <option key={idx} value={exercise}> {exercise} </option>
              })}        
            
          </select>
      </div>   
      
    )
  }
}

