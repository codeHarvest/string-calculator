import { add } from "./index.js";

describe("String Calculator: add function", () => {
  test("returns 0 for an empty string input", () => {
    expect(add("")).toBe(0);
  });
});
