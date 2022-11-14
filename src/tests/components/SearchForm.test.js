import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const mockFunction = () => {};
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        onSubmit={mockFunction}
        searchText=""
        setSearchText={mockFunction}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders button correctly", () => {
    const { getByTestId } = render(
      <SearchForm
        onSubmit={mockFunction}
        searchText=""
        setSearchText={mockFunction}
      />
    );
    expect(getByTestId("search-form__button")).toBeInstanceOf(
      HTMLButtonElement
    );
  });
});
