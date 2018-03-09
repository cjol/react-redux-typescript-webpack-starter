import * as React from "react";
import { shallow } from "enzyme";
import { Counter } from "../Counter";

describe("Counter", () => {
  const component = shallow(
    <Counter count={4} title="Sample Counter" start={() => {}} />
  );

  it("should match a snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should have a title header", () => {
    const header = component.find("h2");

    expect(header.exists()).toBeTruthy();
    expect(header.contains("Sample Counter")).toBeTruthy();
  });

  it("should have a counter", () => {
    const counter = component.find("div");

    expect(counter.exists()).toBeTruthy();
    expect(counter.text()).toBe("Counter: 4");
    // expect(counter.contains("Counter: 4")).toBeTruthy();
  });
});
