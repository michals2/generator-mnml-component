import React from "react";
import { shallow } from "enzyme";

import MyNewComponentPresenter from "../MyNewComponentPresenter";

describe("MyNewComponentPresenter component", () => {
  describe("rendering", () => {
    // TODO: describe rendered children components
    it("renders Component1 and Component 2", () => {
      const props = {
        actions: {},
        state: {}
      };
      const wrapper = shallow(<MyNewComponentPresenter {...props} />);

      // TODO: assert that the correct components are rendered
      const Component1 = wrapper.find("Component1");
      expect(Component1.length).toBe(1);
      const Component2 = wrapper.find("Component2");
      expect(Component2.length).toBe(1);
    });
  });

  describe("behavior", () => {
    // TODO: create it statements for each behavior
    it("invokes the appropriate function and arguments when text is entered", () => {
      // TODO: fill in with real test
      const updateValueSpy = jest.fn();
      const props = {
        updateValue: updateValueSpy
      };

      const wrapper = shallow(<MyNewComponentPresenter {...props} />);
      let Input = wrapper.find("Input");

      const text = "Hello";

      Input.simulate("change", { target: { value: text } });
      expect(updateValueSpy).toHaveBeenCalledTimes(1);
      expect(updateValueSpy.mock.calls[0][0]).toBe(text);
    });
  });
});
