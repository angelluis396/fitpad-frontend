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
          <button className="set-form-btn" onClick={this.addSet}> Add new Set </button>
          {
            sets.map((val, idx) => {
              let setId = `setId-${idx}`, weightId = `weightId-${idx}`, repsId = `reps-${idx} `
              return (
                <div key={idx}>
                  <Input
                    type="number"
                    setNumber={setId}
                    className="input-num"
                    // value={sets[idx].setNumber}
                    placeholder="set"
                    name="workout_set"
                    min="1"
                  />
                  <Input
                    type="number"
                    reps={repsId}
                    className="input-num"
                    // value={sets[idx].reps}
                    placeholder="reps"
                    name="workout_rep"
                    min="1"
                  />
                  <Input
                    type="number"
                    weight={weightId}
                    className="input-num"
                    // value={sets[idx].weight}
                    placeholder="weight"
                    name="workout_weight"
                    min="1"
                  />
                  
                  <button className="log-set-form-btn" onClick={()=> this.handleRemoveSet(idx)}> Delete Set</button>
                  <button className="log-set-form-btn"> Log Set</button>
                </div>
              )

            })
          }
        </div>
    )
  }
}