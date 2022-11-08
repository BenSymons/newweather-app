import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "800",
    humidity: 14,
    temperature: {
      max: 22,
      min: 12,
    },
    wind: {
      speed: 13,
      direction: "s",
    },
  };
  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);
    expect(getByText("Date:Thu Jan 01 1970")).toHaveClass(
      "forecast-details_date"
    );
    expect(getByText("12°C")).toHaveClass("forecast-details_temperaturemin");
    expect(getByText("22°C")).toHaveClass("forecast-details_temperaturemax");
    expect(getByText("14")).toHaveClass("forecast-details_humidity");
    expect(getByText("13")).toHaveClass("forecast-details_windspeed");
    expect(getByText("s")).toHaveClass("forecast-details_winddirection");
  });
});
