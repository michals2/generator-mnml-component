import React from "react";
import { shallow } from "enzyme";

import <%= componentName %>WithState from "../<%= componentName %>WithState";

describe("<%= componentName %>WithState component", () => {
  describe("state and props", () => {
    // TODO: describe state shape
    it("has prop1 and prop2 in its state", () => {
      const wrapper = shallow(<<%= componentName %>WithState />);
      const state = wrapper.state();

      // TODO: assert state shape
      expect(state).toHaveProperty("prop1");
      expect(state).toHaveProperty("prop2");
    });

    // TODO: describe props shape
    it("passes prop1, prop2 and stateHandler1 as props", () => {
      const wrapper = shallow(<<%= componentName %>WithState />);
      const props = wrapper.props();

      // TODO: assert props shape
      expect(props).toHaveProperty("prop1");
      expect(props).toHaveProperty("prop2");
      expect(props).toHaveProperty("stateHandler1");
    });

    it("passes props from parent to children", () => {
      const parentProps = { a: 1 };
      const wrapper = shallow(<<%= componentName %>WithState {...parentProps} />);
      const props = wrapper.props();

      expect(props).toHaveProperty("a", 1);
    });
  });

  describe("rendered children", () => {
    it("renders <%= componentName %>Presenter", () => {
      const wrapper = shallow(<<%= componentName %>WithState />);
      expect(wrapper.find("<%= componentName %>Presenter")).toHaveLength(1);
    });
  })

  describe("stateHandlers", () => {
    // TODO: create it statements for each state handler
    describe("stateHandler1", () => {
      it("sets prop1 to false", () => {
        const wrapper = shallow(<<%= componentName %>WithState />);
        expect(wrapper.state()).toHaveProperty("prop1", true);
  
        wrapper.props().stateHandler1();
        expect(wrapper.state()).toHaveProperty("prop1", false);
      });
    })
  });
});
