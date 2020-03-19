import React from "react";
import ReactDOM from "react-dom";

import DisplayWorkouts from "./DisplayWorkouts";

describe(` DisplayWorkouts Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(< DisplayWorkouts />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});