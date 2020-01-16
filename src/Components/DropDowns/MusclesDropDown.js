import React, { Component } from 'react'
const muscles = require('./muscles.json');

export default class MusclesDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
       muscles: [],
       muscle: ""
    }
    this.handleSubmit.bind(this)
  }


  handleSubmit(event) {}
  
  handleChange = event => {
    this.setState({muscle: event.target.value})
  }

  getUnique(arr, comp) {
    const unique = arr
      .map(e => e[comp])
      .map((e, i , final) => final.indexOf(e) === i && i)
      .filter(e => arr[e]);
    return unique;
  }
  
  componentDidMount() {
    const muscles = require("./muscles.json");
    this.setState({ muscles:muscles });
  }

  render() {
    
    // const muscles = require('./muscles.json');
    const uniqueMuscle = this.getUnique(this.state.muscles, "tag")
    const muscles = this.state.muscles;
    const muscle = this.state.muscle;
    // const filterDropDown = muscles.filter(function(result) {
    //   return result.tag === muscle;
    // });

    return (
      
      <form>
        <label> Select a Muscle 
          <select 
            value={this.state.muscle} 
            onChange={this.handleChange}
          >
            {this.state.muscles.map(muscle => (
              <option key={muscle.id} value={muscle.tag}>
                {muscle.tag}
              </option>
            ))}

            {/* {uniqueMuscle.map(muscle => (
              <option key={muscle.id} value={muscle.tag}>
                {muscle.tag}
              </option>
            ))} */}

          </select>
        </label>
        <input type="submit" value="Submit" />
        <div> 
          {/* {filterDropDown.map(muscle => (
            <div key={muscle.id} style={{margin:"10px"}}>
              {muscle.muscle}
              <br />
            </div>
          ))} */}
        </div>
      </form>
    )
  }
}