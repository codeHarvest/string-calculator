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

  test("supports custom delimiters defined in the first line", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  
  test("throws an error if negatives are present", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
  });
  
  test("throws an error if multiple negatives are provided", () => {
    expect(() => add("1,-2,-3,-4")).toThrow("negative numbers not allowed -2, -3, -4");
  });
  
});
