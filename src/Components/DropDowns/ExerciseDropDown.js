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
    const exercises = require("./exercises.json");
    this.setState({ exercises: exercises.exercises });
  }

  render() {

    const exercises = require("./exercises.json");
    
    return (
      <div>
        <label> Pick an Exercise
          <select onChange={this.state.handleChange}>
            {exercises && Object.keys(this.state.exercises).map(item => (
              <option key={item.id} value={item.exercises}>
                {item.exercises} 
              </option>
            ))}


            
             {console.log(this.state.exercises)}
             
          </select>

        </label>
      </div>
    )
  }
}
