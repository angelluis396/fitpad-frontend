import React, { Component } from 'react'

export default class BodyPartDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
       muscles: [],
    }
    this.handleSubmit.bind(this)
  }
 
  handleSubmit(event) {}
  
  handleChange = event => {
    this.setState({muscle: event.target.value})
  }


  render() {
    const muscles = require("./muscles.json");
    const exercises = require("./exercises.json");



    return (
      <div>
        <label> Select a Muscle 
          <select name="exercise_name" onChange={this.state.handleChange}>
            {muscles.map(item => (
              <option name="exercise_name" key={item.id} value={item.muscle}>
                {item.muscle}
              </option>
            ))}

          </select>
          {console.log(this.state.muscle)}
        </label>
      </div>

  
    )
  }
} 