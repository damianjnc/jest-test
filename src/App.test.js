import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {});
