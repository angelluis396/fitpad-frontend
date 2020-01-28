import React, { Component } from 'react'

export default class BodyPartDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
       muscles: [],
       selectedMuscle: ""
    }
    this.handleSubmit.bind(this)
  }
 
  handleSubmit(event) {}
  
  handleChange = event => {
    this.setState({
      muscle: event.target.value,
      selectedMuscle: this.props.muscle
    })
  }

  render() {
    const muscles = require("./muscles.json");
    const exercises = require("./exercises.json");



    return (
       <div className="container">
          <select className="muscleSelect" onChange={this.state.handleChange}>
          <option value="" disabled selected> Select A Muscle </option>
            {muscles.map(item => (
              
              <option name="exercise_name" key={item.id} value={item.muscle}>
                {item.muscle}
              </option>
              
            ))}

          </select>
      </div>    
    )
  }
} 

{/* {console.log(this.state.muscle, "hi")} */}
