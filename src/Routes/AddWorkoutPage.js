import React, { Component } from 'react'
import { Section } from '../Components/Utils/Utils';
import AddWorkout from '../Routes/AddWorkout';

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