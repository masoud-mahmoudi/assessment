import React from "react";
import { create } from "react-test-renderer";
import Header from "./header";
describe("Header component", () => {
  test("it matches the snapshot-", () => {
    const component = create(<Header />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
