import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestroCard from "../RestroCard";
import MOCK_DATA from "../mocks/restroCardMock.json";

describe("test cases for restro card component", () => {
  test("should load restro component with a props data", () => {
    render(<RestroCard resData={MOCK_DATA} />);
    const name = screen.getByText("LunchBox - Meals and Thalis");
    expect(name).toBeInTheDocument();
  });
});
