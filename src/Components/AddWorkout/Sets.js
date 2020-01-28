import React, { Component } from 'react'
import {Input} from '../Utils/Utils'

export default class Sets extends Component {
  state= {
    sets: [{setnumber: "", weight: "", reps: ""}]
  }

  handleChange = (e) => {
    if(["setnumber", "weight", "reps"].includes(e.target.className)) {
      let sets = [...this.state.sets]
      sets[e.target.dataset.id] [e.target.className] = e.target.value
      this.setState({sets}, () => console.log(this.state.sets))
    } else {
      this.setState({[e.target.setnumber] : e.target.value.toUpperCase()})
    }
  }

  addSet = (e) => {
    e.preventDefault()
    this.setState((prevState) => ({
      sets: [...prevState.sets, {setnumber: "",  weight: "", reps: "" }],
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
          <div className="logSetBtn">
            <button className="set-form-btn" onClick={this.addSet}> Add new Set </button>
          </div>
          
          {
            sets.map((val, idx) => {
              let setId = `setId-${idx}`, weightId = `weightId-${idx}`, repsId = `reps-${idx}`
              return (
                <div className="setsBox" key={idx}>
                  <div className="setsInput">
      
                    <Input
                      type="number"
                      setnumber={setId}
                      className="input-num"
                      // value={sets[idx].setnumber}
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
                  </div>
                 
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