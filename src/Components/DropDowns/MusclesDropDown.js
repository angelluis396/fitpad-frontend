import React, { Component } from 'react'

export default class MusclesDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
       muscles: [
        {id:"1", muscle: "Shoulder's"},
        {id:"2", muscle: "Bicep's"},
        {id:"3", muscle: "Tricep's"},
        {id:"4", muscle: "Forearm's"},
        {id:"5", muscle: "Chest"},
        {id:"6", muscle: "Trap's"},
        {id:"7", muscle: "Lat's"},
        {id:"8", muscle: "Ab's"},
        {id:"9", muscle: "Hamstring's"},
        {id:"10", muscle: "Quad's"},
        {id:"11", muscle: "Glutes"},
        {id:"12", muscle: "Calves"}
       ]
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
        <label> Select a Muscle 
          <select>
            {this.state.muscles.map(item => (
              <option key={item.id} value={item.muscle}>
                {item.muscle}
              </option>
            ))}
          </select>

        </label>
      </form>
    )
  }
}