import React from "react";
import { shallow } from "enzyme";
import About from "../client/src/index.jsx";

describe("About", () => {
  test("renders", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.exists()).toBe(true);
  });
});
