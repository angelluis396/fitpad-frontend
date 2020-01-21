import React, { Component } from 'react'

export class DropDown extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      selectedOption: ''
    }
  }
  
  handleChange (e) {
    this.setState({selectedOption: e.target.value})
  }
  
  render() {
  
    let myMessage = 'you selected' + this.state.selectedOption;
    return (
      <div>
        <select onChange = {this.state.handleChange} value={this.state.selectedOption}>
          <option value = "shoulders"> Shoulders </option>
          <option value = "biceps"> Biceps </option>
          <option value = "triceps"> Triceps </option>
          <option value = "forearms"> Forearms </option>
          <option value = "chest"> Chest </option>
          <option value = "traps"> Traps </option>
          <option value = "lats"> Lats </option>
          <option value = "abs"> Abs </option>
          <option value = "hamstrings"> Hamstrings </option>
          <option value = "quads"> Quads </option>
          <option value = "glutes"> Glutes </option>
          <option value = "calves"> Calves </option>
        </select>
        {/* <p>{console.log(this.state.props.selectedOption)}</p> */}
      </div>
      
    
    
    )
  }
}

export default DropDown
