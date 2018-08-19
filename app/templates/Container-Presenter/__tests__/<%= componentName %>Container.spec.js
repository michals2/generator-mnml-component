import React from "react";
import { shallow } from "enzyme";
import { createStore } from "redux";

import <%= componentName %>Container from "../<%= componentName %>Container";

const shallowWithStore = (component, state) => {
  const store = createStore(state);
  const context = { store };
  return shallow(component, { context });
};

describe("<%= componentName %>Container component", () => {
  it("maps dispatch to props", () => {
    const state = {
      // TODO: add properties if needed
    };

    const wrapper = shallowWithStore(<<%= componentName %>Container />, state);
    const { actions } = wrapper.props();

    // TODO: assert that action object has expected properties
    expect(actions).toHaveProperty("action1");
    expect(actions).toHaveProperty("action2");
  });
  
  it("maps state to props", () => {
    const state = {
      // TODO: add properties if needed
    };

    const wrapper = shallowWithStore(<<%= componentName %>Container />, state);
    const { state } = wrapper.props();

    // TODO: assert that action object has expected properties
    expect(state).toHaveProperty("stateProp1");
    expect(state).toHaveProperty("stateProp2");
  });

  it("renders <%= componentName %>Presenter", () => {
    const state = {};
    const wrapper = shallowWithStore(<<%= componentName %>Container />, state);

    expect(wrapper.find("<%= componentName %>Presenter")).toHaveLength(1);
  });
});
