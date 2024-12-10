import { add } from "./index.js";

describe("String Calculator: add function", () => {
  test("returns 0 for an empty string input", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself if only one number is given", () => {
    expect(add("1")).toBe(1);
  });

  test("returns the sum of two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  test("returns the sum of multiple numbers", () => {
    expect(add("1,5,4,10,20")).toBe(40);
  });
  
  test("handles new line as a delimiter along with commas", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  
});
