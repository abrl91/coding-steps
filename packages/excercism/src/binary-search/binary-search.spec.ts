import { solutions } from "./solutions";

function runSpec(name: string, binarySearch: Function) {
  describe("Binary Search", () => {
    test("finds a value in an array with one element", () => {
      expect(binarySearch([6], 6)).toEqual(0);
    });

    test("finds a value in the middle of an array", () => {
      const array = [1, 3, 4, 6, 8, 9, 11];
      expect(binarySearch(array, 6)).toEqual(3);
    });

    test("finds a value at the beginning of an array", () => {
      const array = [1, 3, 4, 6, 8, 9, 11];
      expect(binarySearch(array, 1)).toEqual(0);
    });

    test("finds a value at the end of an array", () => {
      const array = [1, 3, 4, 6, 8, 9, 11];
      expect(binarySearch(array, 11)).toEqual(6);
    });

    test("finds a value in an array of odd length", () => {
      const array = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 634];
      expect(binarySearch(array, 144)).toEqual(9);
    });

    test("finds a value in an array of even length", () => {
      const array = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
      expect(binarySearch(array, 21)).toEqual(5);
    });

    test("identifies that a value is not included in the array", () => {
      const array = [1, 3, 4, 6, 8, 9, 11];
      expect(() => binarySearch(array, 7)).toThrow(
        new Error("Value not in array")
      );
    });

    test("a value smaller than the array's smallest value is not found", () => {
      const array = [1, 3, 4, 6, 8, 9, 11];
      expect(() => binarySearch(array, 0)).toThrow(
        new Error("Value not in array")
      );
    });

    test("a value larger than the array's largest value is not found", () => {
      const array = [1, 3, 4, 6, 8, 9, 11];
      expect(() => binarySearch(array, 13)).toThrow(
        new Error("Value not in array")
      );
    });

    test("nothing is found in an empty array", () => {
      expect(() => binarySearch([], 1)).toThrow(
        new Error("Value not in array")
      );
    });

    test("nothing is found when the left and right bounds cross", () => {
      expect(() => binarySearch([1, 2], 0)).toThrow(
        new Error("Value not in array")
      );
    });
  });
}

Object.entries(solutions).forEach(([name, solution]) =>
  runSpec(name, solution)
);
