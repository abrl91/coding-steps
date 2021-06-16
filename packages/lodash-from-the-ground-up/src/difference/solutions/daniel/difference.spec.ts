import { difference } from "./difference";

describe("Lodash - Difference", () => {
  test("should return an empty array", () => {
    const inputArray = [];
    const valuesToCheck = [2, 3];
    expect(difference(inputArray, valuesToCheck)).toEqual([]);
  });

  test("should return an array of 1 element", () => {
    const inputArray = [1, 2];
    const valuesToCheck = [2, 3];
    expect(difference(inputArray, valuesToCheck)).toEqual([1]);
  });

  test("should return an empty array", () => {
    const inputArray = [2, 3];
    const valuesToCheck = [2, 3];
    expect(difference(inputArray, valuesToCheck)).toEqual([]);
  });

  test("should return the same input array", () => {
    const inputArray = [5, 6, 7, 8, 9];
    const valuesToCheck = [1, 2, 3, 4];
    expect(difference(inputArray, valuesToCheck)).toEqual(inputArray);
  });

  test("should work with strings", () => {
    const inputArray = ["a", "b", "c", "d", "e"];
    const valuesToCheck = ["a", "b"];
    expect(difference(inputArray, valuesToCheck)).toEqual(["c", "d", "e"]);
  });
});
