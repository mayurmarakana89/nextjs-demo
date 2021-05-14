import React from "react";
import { render, screen } from "../tests/test-utils";
import Home from "./";

describe("Home", () => {
  it("should render the heading", () => {
    render(<Home />);
    const heading = screen.getByText(/Product search/i);
    expect(heading).toBeInTheDocument();
  });
});