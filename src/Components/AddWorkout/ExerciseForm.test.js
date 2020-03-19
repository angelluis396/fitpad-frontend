import React from "react";
import ReactDOM from "react-dom";

import ExerciseForm from "./ExerciseForm";

describe(` ExerciseForm Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(< ExerciseForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});