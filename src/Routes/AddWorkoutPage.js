import React, { Component } from 'react'
import { Section } from '../Components/Utils/Utils';
import AddWorkout from '../Components/AddWorkout/AddWorkout';

export default class AddWorkoutPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  handleAddWorkout = workout => {
    const { history } = this.props;
    history.push('/Home')
  }
  render() {
    return (
      <Section className="AddWorkoutPage">
        <AddWorkout onAddWorkout={this.handleAddWorkout}/>       
      </Section>
    )
  }
}