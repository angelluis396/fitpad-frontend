import React, { Component } from 'react';
import FitPadServices from '../services/fitpadservices';
import fitpadservices from '../services/fitpadservices';

export class FitPadButtons extends Component {
  logWorkout = (e) => {
    e.preventDefault();
    fitpadservices.logWorkout(e.target.name)
    .then( result => console.log(result))git 
  }
  render() {
    return (
      <div>
        <button onClick={this.logWorkout} name="arms"> Arms </button>
        <button onClick={this.logWorkout} name="legs"> Legs </button>
      </div>
    )
  }
}

export default FitPadButtons
