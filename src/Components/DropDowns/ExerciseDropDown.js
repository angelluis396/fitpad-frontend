import React, { Component } from 'react'
const exercises = require('./exercises.json');

export default class ExerciseDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises: {},
      exercise: ""
    }
    this.handleSubmit.bind(this)
  }


  handleSubmit(event) {}
  
  handleChange = event => {
    this.setState({exercise: event.target.value})
  }

  componentDidMount() {
    const exercises = require("./exercises.json");
    this.setState({ exercises:exercises });
  }

  render() {
    // const exercises = require('./exercises.json');
    const exercises = this.state.exercises;
    const exercise = this.state.exercise;
    return (
      <form>
        <label> Pick an Exercise
          <select>
            {Object.keys(exercises).map(item => (
              <option key={item.id} value={item.exercise}> {item.exercise} </option>
            ))}
            {console.log(this.state.exercises)}
            {console.log(this.state.exercises.data[0])}
          </select>

        </label>
      </form>
    )
  }
}
