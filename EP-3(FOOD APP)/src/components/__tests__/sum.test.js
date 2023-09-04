import { sum } from "../sum";
test("sum function calculates sum of two integers", () => {
  const result = sum(3, 4);

  //assertion
  expect(result).toBe(7);
});
