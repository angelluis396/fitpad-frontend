import React, { Component } from 'react'
import {Input} from '../Utils/Utils'

export default class Sets extends Component {
  render() {
    return (
      <div className="setsInput">
        <Input
          type="number"
          className="input-num"
          placeholder="Set"
          name="workout_set"
            min="1"
        />
                  
        <Input
          type="number"
          className="input-num"
          placeholder="Reps"
          name="workout_rep"
          min="1"
        />

        <Input
          type="number"
          className="input-num"
          placeholder="Weight"
          name="workout_weight"
          min="1"
        />
      </div>  
    )
  }
}