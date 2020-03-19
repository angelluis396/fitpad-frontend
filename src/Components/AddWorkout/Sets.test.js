import React from "react";
import ReactDOM from "react-dom";

import Sets from "./Sets";

describe(` Sets Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(< Sets />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});