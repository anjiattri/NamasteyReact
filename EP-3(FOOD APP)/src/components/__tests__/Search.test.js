import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/bodyDataMock.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});
// describe("test cases for search functionality", () => {
it("should search reslist for pizza input in the body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "search" });
  console.log(searchButton);
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchButton);

  //scrren shoudl load 4 cards for pizza
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(4);
});
it("should filter top rated restro", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restraunts",
  });
  fireEvent.click(topRatedButton);

  //scrren shoudl load 4 cards for pizza
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(12);
});
