import React, { Component } from 'react'
const exercises = require('./exercises.json');

export default class ExerciseDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises: []
    }
  }


 
  handleChange = event => {
    this.setState({exercise: event.target.value})
  }



  componentDidMount() {
    
    this.setState({ exercises: exercises.exercises });
  }

  render() {
   const {exercises} = this.state 
    
    return (
      <div className="dropDown">
        <label> Pick an Exercise </label>
          <select className="muscleSelect" name="exercise_name" onChange={this.state.handleChange}>
            {exercises && Object.keys(exercises).map(item => {
              console.log(exercises[item])
              return exercises[item].map((exercise, idx) => {
                return <option key={idx} value={exercise}> {exercise} </option>
              })
            })}             
          </select>
            
        
      </div>
    )
  }
}
