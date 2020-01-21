import React, { Component } from 'react'
import {Input} from '../Utils/Utils'

export default class Sets extends Component {
  state= {
    sets: [{setNumber: "", weight: "", reps: ""}]
  }

  handleChange = (e) => {
    if(["setNumber", "weight", "reps"].includes(e.target.className)) {
      let sets = [...this.state.sets]
      sets[e.target.dataset.id] [e.target.className] = e.target.value
      this.setState({sets}, () => console.log(this.state.sets))
    } else {
      this.setState({[e.target.setNumber] : e.target.value.toUpperCase()})
    }
  }

  addSet = (e) => {
    e.preventDefault()
    this.setState((prevState) => ({
      sets: [...prevState.sets, {setNumber: "",  weight: "", reps: "" }],
    }));
  }

  handleRemoveSet(idx){
    this.state.sets.splice(idx, 1)
    this.setState({sets: this.state.sets})
  }
  render() {
    let {sets} = this.state
    
    return (
      <div>
          <button onClick={this.addSet}> Add new Set </button>
          {
            sets.map((val, idx) => {
              let setId = `setId-${idx}`, weightId = `weightId-${idx}`, repsId = `reps-${idx} `
              return (
                <div key={idx}>
                  <Input
                    type="number"
                    setNumber={setId}
                    className="setNumber"
                    // value={sets[idx].setNumber}
                    placeholder="set"
                    name="workout_set"
                    min="1"
                  />
                  <Input
                    type="number"
                    reps={repsId}
                    className="reps"
                    // value={sets[idx].reps}
                    placeholder="reps"
                    name="workout_rep"
                    min="1"
                  />
                  <Input
                    type="number"
                    weight={weightId}
                    className="weight"
                    // value={sets[idx].weight}
                    placeholder="weight"
                    name="workout_weight"
                    min="1"
                  />
                  <button> Log Set...</button>
                  <button onClick={()=> this.handleRemoveSet(idx)}> Delete Set...</button>
                </div>
              )

            })
          }
        </div>
    )
  }
}