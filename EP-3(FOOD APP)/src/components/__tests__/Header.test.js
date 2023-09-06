import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../redux/appStore";
import Header from "../Header";

describe("test cases for header", () => {
  test("should load header component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("should load header component with a cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartButton = screen.getByText(/Cart/);
    expect(cartButton).toBeInTheDocument();
  });

  test("should change login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});
