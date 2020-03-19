import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import UserHomepage from "./UserHomepage";

describe(` UserHomepage Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
    <BrowserRouter>
      <UserHomepage />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});