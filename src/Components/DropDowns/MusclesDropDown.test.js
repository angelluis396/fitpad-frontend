import React from "react";
import ReactDOM from "react-dom";
import Register from "../LoginRegister/Register";
import ExerciseDropDown from "./ExerciseDropDown";
describe(` ExerciseDropDown Component`, () => {
  
  it("ExerciseDropDown renders without errors", () => {
    
    const div = document.createElement("div");
    ReactDOM.render(<Register />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});