import React, { Component } from 'react'
import { string, object } from 'prop-types'

export default class BodyPartDropDown extends Component {
  
  handleChange = event => {
    this.props.onSelect(event)
  }

  render() {
    const allMuscles = this.props.allMuscles 
    return (
       <div className="container">
          <select className="muscleSelect" onChange={this.handleChange}>
            <option value="" disabled selected> Select A Muscle </option>
              {allMuscles.map(exercises => {
                {console.log(allMuscles)}
                return (
                  <option name="exercise_name" key={exercises} value={this.props.allMuscles}>
                    {this.props.allMuscles}
                  </option> 
                )           
             })}

          </select>
      </div>    
    )
  }
} 
