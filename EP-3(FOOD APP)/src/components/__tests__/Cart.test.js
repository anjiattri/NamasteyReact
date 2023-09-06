import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../redux/appStore";
import Cart from "../Cart";
import Header from "../Header";
import RestrauntMenu from "../RestrauntMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load restro menu compoentn", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestrauntMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Recommended(98)");
  fireEvent.click(accordianHeader);

  const food = screen.getAllByTestId("foodItems");
  expect(food.length).toBe(98);

  const addButton = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButton[0]);

  expect(screen.getByText("Cart(1 items)")).toBeInTheDocument();

  expect(food.length).toBe(98);

  fireEvent.click(screen.getByRole("button", { name: "clear cart" }));

  expect(food.length).toBe(98);
  expect(screen.getByText("Click Here")).toBeInTheDocument();
});
