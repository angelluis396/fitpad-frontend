import React from "react";
import ReactDOM from "react-dom";

import FullName from "./FullName";

describe(` FullName Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FullName />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});