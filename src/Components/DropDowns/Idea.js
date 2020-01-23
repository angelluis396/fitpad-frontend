state = {
  selectedMuscle: "",
  selectedExercises: []
}
//this declares an empty array
//the if statement evaluates if the name of the muscle matches the name of an array in the exercises object
//if they are equal it will return the array for that exercise and push it into the displayedExercises array for later use

let displayedExercises = []
if (muscle.item === exercises.name) {
  return exercises.push(displayedExercises)
}

//selectedMuscle sets the state of the app according to what ever muscle is selected
//selectedExercises state is set to what ever the value of display exercises is

handleChange = (e) => {
  this.setState({
    selectedMuscle: event.target.value,
    selectedExercises: this.state.displayedExercises
  })
}

//selected muscle then sets what is appeared in the drop down for exercises