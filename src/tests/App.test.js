import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import getForecast from "../request/getForecast";

describe("App", () => {
  test("renders App components correctly", () => {
    render(<App />);
    const h1Element = screen.getByText({});
    expect(h1Element).toBeInTheDocument();
  });
});
