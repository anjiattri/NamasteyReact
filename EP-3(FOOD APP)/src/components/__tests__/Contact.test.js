import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("test cases for contact us", () => {
  beforeAll(() => {
    console.log("before all test");
  });
  beforeEach(() => {
    console.log("before each");
  });
  it("should load contact us component", () => {
    // render
    render(<Contact />);
    //query
    const heading = screen.getByRole("heading");
    //assert
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("should load input name in contact component", () => {
    render(<Contact />);
    const name = screen.getByPlaceholderText("name");
    expect(name).toBeInTheDocument();
  });

  test("should load 2 input boxes in contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);
    expect(inputBoxes.length).toBe(2);
  });
});
