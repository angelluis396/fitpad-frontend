import React, { Component } from 'react'

export class AddWorkout extends Component {
  render() {
    return (
      <div className="addWorkoutForm">
        <form className="addExercise">
          <div className="exercise">
            <label className=" exercise"> Exercise </label>
            <input type="text" placeholder="Enter Exercise Name" />
          </div>
          <div className="sets">
            <label className="sets"> Sets </label>
            <button> Add Set </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddWorkout
