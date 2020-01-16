import React, { Component } from 'react'

export default class ExerciseDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
       value: "Shoulders"
    }
    this.handleSubmit.bind(this)
  }


  handleSubmit(event) {}
  
  handleChange = event => {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <form>
        <label> Exercise:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="shoulders"> Shoulder's </option>
            <option value="biceps"> Bicep's </option>
            <option value="triceps"> Tricep's </option>
            <option value="forearms"> Forearm's </option>
            <option value="chest"> Chest </option>
            <option value="traps"> Trap's </option>
            <option value="lats"> Lat's </option>
            <option value="abs"> Ab's </option>
            <option value="hamstrings"> Hamstring's </option>
            <option value="quads"> Quad's </option>
            <option value="glutes"> Glutes </option>
            <option value="calves"> Calves </option>
          </select>

        </label>
      </form>
    )
  }
}
