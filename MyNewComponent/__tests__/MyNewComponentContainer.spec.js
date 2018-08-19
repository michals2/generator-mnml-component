import React from "react";
import { shallow } from "enzyme";
import { createStore } from "redux";

import MyNewComponentContainer from "../MyNewComponentContainer";

const shallowWithStore = (component, state) => {
  const store = createStore(state);
  const context = { store };
  return shallow(component, { context });
};

describe("MyNewComponentContainer component", () => {
  it("maps dispatch to props", () => {
    const state = {
      // TODO: add properties if needed
    };

    const wrapper = shallowWithStore(<MyNewComponentContainer />, state);
    const { actions } = wrapper.props();

    // TODO: assert that action object has expected properties
    expect(actions).toHaveProperty("action1");
    expect(actions).toHaveProperty("action2");
  });
  
  it("maps state to props", () => {
    const state = {
      // TODO: add properties if needed
    };

    const wrapper = shallowWithStore(<MyNewComponentContainer />, state);
    const { state } = wrapper.props();

    // TODO: assert that action object has expected properties
    expect(state).toHaveProperty("stateProp1");
    expect(state).toHaveProperty("stateProp2");
  });

  it("renders MyNewComponentPresenter", () => {
    const state = {};
    const wrapper = shallowWithStore(<MyNewComponentContainer />, state);

    expect(wrapper.find("MyNewComponentPresenter")).toHaveLength(1);
  });
});
